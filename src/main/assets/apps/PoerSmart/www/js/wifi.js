document.addEventListener("plusready", function (e) {
    var _BARCODE = 'PoerWifi',
        B = window.plus.bridge;
    var wifi = {
        startScan: function () {
            return B.exec(_BARCODE, "startScanWifi", []);
        },
        getNetWorkList: function (isEspAp, successCallback, errorCallback) {
            var success = typeof successCallback !== 'function' ? null : function (args) {
                    successCallback(args);
                },
                fail = typeof errorCallback !== 'function' ? null : function (code) {
                    errorCallback(code);
                };
            callbackID = B.callbackId(success, fail);
            var args = {
                callbackID: callbackID,
                isEspAp: isEspAp
            };
            return B.exec(_BARCODE, "getNetWorkList", [args]);
        },
        hasPoerGateway: function (successCallback, errorCallback) {
            var success = typeof successCallback !== 'function' ? null : function (args) {
                    successCallback(args);
                },
                fail = typeof errorCallback !== 'function' ? null : function (code) {
                    errorCallback(code);
                };
            callbackID = B.callbackId(success, fail);
            var args = {
                callbackID: callbackID
            };
            return B.exec(_BARCODE, "hasPoerGateway", [args]);
        },
        connectToWifi: function (ssid, password, successCallback, errorCallback) {
            var success = typeof successCallback !== 'function' ? null : function (args) {
                    successCallback(args);
                },
                fail = typeof errorCallback !== 'function' ? null : function (code) {
                    errorCallback(code);
                };
            callbackID = B.callbackId(success, fail);
            var args = {
                callbackID: callbackID,
                ssid: ssid,
                password: password
            };
            return B.exec(_BARCODE, "connectToWifi", [args]);
        },
        getCurrentWifiInfo: function (successCallback, errorCallback) {
            var success = typeof successCallback !== 'function' ? null : function (args) {
                    successCallback(args);
                },
                fail = typeof errorCallback !== 'function' ? null : function (code) {
                    errorCallback(code);
                };
            callbackID = B.callbackId(success, fail);
            return B.exec(_BARCODE, "getCurrentWifiInfo", [callbackID]);
        },
        changeMobileData: function (successCallback, errorCallback) {
            if (!isAndroid()) return;
            var success = typeof successCallback !== 'function' ? null : function (args) {
                    successCallback(args);
                },
                fail = typeof errorCallback !== 'function' ? null : function (code) {
                    errorCallback(code);
                };
            var callbackID = B.callbackId(success, fail);
            return B.exec(_BARCODE, "changeMobileData", [callbackID]);
        }
    };
    window.plus.wifi = wifi;
});