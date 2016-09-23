package com.poersmart.smarthome.version;

/**
 *
 * 版本更新信息
 * Created by wu_jingyang on 16/5/31.
 */
public class UpdateInfo {
    private int version;
    private String fileName;
    private String url;
    private String urlServer;

    public int getVersion() {
        return version;
    }

    public void setVersion(int version) {
        this.version = version;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getUrlServer() {
        return urlServer;
    }

    public void setUrlServer(String urlServer) {
        this.urlServer = urlServer;
    }
}
