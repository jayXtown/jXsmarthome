document.addEventListener("plusready", function(e) {
    var _BARCODE = 'PoerSmartConfig',
    B = window.plus.bridge;
    var smartConfig = {
        startConfiguration : function(params, successCallback, errorCallback) {
			if (isHbuilder) return;
            var success = typeof successCallback !== 'function' ? null : function(args)
            {
                successCallback(args);
            },
            fail = typeof errorCallback !== 'function' ? null : function(code)
            {
                errorCallback(code);
            };
            callbackID = B.callbackId(success, fail);
            var args = {
                callbackID : callbackID,
                apSSID : params.SSID,
                apPassword : params.password,
                apBssid : params.bSSID,
                isSsidHidden : params.isSsidHidden,
                taskResultCount : params.taskResultCount
            };
            return B.exec(_BARCODE, "startConfiguration", [args]);
        },
        cancelConfiguration : function(params, successCallback, errorCallback) {
			if (isHbuilder) return;
            var success = typeof successCallback !== 'function' ? null : function(args)
            {
                successCallback(args);
            },
            fail = typeof errorCallback !== 'function' ? null : function(code)
            {
                errorCallback(code);
            };
            callbackID = B.callbackId(success, fail);
            var args = {
                callbackID : callbackID
            };

            return B.exec(_BARCODE, "cancelConfiguration", [args]);
        }
    };

    window.plus.smartConfig = smartConfig;
});