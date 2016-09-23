package com.poersmart.smarthome.version;

import android.util.Xml;

import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserException;

import java.io.IOException;
import java.io.InputStream;

/**
 * Created by wu_jingyang on 16/5/31.
 */
public class UpdateInfoParser {

    public static UpdateInfo getUpdateInfo(InputStream inputStream) {

        UpdateInfo updateInfo = new UpdateInfo();

        XmlPullParser parser = Xml.newPullParser();
        try {
            parser.setInput(inputStream, "utf-8");

            int type = parser.getEventType();

            while (type != XmlPullParser.END_DOCUMENT) {
                switch (type) {
                    case XmlPullParser.START_TAG:
                        if ("version".equals(parser.getName())) {
                            updateInfo.setVersion(Integer.parseInt(parser.nextText()));
                        } else if ("file_name".equals(parser.getName())) {
                            updateInfo.setFileName(parser.nextText());
                        } else if ("url".equals(parser.getName())) {
                            updateInfo.setUrl(parser.nextText());
                        } else if ("url_server".equals(parser.getName())) {
                            updateInfo.setUrlServer(parser.nextText());
                        }
                        break;
                }
                type = parser.next();
            }

            return updateInfo;

        } catch (XmlPullParserException e) {
            e.printStackTrace();
            return null;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
}
