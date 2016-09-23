var netType;
function netChangeListenner(e) {
	netType = plus.networkinfo.getCurrentType();
//	switch (netType) {
//		case plus.networkinfo.CONNECTION_UNKNOW:
//			// TODO: 添加提示语：当前网络连接状态未知，请检查网络连接。
//			poer_public.toast(poer_language.msg_connection_unknow(language));
//			break;
//		case plus.networkinfo.CONNECTION_NONE:
//			// TODO: 添加提示语：网络未连接，请检查网络连接。
//			poer_public.toast(poer_language.msg_connection_none(language));
//			break;
//		case plus.networkinfo.CONNECTION_ETHERNET:
//			// TODO: 添加提示语：网络已切换为有线网络
//			poer_public.toast(poer_language.msg_connection_ethernet(language));
//			break;
//		case plus.networkinfo.CONNECTION_CELL2G:
//			// TODO: 添加提示语：网络已切换为蜂窝数据2G
//			poer_public.toast(poer_language.msg_connection_cell2G(language));
//			break;
//		case plus.networkinfo.CONNECTION_CELL3G:
//			// TODO: 添加提示语：网络已切换为蜂窝数据3G
//			poer_public.toast(poer_language.msg_connection_cell3G(language));
//			break;
//		case plus.networkinfo.CONNECTION_CELL4G:
//			// TODO: 添加提示语：网络已切换为蜂窝数据4G
//			poer_public.toast(poer_language.msg_connection_cell4G(language));
//			break;
//		case plus.networkinfo.CONNECTION_WIFI:
//			// TODO: 添加提示语：网络已切换为无线信号
//			poer_public.toast(poer_language.msg_connection_wifi(language));
//			break;
//	}
}

function isWifiConnected(showMsg) {
	netType = plus.networkinfo.getCurrentType();
	console.log("net_type:" + netType);
	switch (netType) {
		case plus.networkinfo.CONNECTION_WIFI:
			return true;
		default:
			// TODO: 手机未连接到无线网络，请连接到无线网络后再操作
			if (showMsg) {
				poer_public.alert(poer_language.msg_connect_to_wifi_first(language));
			}
			return false;
	}
}