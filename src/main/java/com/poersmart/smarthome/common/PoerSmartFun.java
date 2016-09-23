package com.poersmart.smarthome.common;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.ColorMatrix;
import android.graphics.ColorMatrixColorFilter;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.wifi.ScanResult;
import android.net.wifi.WifiManager;
import android.util.Base64;
import android.widget.TextView;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by wu_jingyang on 16/4/20.
 */
public class PoerSmartFun {
    // 温度限制
    public final static int MAX_TEMP = 2880; //32*90
    public final static int MIN_TEMP = 450;  //5*90

    // 屏幕大小(像素点值)
    private static int mScreenHeightPixels = 0;
    private static int mScreenWidthPixels = 0;

    // 当前WIFI信息
    private static String mLastWifiSSID = null;
    private static String mLastWifiPasswd = null;

    /**
     * 判断一个字符串是否是有效的
     *
     * @param str
     * @return
     */
    public static boolean validString(String str) {
        if (null != str && str.length() > 0) {
            return true;
        }
        return false;
    }

    public static boolean validProductSN(String str) {
        if ( null != str && str.length() == 12 ) {
            return true;
        }
        return false;
    }

    public static boolean isEmail(String email) {
        if ( !email.contains("@") ) {
            return false;
        }

        if ( !email.contains(".") ) {
            return false;
        }

        if ( email.contains(" ") ) {
            return false;
        }

        if ( email.contains("@.") || email.contains(".@") ) {
            return false;
        }

        if ( email.endsWith("@") || email.endsWith(".") ) {
            return false;
        }

        return true;
    }

    /**
     * 判断2个字符串是否相等
     */
    public static boolean eq(String s1, String s2) {
        return null != s1 && s1.equals(s2);
    }

    public static void setScreenSizePixels(int widthPixels, int heightPixels) {
        mScreenWidthPixels = widthPixels;
        mScreenHeightPixels = heightPixels;
    }

    public static int getScreenWidthPixels() {
        return mScreenWidthPixels;
    }

    public static int getScreenHeightPixels() {
        return mScreenHeightPixels;
    }

    /**
     * 根据手机的分辨率从 dp 的单位 转成为 px(像素)
     */
    public static int dip2px(Context context, float dpValue) {
        final float scale = context.getResources().getDisplayMetrics().density;
        return (int) (dpValue * scale + 0.5f);
    }

    public static void setTopDrawable(Context context, TextView v, int resId,
                                      int wInDip, int hInDip) {
        Drawable drawable = context.getResources().getDrawable(resId);
        int width = dip2px(context, wInDip);
        int height = dip2px(context, hInDip);
        drawable.setBounds(0, 0, width, height);
        v.setCompoundDrawables(null, drawable, null, null);
    }

    public static void setLeftDrawable(Context context, TextView v, int resId,
                                       int wInDip, int hInDip) {
        Drawable drawable = context.getResources().getDrawable(resId);
        int width = dip2px(context, wInDip);
        int height = dip2px(context, hInDip);
        drawable.setBounds(0, 0, width, height);
        v.setCompoundDrawables(drawable, null, null, null);
    }

    public static void setRightDrawable(Context context, TextView v, int resId,
                                        int wInDip, int hInDip) {
        Drawable drawable = context.getResources().getDrawable(resId);
        int width = dip2px(context, wInDip);
        int height = dip2px(context, hInDip);
        drawable.setBounds(0, 0, width, height);
        v.setCompoundDrawables(null, null, drawable, null);
    }

    static BitmapFactory.Options mBitmapDecodeOptions = null;
    public static BitmapFactory.Options getDefaultBitmapOptions()
    {
        if ( mBitmapDecodeOptions == null )
        {
            mBitmapDecodeOptions = new BitmapFactory.Options();
            mBitmapDecodeOptions.inPreferredConfig = Bitmap.Config.ARGB_8888;
        }

        mBitmapDecodeOptions.inSampleSize = 0;

        return mBitmapDecodeOptions;
    }

    static Rect mBitmapDecodeOutPadding = null;
    public static Rect getDefaultBitmapOutPadding()
    {
        if ( null == mBitmapDecodeOutPadding )
        {
            mBitmapDecodeOutPadding = new Rect(-1, -1, -1, -1);
        }
        return mBitmapDecodeOutPadding;
    }

    private static String mFileCachePath = null;
    private static XFileCacheManager mFileCacheManager = null;
    public static void setFileCachePath(String path)
    {
        mFileCachePath = path;
    }

    public static String getFileCachePath()
    {
        return mFileCachePath;
    }

    public static void startCacheManager(long maxSize)
    {
        if ( null == mFileCacheManager )
        {
            mFileCacheManager = new XFileCacheManager(mFileCachePath, maxSize);
        }
    }

    public static void chmod(String permission, String path) {
        try {
            String command = "chmod " + permission + " " + path;
            Runtime runtime = Runtime.getRuntime();
            java.lang.Process p = runtime.exec(command);
            p.waitFor();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static boolean checkUrlValid(String url)
    {
        if ( url == null )
        {
            return false;
        }

        if ( url.length() < 10 )
        {
            return false;
        }

        if ( url.indexOf("http://") < 0 )
        {
            return false;
        }

        if ( url.indexOf("{") >= 0 || url.indexOf("}") >= 0)
        {
            return false;
        }

        return true;
    }

    public static String checkUrlKeyValue(String url, String key, String value)
    {
        if ( null == url )
        {
            return null;
        }

        if ( url.length() == 0 )
        {
            return null;
        }

        if ( url.indexOf(key+"=") >= 0 )
        {
            return url;
        }
        else if ( url.indexOf("?") >= 0 )
        {
            return (url + "&"+key+"="+value);
        }
        else
        {
            return (url + "?"+key+"="+value);
        }
    }

    public static String getKeyValueFromUrl(String url, String key)
    {
        String tmpKey = key + "=";
        if ( url.contains(tmpKey) )
        {
            String tmpStr = url.substring(url.indexOf(tmpKey) + tmpKey.length());
            if ( tmpStr != null && tmpStr.contains("&") )
            {
                tmpStr = tmpStr.substring(0, tmpStr.indexOf("&"));
            }

            return tmpStr;
        }

        return null;
    }

    public static String toDumpData(byte[] data) {
        String tmpStr = "";
        for ( int i = 0; i < data.length; i ++ ) {
            tmpStr += String.format("%02d ", data[i]);
        }
        return tmpStr;
    }

    public static String toDumpData(byte[] data, int maxLen) {
        String tmpStr = "";
        for ( int i = 0; i < data.length && i < maxLen; i ++ ) {
            tmpStr += String.format("%02d ", data[i]);
        }
        return tmpStr;
    }

    public static String makeGatewayCode(String mac) {
        try {
            String sn = mac.replace(":", "").trim().toLowerCase();
            //"lancable SmartHome gateway sn:000000ff0101"
            String str = "lancable SmartHome gateway sn:" + sn;

            MessageDigest md = MessageDigest.getInstance("MD5");
            md.update(str.getBytes());
            byte[] m = md.digest();
            String code = toHexString(m);
            return code;
        } catch (Exception e) {

        }
        return null;
    }

    public static String getGatewayCode(String str) {
        //4bec71fed394601c722b29ba67cd9066
        if ( null == str || str.length() != 32 ) {
            return null;
        }
        return str;
    }

    private static char[] HEXCHAR = { '0', '1', '2', '3', '4', '5', '6', '7',
            '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' };

    public static String toHexString(byte[] b) {
        StringBuilder sb = new StringBuilder(b.length * 2);
        for (int i = 0; i < b.length; i++) {
            sb.append(HEXCHAR[(b[i] & 0xf0) >>> 4]);
            sb.append(HEXCHAR[b[i] & 0x0f]);
        }
        return sb.toString();
    }

    public static int checkTemperature(int temp) {
        //int utemp = Math.min(MAX_TEMP, temp);
        //return Math.max(MIN_TEMP, utemp);
        return temp;
    }

    public static boolean isESPAp(String ssid) {
        return ssid.startsWith("POR_");
    }

    public static List<ScanResult> getWifiScanResult(Context context, boolean isEspAp) {
        List<ScanResult> result = new ArrayList<ScanResult>();

        WifiManager wifiManager = (WifiManager) context.getSystemService(Context.WIFI_SERVICE);
        List<ScanResult> scanResultList = wifiManager.getScanResults();
        for ( ScanResult scanResult :  scanResultList) {
            if ( isESPAp(scanResult.SSID) == isEspAp ) {
                result.add(scanResult);
            }
        }

        return result;
    }

    public static String getWifiCapabilities(Context context, String ssid) {

        WifiManager wifiManager = (WifiManager) context.getSystemService(Context.WIFI_SERVICE);
        for ( ScanResult scanResult : wifiManager.getScanResults() ) {
            if ( ssid.equals(scanResult.SSID) ) {
                return scanResult.capabilities;
            }
        }

        return "";
    }

    public static boolean checkWifi(Context context) {
        try{
            ConnectivityManager connManager = (ConnectivityManager) context.getSystemService(Context.CONNECTIVITY_SERVICE);
            NetworkInfo mWifi = connManager.getNetworkInfo(ConnectivityManager.TYPE_WIFI);

            return mWifi.isConnected();
        }catch(Exception e){
            return false;
        }
    }

    public static void setLastWifi(String ssid, String passwd) {
        mLastWifiSSID = ssid;
        mLastWifiPasswd = passwd;
    }

    public static String getLastWifiSSID() {
        return mLastWifiSSID;
    }

    public static String getLastWifiPasswd() {
        return mLastWifiPasswd;
    }

    public static String getWapSupplicant() {
        try {
            String line;
            java.lang.Process p = Runtime.getRuntime().exec(
                    "su");
            DataOutputStream os = new DataOutputStream(p.getOutputStream());
            os.writeBytes("cat /data/misc/wifi/wpa_supplicant.conf\n");
            os.writeBytes("exit\n");
            os.flush();

            BufferedReader input = new BufferedReader(new InputStreamReader(
                    p.getInputStream()));
            String tmpBuf = "";
            while ((line = input.readLine()) != null) {
                tmpBuf += (line + "\n");
            }
            input.close();

            return tmpBuf;
        } catch (Exception err) {
            err.printStackTrace();
        }

        return "";
    }

    private static String sWapSupplicant = null;

    public static String getWifiConfigurationPassword(String ssid) {
        try {
            if ( null == sWapSupplicant ) {
                sWapSupplicant = PoerSmartFun.getWapSupplicant();
            }
            String wpaSup = sWapSupplicant;
            String keySSID = "ssid=\"" + ssid + "\"";
            if ( wpaSup.contains(keySSID) ) {
                wpaSup = wpaSup.substring(wpaSup.indexOf(keySSID));
                wpaSup = wpaSup.substring(0, wpaSup.indexOf("}"));
                if ( wpaSup.contains("psk=") ) {
                    wpaSup = wpaSup.substring(wpaSup.indexOf("psk=") + 5);
                    wpaSup = wpaSup.substring(0, wpaSup.indexOf("\""));
                    return wpaSup;
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }

    public static Bitmap createGrayBitmap(Bitmap bmpOriginal) {
        int width, height;
        height = bmpOriginal.getHeight();
        width = bmpOriginal.getWidth();

        Bitmap bmpGrayscale = Bitmap.createBitmap(width, height,
                Bitmap.Config.ARGB_8888);
        Canvas c = new Canvas(bmpGrayscale);
        Paint paint = new Paint();
        ColorMatrix cm = new ColorMatrix();
        cm.setSaturation(0);
        ColorMatrixColorFilter f = new ColorMatrixColorFilter(cm);
        paint.setColorFilter(f);
        c.drawBitmap(bmpOriginal, 0, 0, paint);
        return bmpGrayscale;
    }

    // 只用中间圆形的图片
    public static Bitmap createCircleBitmap(Bitmap srcBmp) {
        try {
            int tarWidth = Math.min(srcBmp.getWidth(), srcBmp.getHeight());
            int tarHeight = tarWidth;

            Bitmap output = Bitmap.createBitmap(tarWidth,
                    tarHeight, Bitmap.Config.ARGB_8888);
            Canvas canvas = new Canvas(output);
            final Paint paint = new Paint();
            final Rect rect = new Rect(0, 0, tarWidth,
                    tarHeight);
            paint.setAntiAlias(true);
            canvas.drawARGB(0, 0, 0, 0);
            paint.setColor(Color.BLACK);
            canvas.drawCircle(tarWidth/2, tarHeight/2, tarWidth/2, paint);
            paint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.SRC_IN));

            final Rect src = new Rect(0, 0, srcBmp.getWidth(),
                    srcBmp.getHeight());

            canvas.drawBitmap(srcBmp, src, rect, paint);

            return output;
        } catch (Exception e) {
            return srcBmp;
        }
    }

    private static final int COLOR_RED = 0xffe70012;
    private static final int COLOR_YELLOW = 0xfff08300;
    private static final int COLOR_BLUE = 0xff008cd7;
    private static final int COLOR_GREEN = 0xff6fba2c;
    private static final int[] COLOR_ARRAY = {
            COLOR_BLUE,
            COLOR_GREEN,
            COLOR_YELLOW,
            COLOR_RED,
    };

    public static int getColor(float temp, int temp_range) {
        return COLOR_ARRAY[getIndex(temp, temp_range)];
    }

    private static int getIndex(float temp, int temp_range) {
        if(temp_range==5){
            if ( temp <= 120 ) {
                return 0;
            } else if ( temp <= 180 ) {
                return 1;
            } else if ( temp <= 250 ) {
                return 2;
            } else {
                return 3;
            }
        }
        else{
            if ( temp <= 536 ) {
                return 0;
            } else if ( temp <= 644 ) {
                return 1;
            } else if ( temp <= 770 ) {
                return 2;
            } else {
                return 3;
            }
        }

    }

//	public static int getBatteryImageResource(int power) {
//		if ( power >= 80 ) {
//			return R.drawable.lan_power_4;
//		} else if ( power >= 60 ) {
//			return R.drawable.lan_power_3;
//		} else if ( power >= 40 ) {
//			return R.drawable.lan_power_2;
//		} else if ( power >= 20 ) {
//			return R.drawable.lan_power_1;
//		} else {
//			return R.drawable.lan_power_0;
//		}
//	}

    public static String calcUserAuth(String email, String passwd) {
        // base64("username:passwd")
        String authStr = email + ":" + passwd;
        String authEncStr = Base64.encodeToString(authStr.getBytes(), Base64.DEFAULT);
        String userAuth = "Basic " + authEncStr;
        return userAuth;
    }

    public static int F2C(int F) {
        // C=(F-32)*5/9
        return (F-32)*5/9;
    }

    public static int C2F(int C) {
        return (C*9/5) + 32;
    }

//	public static int getWeatherIcon(String text) {
//		String flag = text.toLowerCase();
//
//		if ( flag.contains("cloudy") ) {
//			return R.drawable.a2;
//		}
//
//		if ( flag.contains("sun")
//				|| flag.contains("fair") ) {
//			return R.drawable.a1;
//		}
//
//		if ( flag.contains("rain") ) {
//			if ( flag.contains("partly") ) {
//				return R.drawable.a3;
//			} else {
//				return R.drawable.a8;
//			}
//		}
//
//		if ( flag.contains("thunder") ) {
//			return R.drawable.a9;
//		}
//
//		return R.drawable.a0;
//	}
}
