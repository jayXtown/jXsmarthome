package com.poersmart.smarthome;

import android.app.AlertDialog;
import android.app.ProgressDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Handler;
import android.os.Message;
import android.os.PowerManager;
import android.util.Log;

import com.poersmart.smarthome.common.PoerLanguageManager;
import com.poersmart.smarthome.version.UpdateInfo;
import com.poersmart.smarthome.version.UpdateInfoParser;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

import io.dcloud.common.DHInterface.IWebview;
import io.dcloud.common.DHInterface.StandardFeature;

/**
 * Created by wu_jingyang on 16/5/10.
 */
public class PoerDownload extends StandardFeature {

    private final String TAG = "PoerSmartLogger";

    private IWebview mWebview;
    private Context mContext;

    private ProgressDialog mProgressDialog;
    private PoerLanguageManager mLang;

    private JSONObject mParams;
    private String mUrl;
    private String mFileName;
    private String mLanguage;

    // 版本升级相关
    private int localVersion;
    private final int UPDATE_NONEED = 0;
    private final int UPDATE_CLIENT = 1;

    private UpdateInfo updateInfo;

    Handler updateHandler = new Handler() {
        @Override
        public void handleMessage(Message msg) {
            super.handleMessage(msg);
            switch (msg.what) {
                case UPDATE_NONEED:
                    break;
                case UPDATE_CLIENT:
                    AlertDialog.Builder alert = new AlertDialog.Builder(mWebview.getContext());
                    alert.setTitle(mLang.getString(R.array.titleUpdate))
                            .setMessage(mLang.getString(R.array.msgUpdate))
                            .setPositiveButton(mLang.getString(R.array.buttonUpdateNow), new DialogInterface.OnClickListener() {
                                @Override
                                public void onClick(DialogInterface dialogInterface, int i) {
                                    JSONArray array = new JSONArray();
                                    JSONObject json = new JSONObject();
                                    try {
                                        json.put("Url", updateInfo.getUrl());
                                        json.put("fileName", updateInfo.getFileName());
                                        json.put("language", mLanguage);
                                        array.put(json);
                                        downloadFile(mWebview, array);
                                    } catch (JSONException e) {
                                        e.printStackTrace();
                                    }
                                }
                            })
                            .setNegativeButton(mLang.getString(R.array.buttonCancel), new DialogInterface.OnClickListener() {
                                @Override
                                public void onClick(DialogInterface dialogInterface, int i) {
                                    dialogInterface.dismiss();
                                }
                            });
                    alert.create().show();
                    break;
            }
        }
    };

    private void installApk() {
        File file = new File(mFileName);
        Intent intent = new Intent();
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        intent.setAction(Intent.ACTION_VIEW);
        String type = "application/vnd.android.package-archive";
        intent.setDataAndType(Uri.fromFile(file), type);
        mContext.startActivity(intent);
    }

    public void checkUpdate(final IWebview webview, JSONArray args) {
        InputStream inputStream = null;
        try {
            mWebview = webview;
            mContext = webview.getContext();
            mParams = args.getJSONObject(0);
            mLanguage = mParams.getString("language");
            mLang = new PoerLanguageManager(mContext, mLanguage);
            PackageManager packageManager = mContext.getPackageManager();
            PackageInfo packageInfo = packageManager.getPackageInfo(mContext.getPackageName(), 0);

            localVersion = packageInfo.versionCode;

            CheckVersionTask cvt = new CheckVersionTask();
            new Thread(cvt).start();

//            String path = mContext.getResources().getString(R.string.version_xml_url);
//            URL url = new URL(path);
//            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
//            conn.setConnectTimeout(5000);
//            conn.setRequestMethod("GET");
//            int respCode = conn.getResponseCode();
//            if (respCode == 200) {
//                inputStream = conn.getInputStream();
//            }
//
//            updateInfo = UpdateInfoParser.getUpdateInfo(inputStream);
//            if (updateInfo.getVersion() > localVersion) {
//
//            } else {
//                Toast.makeText(webview.getContext(), String.valueOf(updateInfo.getVersion()), Toast.LENGTH_SHORT).show();
//            }
        } catch (JSONException e) {
            e.printStackTrace();
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        }
    }

    public void downloadFile(IWebview webview, JSONArray args) {
        Log.d(TAG, "Start Download");
        try {
            mContext = webview.getContext();
            mParams = args.getJSONObject(0);

            mUrl = mParams.getString("Url");
            mFileName = "/sdcard/" + mParams.getString("fileName");
            mLanguage = mParams.getString("language");
            mLang = new PoerLanguageManager(mContext, mLanguage);

            mProgressDialog = new ProgressDialog(webview.getActivity());
//            mProgressDialog.setMessage(mLang.getString(R.array.downloadTitle));
            mProgressDialog.setIndeterminate(true);
            mProgressDialog.setProgressStyle(ProgressDialog.STYLE_HORIZONTAL);
            mProgressDialog.setCanceledOnTouchOutside(false);
            mProgressDialog.setCancelable(false);
            final DownloadTask downloadTask = new DownloadTask(webview.getActivity());
            downloadTask.execute(mUrl);
//            mProgressDialog.setOnCancelListener(new DialogInterface.OnCancelListener() {
//                @Override
//                public void onCancel(DialogInterface dialog) {
//                    downloadTask.cancel(true);
//                }
//            });

        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    public class DownloadTask extends AsyncTask<String, Integer, String> {
        private Context context;
        private PowerManager.WakeLock mWakeLock;
        InputStream input = null;
        OutputStream output = null;
        HttpURLConnection connection = null;

        public DownloadTask(Context context) {
            this.context = context;
        }

        @Override
        protected String doInBackground(String... sUrl) {
            try {
                URL url = new URL(sUrl[0]);
                Log.d(TAG, "URL:" + url);
                connection = (HttpURLConnection) url.openConnection();
                connection.connect();
                // expect HTTP 200 OK, so we don't mistakenly save error report
                // instead of the file
                if (connection.getResponseCode() != HttpURLConnection.HTTP_OK) {
                    return "Server returned HTTP " + connection.getResponseCode()
                            + " " + connection.getResponseMessage();
                }
                // this will be useful to display download percentage
                // might be -1: server did not report the length
                int fileLength = connection.getContentLength();
                // download the file
                input = connection.getInputStream();
                output = new FileOutputStream(mFileName);
                byte data[] = new byte[4096];
                long total = 0;
                int count;
                while ((count = input.read(data)) != -1) {
                    // allow canceling with back button
                    if (isCancelled()) {
                        input.close();
                        return null;
                    }
                    total += count;
                    // publishing the progress....
                    if (fileLength > 0) // only if total length is known
                        publishProgress((int) (total * 100 / fileLength));
                    output.write(data, 0, count);
                }
            } catch (Exception e) {
                return e.toString();
            } finally {
                try {
                    if (output != null)
                        output.close();
                    if (input != null)
                        input.close();
                } catch (IOException ignored) {
                }
                if (connection != null)
                    connection.disconnect();
            }
            return null;
        }

        @Override
        protected void onPreExecute() {
            super.onPreExecute();
            // take CPU lock to prevent CPU from going off if the user
            // presses the power button during download
            PowerManager pm = (PowerManager) context.getSystemService(Context.POWER_SERVICE);
            mWakeLock = pm.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK,
                    getClass().getName());
            mWakeLock.acquire();
            mProgressDialog.show();
        }

        @Override
        protected void onProgressUpdate(Integer... progress) {
            super.onProgressUpdate(progress);
            // if we get here, length is known, now set indeterminate to false
            mProgressDialog.setIndeterminate(false);
            mProgressDialog.setMax(100);
            mProgressDialog.setProgress(progress[0]);
        }

        @Override
        protected void onPostExecute(String result) {
            mWakeLock.release();
            mProgressDialog.dismiss();
            if (result != null) {
                final AlertDialog.Builder builder = new AlertDialog.Builder(mContext);
                builder.setTitle(mLang.getString(R.array.tipTitle));
                builder.setMessage(mLang.getString(R.array.msgDownloadFail));
                builder.setPositiveButton(mLang.getString(R.array.buttonCancel), new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        dialogInterface.dismiss();
                    }
                });

                builder.create().show();
            } else {
                installApk();
            }
        }
    }

    public class CheckVersionTask implements Runnable {

        InputStream inputStream;

        @Override
        public void run() {
            try {
                String path = mContext.getResources().getString(R.string.version_xml_url);
                URL url = new URL(path);
                HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                conn.setConnectTimeout(5000);
                conn.setRequestMethod("GET");
                int respCode = conn.getResponseCode();

                if (respCode == 200) {
                    inputStream = conn.getInputStream();
                }

                updateInfo = UpdateInfoParser.getUpdateInfo(inputStream);

                if (updateInfo.getVersion() > localVersion) {
                    Message msg = new Message();
                    msg.what = UPDATE_CLIENT;
                    updateHandler.sendMessage(msg);
                } else {
                    Message msg = new Message();
                    msg.what = UPDATE_NONEED;
                }

            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
