/**
 * 只保存URL链接
 **/
(function($, owner) {

	var LANCABLE_SERVER_HOST = "http://open.poersmart.com:8012";
	// var LANCABLE_SERVER_HOST = "http://115.238.255.149:8012";
	// var LANCABLE_SERVER_HOST = "http://115.238.249.79:8012";
//	var LANCABLE_SERVER_HOST = "http://176.56.180.148:8012";
//	var LANCABLE_SERVER_HOST = "http://192.168.1.117:8012";r4
	var LANCABLE_SERVER_USERS_NEW = LANCABLE_SERVER_HOST + "/newUsers";
	var LANCABLE_SERVER_AUTH_NEW = LANCABLE_SERVER_HOST + "/newAuth";
	
	owner.login = function() {
		return LANCABLE_SERVER_AUTH_NEW + "/login";
	};
	
	owner.register = function() {
		return LANCABLE_SERVER_AUTH_NEW + "/create";
	}
	
	owner.forget_password = function() {
		return LANCABLE_SERVER_AUTH_NEW + "/forgot";
	}
	
	owner.change_password = function() {
		return LANCABLE_SERVER_AUTH_NEW + "/change";
	}
	
	owner.update_user = function(userId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId;
	}
	
	owner.feedback = function(userId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/feedbacks";
	}
	
	owner.locate_list = function(userId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/locateWithDefault";
	}
	
	owner.add_locate = function(userId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/locateList/addLocate";
	}
	
	owner.update_locate = function(userId, locateId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/" + locateId + "/updateLocate";
	}
	
	owner.delete_locate = function(userId, locateId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/" + locateId + "/deleteLocate";
	}
	
	owner.gateway_list = function(userId, locateId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/" + locateId + "/gateway";
	}
	
	owner.gateway_list_all = function(userId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/userGatewayWithLocate";
	}
	
	owner.gateway_info = function(userId, mac) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/" + mac + "/gatewayDetailWithMAC";
	}
	
	owner.update_gateway_new = function(userId, gatewayId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/gatewayList/" + gatewayId + "/updateGatewayNew";
	}
	
	owner.update_gateway = function(userId, gatewayId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/gatewayList/" + gatewayId + "/updateGateway";
	}
	
	owner.delete_gateway = function(userId, gatewayId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/gatewayList/" + gatewayId + "/releaseGateway";
	}
	
	owner.check_gateway = function(userId, locateId, ssid) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/" + locateId + "/" + ssid + "/CheckGatewayNew";
	}
	
	owner.node_list = function(userId, locateId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/" + locateId + "/nodes";
	}
	
	owner.add_node = function(userId, locateId, nodeSN) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/" + locateId + "/node/" + nodeSN;
	}
	
	owner.update_node = function(userId, nodeId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/nodeList/" + nodeId + "/NodeSetting";
	}
	
	owner.post_update_node_name = function(userId, nodeId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/nodeList/" + nodeId + "/UpdateNodeName";
	}
	
//	owner.post_update_node = function(userId, nodeId) {
//		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/nodeList/" + nodeId + "/PostNodeSetting";
//	}
	
	owner.delete_node = function(userId, nodeId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/" + nodeId;
	}
	
	owner.schedule = function(userId, nodeId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/nodeList/" + nodeId + "/Schedule";
	}
	
	owner.getScheduleList = function(userId, nodeId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/nodeList/" + nodeId + "/Schedule";
	}
	
	owner.update_schedule = function(userId, nodeId, weekDay) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/nodeList/" + nodeId + "/" + weekDay + "/oneDaySchedule"; 
	}
	
	owner.copy_schedule = function(userId, nodeId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/nodeList/" +nodeId+ "/SetSchedule";
	}
	
	//能量损耗
	owner.energy_info = function(userId, nodeId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/nodeList/" + nodeId + "/TempValveMAS"; 
	}
	
	owner.energy_curve_today = function(userId, nodeId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/nodeList/" + nodeId + "/todayTempTrend";
	}
	
	owner.energy_curve_week = function(userId, nodeId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/nodeList/" + nodeId + "/weekTempTrend";
	}
	
	owner.make_power = function(userId, nodeId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/nodeList/" + nodeId + "/makepower";
	}
	
	owner.set_temp_override = function(userId, nodeId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/nodeList/" + nodeId + "/tmpOverride";
	}
	
	owner.set_gas_valve_override = function(userId, nodeId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/nodeList/" + nodeId + "/gasValveOverride";
	}
	
	owner.get_gas_velve_info = function(userId, nodeId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/nodeList/" + nodeId + "/gasValveInfo";
	}
	
	owner.write_status = function(userId, nodeId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/nodeList/" + nodeId + "/WriteStatus";
	}
	
	owner.link_gateway = function() {
		return "http://192.168.4.1/config?command=wifi";
		// return "http://192.168.137.1/config?command=wifi";
		// return "http://192.168.4.1/config";
	}
	
	owner.link_ap_status = function() {
		return "http://192.168.4.1/config?command=status";
		// return "http://192.168.137.1/config?command=status";
		// return "http://192.168.4.1/config";
	}
	
//	owner.link_ap_dns_status = function() {
//		return "http://192.168.4.1/config?command=dnsStat";
//	}
	
	owner.get_user_info = function(userId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId;
	}
	
	//激活node
	owner.set_active = function(userId, nodeId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/nodeList/" + nodeId + "/active";
	}
	
	//瞬时刷新网关
	owner.set_active_gateway = function(userId, locateId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/locateList/" + locateId + "/testGatewayStat";
	}
	
	owner.node_add_status = function(userId, locateId, node_sn) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/" + locateId + "/nodeAddStatus/"+node_sn;
	}
	
	// 测试网关
	owner.light_gateway = function(userId, mac) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/locateList/" + mac + "/lightGateway"; 
	}
	
	// 执行器状态
	owner.actuator_status = function(userId, nodeId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/nodeList/" + nodeId + "/actuatorStatus"; 
	}
	
	// 推送相关
	owner.alerm_message_list = function(userId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/readEventMessageList";
	}

	owner.alerm_message_detail = function(userId, eventId) {
		return LANCABLE_SERVER_USERS_NEW + "/" + userId + "/eventList/" + eventId + "/readEventMessage";
	}

}(mui, window.poer_url = {}));