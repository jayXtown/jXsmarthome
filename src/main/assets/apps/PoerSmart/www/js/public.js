/**
 * 只保存公用方法
 */
(function($, owner) {
	var base64encodechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var base64decodechars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
		52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
		15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
		41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

	owner.base64encode = function(str) {
		var out, i, len;
		var c1, c2, c3;
		len = str.length;
		i = 0;
		out = "";
		while (i < len) {
			c1 = str.charCodeAt(i++) & 0xff;
			if (i == len) {
				out += base64encodechars.charAt(c1 >> 2);
				out += base64encodechars.charAt((c1 & 0x3) << 4);
				out += "==";
				break;
			}
			c2 = str.charCodeAt(i++);
			if (i == len) {
				out += base64encodechars.charAt(c1 >> 2);
				out += base64encodechars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
				out += base64encodechars.charAt((c2 & 0xf) << 2);
				out += "=";
				break;
			}
			c3 = str.charCodeAt(i++);
			out += base64encodechars.charAt(c1 >> 2);
			out += base64encodechars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
			out += base64encodechars.charAt(((c2 & 0xf) << 2) | ((c3 & 0xc0) >> 6));
			out += base64encodechars.charAt(c3 & 0x3f);
		}
		return out;
	}

	owner.base64decode = function(str) {
		var c1, c2, c3, c4;
		var i, len, out;

		len = str.length;

		i = 0;
		out = "";
		while (i < len) {

			do {
				c1 = base64decodechars[str.charCodeAt(i++) & 0xff];
			} while (i < len && c1 == -1);
			if (c1 == -1)
				break;

			do {
				c2 = base64decodechars[str.charCodeAt(i++) & 0xff];
			} while (i < len && c2 == -1);
			if (c2 == -1)
				break;

			out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

			do {
				c3 = str.charCodeAt(i++) & 0xff;
				if (c3 == 61)
					return out;
				c3 = base64decodechars[c3];
			} while (i < len && c3 == -1);
			if (c3 == -1)
				break;

			out += String.fromCharCode(((c2 & 0xf) << 4) | ((c3 & 0x3c) >> 2));

			do {
				c4 = str.charCodeAt(i++) & 0xff;
				if (c4 == 61)
					return out;
				c4 = base64decodechars[c4];
			} while (i < len && c4 == -1);
			if (c4 == -1)
				break;
			out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
		}
		return out;
	}

	owner.alert = function(content, callback) {
		if (mui.isFunction(callback)) {
			plus.nativeUI.alert(content, callback, "PoerSmart", poer_language.label_ok(language));
		} else {
			plus.nativeUI.alert(content, function() {}, "PoerSmart", poer_language.label_ok(language));
		}
	}

	owner.toast = function(content, options) {
		plus.nativeUI.toast(content, options == null ? {
			verticalAlign: "center"
		} : options);
	}

	owner.showWaiting = function(title, options) {
		return plus.nativeUI.showWaiting(title, options == null ? {
			back: "none"
		} : options);
	}

	owner.openWindow = function(url, id, fresh) {
		var createNew = fresh ? fresh : false;
		mui.openWindow({
			url: url,
			id: id,
			show: {
				aniShow: 'pop-in'
			},
			waiting: {
				autoShow: true
			},
			createNew : createNew
		});
	}

	owner.node_to_json = function(data, tempUnit) {
		//var user_info = poer_function.getLocalStorage("user_info");
		//var tempUnit = user_info['DisplayMode'];
		var manTemp = data.ManTemperature;
		var ecoTemp = data.EcoTemperature;
		var offTemp = data.OffTemperature;
		var overTemp = data.OverrideTemperature;
		if (tempUnit == 0) {
			manTemp *= 9;
			ecoTemp *= 9;
			offTemp *= 9;
			overTemp *= 9;
		} else {
			manTemp = (manTemp - 320) * 5;
			ecoTemp = (ecoTemp - 320) * 5;
			offTemp = (offTemp - 320) * 5;
			overTemp = (overTemp - 320) * 5;
		}

		var node = {
			"ManTemprature": manTemp,
			"EcoTemprature": ecoTemp,
			"OffTemprature": offTemp,
			"DisplayMode": data.DisplayMode,
			"WorkMode": data.WorkMode,
			"BackWorkMode": data.BackWorkMode,
			"Id": data.Id,
			"NodeName": data.NodeName,
			"HolidayIsOpen": data.HolidayIsOpen,
			"HolidayEnable": data.HolidayEnable,
			"HolidayStart": data.HolidayStart,
			"HolidayEnd": data.HolidayEnd,
			"OverrideIsOpen": data.OverrideIsOpen,
			"OverrideTemperature": overTemp,
			"OverrideTime": data.OverrideTime,
			"VoltTrl": data.VoltTrl,
			"VoltCap": data.VoltCap
		};
		return JSON.stringify(node);
	}

	var poer_progress_interval;
	owner.progress_start = function() {
		mui("#progressPopover").popover("toggle");
		var width = document.body.clientWidth;
		document.getElementById("progressPopover").style.marginLeft = (width - 200) / 2 + "px";
		//document.getElementById("show_progress_div").style.display = "";
		var progress_div = document.getElementById("poer_progress_div");
		var poer_cur_progress = 1;
		poer_progress_interval = setInterval(function() {
			progress_div.style.width = poer_cur_progress + "%";
			poer_cur_progress = (poer_cur_progress + 3) % 100;
		}, 100);
	}

	owner.progress_stop = function() {
		clearInterval(poer_progress_interval);
		//document.getElementById("show_progress_div").style.display = "none";
		mui("#progressPopover").popover("hide");
	}

	owner.is_leap_year = function(Year) {
		if (((Year % 4) == 0) && ((Year % 100) != 0) || ((Year % 400) == 0)) {
			return (true);
		} else {
			return (false);
		}
	}

}(mui, window.poer_public = {}));