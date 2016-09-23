package com.poersmart.smarthome;

import android.content.Context;
import android.os.AsyncTask;
import android.util.Log;

import com.espressif.iot.esptouch.EsptouchTask;
import com.espressif.iot.esptouch.IEsptouchListener;
import com.espressif.iot.esptouch.IEsptouchResult;
import com.espressif.iot.esptouch.IEsptouchTask;
import com.espressif.iot.esptouch.task.__IEsptouchTask;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

import io.dcloud.common.DHInterface.IWebview;
import io.dcloud.common.DHInterface.StandardFeature;
import io.dcloud.common.util.JSUtil;

/**
 * Created by wu_jingyang on 16/4/25.
 */
public class PoerSmartConfigManager extends StandardFeature {

    private final String TAG = "PoerSmartLogger";

    private Context mContext;
    private IWebview mWebview;
    private JSONObject mResultJson;

    private JSONObject mParmams;
    private String mCallbackID;

//    private ProgressDialog mProgressDialog;
    private IEsptouchTask mEsptouchTask;

//    private String ;

    /**
     * 开始一键配置SmartConfig配置
     * @param webview
     * @param params
     */
    public void startConfiguration(IWebview webview, JSONArray params) {
        mContext = webview.getContext();
        mWebview = webview;
        String apSsid;
        String apPassword;
        String apBssid;
        Boolean isSsidHidden = false;
        String taskResultCountStr;
        String isSsidHiddenStr = "NO";
        try {
            mParmams = params.getJSONObject(0);
            mCallbackID = mParmams.getString("callbackID");
            apSsid = mParmams.getString("apSSID");
            apPassword = mParmams.getString("apPassword");
            apBssid = mParmams.getString("apBssid");
            isSsidHidden = mParmams.getBoolean("isSsidHidden");
            taskResultCountStr = mParmams.getString("taskResultCount");
            String logStr = "callbackID: %s, apSSID: %s, apPassword: %s, apBssid: %s, isSsidHidden: %b, taskResultCountStr: %s";
            Log.d(TAG, String.format(logStr, mCallbackID, apSsid, apPassword, apBssid, isSsidHidden, taskResultCountStr));

            if (isSsidHidden) {
                isSsidHiddenStr = "YES";
            }
            if (__IEsptouchTask.DEBUG) {
                Log.d(TAG, "mBtnConfirm is clicked, mEdtApSsid = " + apSsid
                        + ", " + " mEdtApPassword = " + apPassword);
            }
            new EsptouchAsyncTask3().execute(apSsid, apBssid, apPassword,
                    isSsidHiddenStr, taskResultCountStr);
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    /**
     * 取消SmartConfig配置
     * @param webview
     * @param params
     */
    private void cancelConfiguration(IWebview webview, JSONArray params) {
        try {
            mParmams = params.getJSONObject(0);
            mCallbackID = mParmams.getString("callbackID");

            if (mEsptouchTask != null) {
                mEsptouchTask.interrupt();
            }

            getResultJSON(1, "");

            JSUtil.execCallback(webview, mCallbackID, mResultJson, JSUtil.OK, false);
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    /**
     * 请求成功/失败时返回的json对象
     *
     * @param status  处理状态
     * @param message 消息内容
     * @return
     * @throws JSONException
     */
    private void getResultJSON(int status, String message) throws JSONException {
        mResultJson = new JSONObject();
        mResultJson.put("status", status);
        mResultJson.put("message", message);
    }

    private void onEsptoucResultAddedPerform(final IEsptouchResult result) {
        mWebview.getActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                try {
                    String mac = result.getBssid();
                    String text = mac + " is connected to the wifi";
                    Log.d(TAG, "Toast Message:" + text);
//                    Toast.makeText(mWebview.getContext(), text, Toast.LENGTH_LONG).show();
                    getResultJSON(1, "Configuration Success");
                    mResultJson.put("mac_address", mac);
                    JSUtil.execCallback(mWebview, mCallbackID, mResultJson, JSUtil.OK, false);
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }

        });
    }

    private IEsptouchListener myListener = new IEsptouchListener() {

        @Override
        public void onEsptouchResultAdded(final IEsptouchResult result) {
            onEsptoucResultAddedPerform(result);
        }
    };

    private class EsptouchAsyncTask3 extends AsyncTask<String, Void, List<IEsptouchResult>> {


        // without the lock, if the user tap confirm and cancel quickly enough,
        // the bug will arise. the reason is follows:
        // 0. task is starting created, but not finished
        // 1. the task is cancel for the task hasn't been created, it do nothing
        // 2. task is created
        // 3. Oops, the task should be cancelled, but it is running
        private final Object mLock = new Object();

        @Override
        protected void onPreExecute() {
//            mProgressDialog = new ProgressDialog(mContext);
//            mProgressDialog
//                    .setMessage("Esptouch is configuring, please wait for a moment...");
//            mProgressDialog.setCanceledOnTouchOutside(false);
//            mProgressDialog.setOnCancelListener(new DialogInterface.OnCancelListener() {
//                @Override
//                public void onCancel(DialogInterface dialog) {
//                    synchronized (mLock) {
//                        if (__IEsptouchTask.DEBUG) {
//                            Log.i(TAG, "progress dialog is canceled");
//                        }
//                        if (mEsptouchTask != null) {
//                            mEsptouchTask.interrupt();
//                        }
//                    }
//                }
//            });
//            mProgressDialog.setButton(DialogInterface.BUTTON_POSITIVE,
//                    "Waiting...", new DialogInterface.OnClickListener() {
//                        @Override
//                        public void onClick(DialogInterface dialog, int which) {
//                        }
//                    });
//            mProgressDialog.show();
//            mProgressDialog.getButton(DialogInterface.BUTTON_POSITIVE)
//                    .setEnabled(false);
        }

        @Override
        protected List<IEsptouchResult> doInBackground(String... params) {
            int taskResultCount = -1;
            synchronized (mLock) {
                String apSsid = params[0];
                String apBssid = params[1];
                String apPassword = params[2];
                String isSsidHiddenStr = params[3];
                String taskResultCountStr = params[4];
                boolean isSsidHidden = false;
                if (isSsidHiddenStr.equals("YES")) {
                    isSsidHidden = true;
                }
                taskResultCount = Integer.parseInt(taskResultCountStr);
                mEsptouchTask = new EsptouchTask(apSsid, apBssid, apPassword,
                        isSsidHidden, mContext);
                mEsptouchTask.setEsptouchListener(myListener);
            }
            List<IEsptouchResult> resultList = mEsptouchTask.executeForResults(taskResultCount);
            return resultList;
        }

        @Override
        protected void onPostExecute(List<IEsptouchResult> result) {
            IEsptouchResult firstResult = result.get(0);
            if (!firstResult.isCancelled()) {
                if (firstResult.isSuc()) {
//                    try {
//                        getResultJSON(1, "Configuration Success");
//                        mResultJson.put("mac_address", firstResult.getBssid());
//                        JSUtil.execCallback(mWebview, mCallbackID, mResultJson, JSUtil.OK, false);
//                    } catch (JSONException e) {
//                        e.printStackTrace();
//                    }
                } else {
                    try {
                        getResultJSON(0, "");
                        JSUtil.execCallback(mWebview, mCallbackID, mResultJson, JSUtil.OK, false);
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    }
}
