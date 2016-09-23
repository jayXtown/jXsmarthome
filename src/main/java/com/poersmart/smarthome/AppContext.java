package com.poersmart.smarthome;

import android.app.Application;

/**
 * Created by wu_jingyang on 16/5/31.
 */
public class AppContext extends Application {

    private static AppContext app;

    public static String appWorkLanguage = "English";

    public static AppContext getInstance() {
        return app;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        app = this;
    }
}
