package com.poersmart.smarthome;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.wifi.WifiManager;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

/**
 * Created by wu_jingyang on 16/7/4.
 */
public class ConnectorManager {
    private Context context;
    private WifiManager wifiManager;
    ConnectivityManager mobileDataManager;
    private Class<?> CMClass=null;// ConnectivityManager类
    private Field CMField = null; // ConnectivityManager类中的字段
    private Object ICMObject = null; // IConnectivityManager类的引用
    private Class<?> ICMClass = null; // IConnectivityManager类
    private Method setMobileDataEnabledMethod = null; // setMobileDataEnabled方法
    public ConnectorManager(Context c){
        context=c;
        mobileDataManagerInit();
        wifiManagerInit();

    }
    private void wifiManagerInit() {
        // TODO Auto-generated method stub
        wifiManager=(WifiManager)
                context.getSystemService(Context.WIFI_SERVICE);
    }

    private void mobileDataManagerInit() {
        // TODO Auto-generated method stub
        mobileDataManager=(ConnectivityManager)
                context.getSystemService(Context.CONNECTIVITY_SERVICE);
        try {
            // 取得ConnectivityManager类
            CMClass = Class.forName(mobileDataManager.getClass().getName());
            // 取得ConnectivityManager类中的对象mService
            CMField = CMClass.getDeclaredField("mService");
            // 设置mService可访问
            CMField.setAccessible(true);
            // 取得mService的实例化类IConnectivityManager
            ICMObject = CMField.get(mobileDataManager);
            // 取得IConnectivityManager类
            ICMClass = Class.forName(ICMObject.getClass().getName());
            // 取得IConnectivityManager类中的setMobileDataEnabled(boolean)方法
            setMobileDataEnabledMethod = ICMClass.getDeclaredMethod("setMobileDataEnabled", Boolean.TYPE);
            // 设置setMobileDataEnabled方法可访问
            setMobileDataEnabledMethod.setAccessible(true);

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (NoSuchFieldException e) {
            e.printStackTrace();
        } catch (SecurityException e) {
            e.printStackTrace();
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }

    }
    public boolean toggleWifi(boolean enabled) {
        return wifiManager.setWifiEnabled(enabled);

    }
    public int wifiSate(){
        return wifiManager.getWifiState();
    }
    public void toggleMobileData(boolean enabled){
        try{
            // 调用setMobileDataEnabled方法
            setMobileDataEnabledMethod.invoke(ICMObject, enabled);
        }catch(IllegalArgumentException e){
            e.printStackTrace();
        }catch(IllegalAccessException e){
            e.printStackTrace();
        }catch(InvocationTargetException e){
            e.printStackTrace();
        }
    }
    public int mobileDataState(){
        NetworkInfo.State state = mobileDataManager.getNetworkInfo(ConnectivityManager.TYPE_MOBILE).getState();
        if(state!= NetworkInfo.State.CONNECTED){
            return 0;
        }
        return 1;
    }
}
