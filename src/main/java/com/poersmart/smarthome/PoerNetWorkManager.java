package com.poersmart.smarthome;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.PackageManager;
import android.net.ConnectivityManager;
import android.net.wifi.ScanResult;
import android.net.wifi.WifiConfiguration;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;
import android.os.Build;
import android.os.Handler;
import android.os.Message;

import com.poersmart.smarthome.common.PoerSmartFun;
import com.poersmart.smarthome.common.WifiAutoConnectManager;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

import io.dcloud.common.DHInterface.IWebview;
import io.dcloud.common.DHInterface.StandardFeature;
import io.dcloud.common.util.JSUtil;

/**
 * Created by wu_jingyang on 16/4/19.
 */
public class PoerNetWorkManager extends StandardFeature {

    private WifiAdmin wifiAdmin;
    private Context mContext;

    private IWebview webView = null;
    private JSONObject resultObj = null;
    private String callbackID = null;

    private final int MESSAGE_WAIT_ESP_ENABLE = 0x102;
    private final int MESSAGE_CONNECTOT_ESP = 0x103;
    WifiManager wifiMgr;
    List<ScanResult> lstWifi;
    private boolean isEspAp = false;

    WifiScanReceiver wifiReciever;

    private class WifiScanReceiver extends BroadcastReceiver {
        public void onReceive(Context c, Intent intent) {
            try {
                List<ScanResult> list = wifiMgr.getScanResults();
                lstWifi = new ArrayList<>();
                List<JSONObject> resultNetList = new ArrayList<>();
                for (ScanResult sr : list) {
                    if (PoerSmartFun.isESPAp(sr.SSID) == isEspAp) {
                        lstWifi.add(sr);

                        JSONObject jsonSR = new JSONObject();
                        jsonSR.put("SSID", sr.SSID);
                        jsonSR.put("BSSID", sr.BSSID);
                        jsonSR.put("value", sr.SSID);
                        jsonSR.put("text", sr.SSID);

                        resultNetList.add(jsonSR);
                    }
                }

                resultObj = getResultJSON(1, "");
                resultObj.put("resData", resultNetList);

                JSUtil.execCallback(webView, callbackID, resultObj, JSUtil.OK, false);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    }

    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {

        if (requestCode == 1
                && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
            wifiReciever = new WifiScanReceiver();
            webView.getActivity().registerReceiver(wifiReciever, new IntentFilter(WifiManager.SCAN_RESULTS_AVAILABLE_ACTION));
            wifiMgr.startScan();
        }
    }

    /**
     * 初始化插件
     *
     * @param webview
     * @param args
     */
    public void init(IWebview webview, JSONArray args) {
        mContext = webview.getContext();
    }

    /**
     * 开始扫描
     *
     * @param webview
     * @param args
     * @throws JSONException
     */
    public void startScanWifi(IWebview webview, JSONArray args) throws JSONException {
        isEspAp = args.getBoolean(0);
        wifiMgr = (WifiManager) webview.getContext().getSystemService(Context.WIFI_SERVICE);
        wifiReciever = new WifiScanReceiver();
        webview.getActivity().registerReceiver(wifiReciever, new IntentFilter(WifiManager.SCAN_RESULTS_AVAILABLE_ACTION));
        wifiMgr.startScan();
    }

    /**
     * 获取Wifi列表
     *
     * @param webview
     * @param data
     * @throws JSONException
     */
    public void getNetWorkList(IWebview webview, JSONArray data) throws JSONException {
        webView = webview;
        JSONObject json = data.getJSONObject(0);
        callbackID = json.getString("callbackID");
        if (json.has("isEspAp")) {
            isEspAp = json.getBoolean("isEspAp");
        }
        wifiMgr = (WifiManager) webView.getActivity().getSystemService(Context.WIFI_SERVICE);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if (webView.getActivity().checkSelfPermission(android.Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
                webView.getActivity().requestPermissions(new String[]{android.Manifest.permission.ACCESS_COARSE_LOCATION, android.Manifest.permission.ACCESS_FINE_LOCATION, android.Manifest.permission.ACCESS_WIFI_STATE, android.Manifest.permission.CHANGE_WIFI_STATE, android.Manifest.permission.CHANGE_NETWORK_STATE, android.Manifest.permission.ACCESS_NETWORK_STATE}, 1);

            } else {
                wifiReciever = new WifiScanReceiver();
                webView.getActivity().registerReceiver(wifiReciever, new IntentFilter(WifiManager.SCAN_RESULTS_AVAILABLE_ACTION));
                wifiMgr.startScan();
            }
        } else {
            wifiMgr.startScan();
            resultObj = getResultJSON(1, "");

            List<ScanResult> netList = PoerSmartFun.getWifiScanResult(webview.getActivity(), isEspAp);
            List<JSONObject> resultNetList = new ArrayList<>();

            for (ScanResult sr : netList) {
                JSONObject jsonSR = new JSONObject();
                jsonSR.put("SSID", sr.SSID);
                jsonSR.put("BSSID", sr.BSSID);
                jsonSR.put("value", sr.SSID);
                jsonSR.put("text", sr.SSID);

                resultNetList.add(jsonSR);
            }

            resultObj.put("resData", resultNetList);

            JSUtil.execCallback(webView, callbackID, resultObj, JSUtil.OK, false);
        }
    }

    /**
     * 判断是否有POR_开头的网关
     *
     * @param webview
     * @param data
     */
    public void hasPoerGateway(IWebview webview, JSONArray data) {
        try {
            JSONObject params = data.getJSONObject(0);
            String callbackID = params.getString("callbackID");
            List<ScanResult> netList = PoerSmartFun.getWifiScanResult(webview.getContext(), true);

            JSONObject resultJson = getResultJSON(1, "");
            resultJson.put("resData", netList.size() > 0);

            JSUtil.execCallback(webview, callbackID, resultJson, JSUtil.OK, false);
        } catch (JSONException e) {
            e.printStackTrace();
        }

    }

    /**
     * 连接到指定SSID的Wifi
     *
     * @param webview
     * @param data
     * @throws JSONException
     */
    public void connectToWifi(IWebview webview, JSONArray data) throws JSONException {
        JSONObject json = data.getJSONObject(0);
        wifiAdmin = new WifiAdmin(webview.getContext());
        final String ssid, password;
        try {
            mContext = webview.getActivity();
            webView = webview;
            resultObj = getResultJSON(1, "success");
            callbackID = json.getString("callbackID");
            ssid = json.getString("ssid");
            password = json.getString("password");

            WifiAutoConnectManager autoConnect = new WifiAutoConnectManager((WifiManager) webView.getActivity().getSystemService(Context.WIFI_SERVICE),
                    new WifiAutoConnectManager.OnWifiAutoConnectListener() {
                        @Override
                        public void onWifiAutoConnect(boolean connected) {
                            if (null != mHandler) {
                                mHandler.sendEmptyMessageDelayed(MESSAGE_WAIT_ESP_ENABLE, 1000);
                            }
                        }
                    });

            mHandler.sendEmptyMessageDelayed(MESSAGE_CONNECTOT_ESP, 30000);
            WifiAutoConnectManager.WifiCipherType wfType;
            if (password.equals(""))
                wfType = WifiAutoConnectManager.WifiCipherType.WIFICIPHER_NOPASS;
            else
                wfType = getWifiSecurity(ssid);
            autoConnect.connect(ssid, password, wfType);
        } catch (JSONException e) {

        }
    }

    /**
     * 获取当前连接的SSID
     *
     * @param webview
     * @param data
     * @throws JSONException
     */
    public void getCurrentWifiInfo(IWebview webview, JSONArray data) throws JSONException {
        wifiAdmin = new WifiAdmin(webview.getContext());

        String CallBackID = data.optString(0);
        JSONObject resultJSON;

        try {
            resultJSON = getResultJSON(1, "");
            JSONObject wifiJson = wifiAdmin.getWifiInfoJson();
            resultJSON.put("resData", wifiJson);
            JSUtil.execCallback(webview, CallBackID, resultJSON, JSUtil.OK, false);
        } catch (JSONException e) {
            resultJSON = getResultJSON(0, "");
            JSUtil.execCallback(webview, CallBackID, resultJSON, JSUtil.OK, false);
        }
    }

    public void connectToSSID(IWebview webview, JSONArray data) {
        wifiAdmin = new WifiAdmin(webview.getContext());
        String CallBackID = data.optString(0);
        String connSSID = data.optString(1);

//        wifiAdmin.disconnectWifi(wifiAdmin.getNetworkId());
//        wifiAdmin.reconnectWifi();
    }

    public void changeMobileData(IWebview webview, JSONArray args) throws JSONException {
        boolean curState = getMobileDataState(webview.getContext(), null);
        String callbackID = args.getString(0);
        JSONObject resultObj;
        try {
            setMobileData(webview.getContext(), !curState);
            resultObj = getResultJSON(1, "");
            JSUtil.execCallback(webview, callbackID, resultObj, JSUtil.OK, false);
        } catch (Exception e) {
            resultObj = getResultJSON(0, "");
            JSUtil.execCallback(webview, callbackID, resultObj, JSUtil.OK, false);
        }
    }

    private void setMobileData(Context pContext, boolean pBoolean) throws Exception {
//        try {

//        ConnectivityManager mConnectivityManager = (ConnectivityManager) pContext.getSystemService(Context.CONNECTIVITY_SERVICE);
//
//        Class ownerClass = mConnectivityManager.getClass();
//
//        Class[] argsClass = new Class[1];
//        argsClass[0] = boolean.class;
//
//        Method method = ownerClass.getDeclaredMethod("setMobileDataEnabled", argsClass);
//
//        method.invoke(mConnectivityManager, pBoolean);

//        } catch (Exception e) {
//            // TODO Auto-generated catch block
//            e.printStackTrace();
//            System.out.println("移动数据设置错误: " + e.toString());
//        }


//        ConnectivityManager connectivityManager =
//                (ConnectivityManager) pContext.getSystemService(Context.CONNECTIVITY_SERVICE);
//        Method setMobileDataEnabl;
//        try {
//            setMobileDataEnabl = connectivityManager.getClass().getDeclaredMethod("setMobileDataEnabled", Boolean.TYPE);
//            setMobileDataEnabl.invoke(connectivityManager, pBoolean);
//        } catch (Exception e) {
//            e.printStackTrace();
//        }


//        final String TAG = "setMobileDataEnabled";
//        final ConnectivityManager conman = (ConnectivityManager) pContext.getSystemService(Context.CONNECTIVITY_SERVICE);
//        Class conmanClass;
//        try {
//            conmanClass = Class.forName(conman.getClass().getName());
//            final Field iConnectivityManagerField = conmanClass.getDeclaredField("mService");
//            iConnectivityManagerField.setAccessible(true);
//            final Object iConnectivityManager = iConnectivityManagerField.get(conman);
//            final Class iConnectivityManagerClass = Class.forName(iConnectivityManager.getClass().getName());
//            final Method setMobileDataEnabledMethod = iConnectivityManagerClass.getDeclaredMethod("setMobileDataEnabled", Boolean.TYPE);
//            setMobileDataEnabledMethod.setAccessible(true);
//            setMobileDataEnabledMethod.invoke(iConnectivityManager, pBoolean);
//        } catch (Exception e) {
//            e.printStackTrace();
//        }


        ConnectorManager cm = new ConnectorManager(pContext);
        cm.toggleMobileData(pBoolean);
    }

    private boolean getMobileDataState(Context pContext, Object[] arg) {
        try {

            ConnectivityManager mConnectivityManager = (ConnectivityManager) pContext.getSystemService(Context.CONNECTIVITY_SERVICE);

            Class ownerClass = mConnectivityManager.getClass();

            Class[] argsClass = null;
            if (arg != null) {
                argsClass = new Class[1];
                argsClass[0] = arg.getClass();
            }

            Method method = ownerClass.getMethod("getMobileDataEnabled", argsClass);

            Boolean isOpen = (Boolean) method.invoke(mConnectivityManager, arg);

            return isOpen;

        } catch (Exception e) {
            // TODO: handle exception

            System.out.println("得到移动数据状态出错");
            return false;
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
    private JSONObject getResultJSON(int status, String message) throws JSONException {
        JSONObject obj = new JSONObject();
        obj.put("status", status);
        obj.put("message", message);

        return obj;
    }

    /**
     * 获取加密类型
     *
     * @param ssid
     * @return
     */
    private WifiAutoConnectManager.WifiCipherType getWifiSecurity(String ssid) {
        WifiConfiguration config = wifiAdmin.IsExsits(ssid);

        if (config.allowedKeyManagement.get(WifiConfiguration.KeyMgmt.WPA_PSK)) {
            return WifiAutoConnectManager.WifiCipherType.WIFICIPHER_WPA;
        }
        if (config.allowedKeyManagement.get(WifiConfiguration.KeyMgmt.NONE)
                && config.allowedKeyManagement.get(WifiConfiguration.AuthAlgorithm.SHARED)) {
            return WifiAutoConnectManager.WifiCipherType.WIFICIPHER_WEP;
        }
        return WifiAutoConnectManager.WifiCipherType.WIFICIPHER_NOPASS;
    }

    private Handler mHandler = new Handler() {
        @Override
        public void handleMessage(Message msg) {
            switch (msg.what) {
                case MESSAGE_WAIT_ESP_ENABLE: {
                    if (PoerSmartFun.checkWifi(mContext)) {
                        while (true) {
                            WifiInfo wifiInfo = wifiMgr.getConnectionInfo();
                            int ip = wifiInfo.getIpAddress();
                            String ipAddress = intToIp(ip);
                            break;
                        }
                        removeCallbacksAndMessages(null);

                        JSUtil.execCallback(webView, callbackID, resultObj, JSUtil.OK, false);
                    } else {
                        sendEmptyMessageDelayed(MESSAGE_WAIT_ESP_ENABLE, 1000);
                    }
                }
                break;
                case MESSAGE_CONNECTOT_ESP: {
                    removeCallbacksAndMessages(null);

                    try {
                        resultObj = getResultJSON(0, "timeout");
                        JSUtil.execCallback(webView, callbackID, resultObj, JSUtil.OK, false);
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }
                break;
            }
        }

    };

    private String intToIp(int i) {

        return (i & 0xFF) + "." +
                ((i >> 8) & 0xFF) + "." +
                ((i >> 16) & 0xFF) + "." +
                (i >> 24 & 0xFF);
    }
}
