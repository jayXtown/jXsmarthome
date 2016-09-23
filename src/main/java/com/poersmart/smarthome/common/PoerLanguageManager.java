package com.poersmart.smarthome.common;

import android.content.Context;

import com.poersmart.smarthome.R;

import java.util.Arrays;
import java.util.List;

/**
 * Created by wu_jingyang on 16/5/10.
 */
public class PoerLanguageManager {

    private Context mContext;
    private List<String> languages;
    private int mLangIndex;

    public PoerLanguageManager(Context context, String language) {
        this.mContext = context;
        this.languages = Arrays.asList(mContext.getResources().getStringArray(R.array.languages));
        mLangIndex = languages.indexOf(language);
    }

    private String[] getArrayById(int arrayId) {
        return mContext.getResources().getStringArray(arrayId);
    }

    /**
     * 根据ArrayID获取相应的字符串内容
     * @param id
     * @return
     */
    public String getString(int id) {
        String[] array = getArrayById(id);
        return array[mLangIndex];
    }
}
