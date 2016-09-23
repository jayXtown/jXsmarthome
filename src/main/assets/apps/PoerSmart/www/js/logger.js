var IS_DEBUG = true;
var isHbuilder = false;

document.addEventListener("plusready", function() {
	var _BARCODE = 'PoerLogger';	// 插件名称
	var B = window.plus.bridge;
	
	var PoerLogger = {
		consoleLog : function(context, successCallback, errorCallback) {
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
                log : context
            };
            return B.exec(_BARCODE, "consoleLog", [args]);
		}
	};
	
	window.plus.logger = PoerLogger;
});