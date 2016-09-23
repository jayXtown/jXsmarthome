/**
 * 本地数据保存
 * 2016年05月10日14:55:05 created By 吴经阳
 */
(function(owner) {
	/**
	 * 自动登录标识
	 * @param {Object} $
	 * @param {Object} e
	 */
	(function($, e) {
		e.set = function(data) {
			var isAutoLogin = data ? 1 : 0;
			console.log("isAutoLogin:" + isAutoLogin);
			localStorage.setItem("IS_AUTO_LOGIN", isAutoLogin);
		}
		e.get = function() {
			var isAutoLogin = localStorage.getItem("IS_AUTO_LOGIN");
			isAutoLogin = isAutoLogin ? parseInt(isAutoLogin) : 0;
			console.log("isAutoLogin:" + isAutoLogin);
			return Boolean(isAutoLogin);
		}
		e.remove = function() {
			localStorage.removeItem("IS_AUTO_LOGIN");
		}
	}(mui, owner.is_auto_login = {}));
	
	(function($, e) {
		e.set = function(data) {
			localStorage.setItem("FROM_LOGOUT", data ? 1 : 0);
		}
		e.get = function() {
			var fromLogout = localStorage.getItem("FROM_LOGOUT");
			fromLogout = fromLogout ? parseInt(fromLogout) : 0;
			return Boolean(fromLogout);
		}
		e.remove = function() {
			localStorage.removeItem("FROM_LOGOUT");
		}
	}(mui, owner.from_logout = {}));
	/**
	 * 本地Wifi信息
	 * @param {Object} $
	 * @param {Object} e
	 */
	(function($, e) {
		e.set = function(ssid, data) {
			localStorage.setItem("LOCAL_WIFI_INFO_" + ssid, data);
		}
		e.get = function(ssid) {
			return localStorage.getItem("LOCAL_WIFI_INFO_" + ssid);
		}
		e.remove = function(ssid) {
			localStorage.removeItem("LOCAL_WIFI_INFO_" + ssid);
		}
	}(mui, owner.local_wifi_info = {}));
	(function($, e) {
		e.set = function(data) {
			localStorage.setItem("SCHEDULE_DAY_INDEX", data);
		}
		e.get = function() {
			var dayIndex = localStorage.getItem("SCHEDULE_DAY_INDEX") ? parseInt(localStorage.getItem("SCHEDULE_DAY_INDEX")) : 0;
			return dayIndex;
		}
	}(mui, owner.day_index = {}));
	/**
	 * 网关列表
	 * @param {Object} $
	 * @param {Object} e
	 */
	(function($, e) {}(mui, poer_storage.gateway_list = {}));
}(window.poer_storage = {}));