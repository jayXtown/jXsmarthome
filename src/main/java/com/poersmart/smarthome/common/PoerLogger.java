package com.poersmart.smarthome.common;

import android.util.Log;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import io.dcloud.common.DHInterface.IWebview;
import io.dcloud.common.DHInterface.StandardFeature;

/**
 * Created by wu_jingyang on 16/4/29.
 */
public class PoerLogger extends StandardFeature {

    private final String TAG = "PoerSmartLogger";

    public void consoleLog(IWebview webview, JSONArray data) {
        try {
            JSONObject params = data.getJSONObject(0);
            Log.d(TAG, params.getString("log"));
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }
}
