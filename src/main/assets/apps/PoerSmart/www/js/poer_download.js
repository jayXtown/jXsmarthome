document.addEventListener("plusready", function(e) {
    var _BARCODE = 'PoerDownload',
    B = window.plus.bridge;
	var poerDownload = {
	    downloadFile: function(Url, fileName, language) {
			if (isHbuilder) return;
            var args = {
                Url : Url,
                fileName : fileName,
                language : language
            };
            return B.exec(_BARCODE, "downloadFile", [args]);
	    },
	    checkUpdate : function(language) {
			if (isHbuilder) return;
	    		var args = {
                language : language
            };
	    		return B.exec(_BARCODE, "checkUpdate", [args]);
	    }
	};
	window.plus.poerDownload = poerDownload;
});