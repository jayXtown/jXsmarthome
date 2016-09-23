package com.poersmart.smarthome;

import org.json.JSONArray;
import org.json.JSONException;

import io.dcloud.common.DHInterface.IWebview;
import io.dcloud.common.DHInterface.StandardFeature;
import io.dcloud.common.util.JSUtil;

/**
 * Created by wu_jingyang on 16/6/21.
 */
public class AppWorkLanguage extends StandardFeature {
    private AppContext app;

    public void setWorkLanguage(IWebview iWebview, JSONArray args) throws JSONException {
        app = (AppContext) iWebview.getActivity().getApplication();

        String lang = args.getString(0);

        app.appWorkLanguage = lang;

        JSUtil.wrapJsVar(true);
    }

    /**
     * 获取app工作语言
     * @param iWebview
     * @param args
     */
    public void getWorkLanguage(IWebview iWebview, JSONArray args) {
        app = (AppContext)iWebview.getActivity().getApplication();

        JSUtil.wrapJsVar(app.appWorkLanguage);
    }
}
