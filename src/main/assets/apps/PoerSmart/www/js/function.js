/**
 * app所有与服务器的通讯接口
 **/
(function ($, owner) {

    var TIMEOUT = 30000;

    window.RespStatus = {
        SUCCESS: "10000",
        E0001: "E0001",
        E0002: "E0002",
        E0003: "E0003",
        E0004: "E0004"
    }

    owner.setLocalStorage = function (name, value) {
        localStorage.setItem(name, JSON.stringify(value));
    }

    // 设置应用本地配置
    owner.getLocalStorage = function (name) {
        var settingsText = localStorage.getItem(name) || "{}";
        return JSON.parse(settingsText);
    }

    var ajax = function (url, data, type, timeout, success, fail, beforeSend) {
        if (url != "http://192.168.4.1/config?command=status")
            IS_DEBUG = false;
        else
            IS_DEBUG = true;
        if (IS_DEBUG) {
            plus.logger.consoleLog("reqURL:" + url);
            console.log("reqURL:" + url);
            plus.logger.consoleLog("reqData:" + data);
            console.log("reqData:" + data);
            // plus.logger.consoleLog("DataLength:" + data.length);
            // console.log("DataLength:" + data.length);
            // plus.logger.consoleLog("reqType:" + type);
            // console.log("reqType:" + type);
        }
        var xhr = new plus.net.XMLHttpRequest();
        xhr.onreadystatechange = function () {
            switch (xhr.readyState) {
                case 0:
                    if (IS_DEBUG) {
						plus.logger.consoleLog("xhr请求已初始化");
						console.log("xhr请求已初始化");
                    }
                    break;
                case 1:
                    if (IS_DEBUG) {
						plus.logger.consoleLog("xhr请求已打开");
						console.log("xhr请求已打开");
                    }
                    break;
                case 2:
                    if (IS_DEBUG) {
						plus.logger.consoleLog("xhr请求已发送");
						console.log("xhr请求已发送");
                    }
                    break;
                case 3:
                    if (IS_DEBUG) {
						plus.logger.consoleLog("xhr请求已响应");
						console.log("xhr请求已响应");
                    }
                    break;
                case 4:
                    if (xhr.status == 200) {
                        if (IS_DEBUG) {
							plus.logger.consoleLog("xhr请求成功：" + xhr.responseText);
							console.log("xhr请求成功：" + xhr.responseText);
                        }
                        if (success) {
                            try {
                                var result = JSON.parse(xhr.responseText);
                                success(result);
                            } catch (e) {
                                success(xhr.responseText);
                            }
                        }
                        ;
                    } else {
                        if (IS_DEBUG) {
//							plus.logger.consoleLog("xhr请求失败：" + xhr.readyState);
//							console.log("xhr请求失败：" + xhr.readyState);
                        }
                        if (fail) fail(xhr, xhr.readyState);
                    }
                    break;
                default:
                    break;
            }
        }

        /**
         * 请求超时
         * @param {Object} e
         */
        xhr.ontimeout = function (e) {
            if (success) {
                success({
                    status: "E0002",
                    message: "timeout",
                    data: {}
                });
            }
        }

        xhr.timeout = timeout;

        xhr.open(type, url, true);
        if (beforeSend) {
            var login_info = poer_function.getLocalStorage("login_info");
            xhr.setRequestHeader('Authorization', "Basic " + login_info.auth);
        }
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(data);
    }

    var ajax2 = function (url, data, type, timeout, success, failure, beforeSend) {
        if (IS_DEBUG) {
            plus.logger.consoleLog("reqURL:" + url);
            console.log("reqURL:" + url);
            plus.logger.consoleLog("reqData:" + data);
            console.log("reqData:" + data);
            plus.logger.consoleLog("DataLength:" + data.length);
            console.log("DataLength:" + data.length);
            plus.logger.consoleLog("reqType:" + type);
            console.log("reqType:" + type);
        }
        var reqHeader = {
            "Content-Type": "application/json"
        };
        if (beforeSend) {
            var login_info = poer_function.getLocalStorage("login_info");
            reqHeader.Authorization = "Basic " + login_info.auth;
        }
        // if (typeof data != "object") {
        //     data = JSON.parse(data);
        // }

        $.ajax(url, {
            data: data,
            dataType: 'application/json',//服务器返回json格式数据
            type: type,//HTTP请求类型
            timeout: timeout,//超时时间设置为10秒；
            headers: reqHeader,
            crossDomain : true,
            success: function (result) {
                //服务器返回响应，根据响应结果，分析是否登录成功；
                success(data);
            },
            error: function (xhr, type, errorThrown) {
                //异常处理；
                failure(xhr, type, errorThrown);
            }
        });
    }

    // 用户登录
    owner.login = function (url, data, success, fail) {
        ajax(url, data, 'POST', TIMEOUT, success, fail, false);
    };

    //用户注册
    owner.register = function (url, data, success, fail) {
        ajax(url, data, 'POST', TIMEOUT, success, fail, false);
    };

    //忘记密码
    owner.forget_password = function (url, data, success, fail) {
        ajax(url, data, 'POST', TIMEOUT, success, fail, false);
    };

    //修改密码
    owner.change_password = function (url, data, success, fail) {
        ajax(url, data, 'POST', TIMEOUT, success, fail, false);
    };

    //更新用户信息
    owner.update_user = function (url, data, success, fail) {
        //		ajax(url, data, 'PUT', TIMEOUT, success, fail, true);
        ajax(url, data, 'POST', TIMEOUT, success, fail, true);
    };

    //提交反馈
    owner.feedback = function (url, data, success, fail) {
        ajax(url, data, 'POST', TIMEOUT, success, fail, true);
    };

    // 获取locate列表
    owner.get_locate_list = function (url, data, success, fail) {
        ajax(url, data, 'GET', TIMEOUT, success, fail, true);
    }

    // 添加locate
    owner.add_locate = function (url, data, success, fail) {
        ajax(url, data, 'POST', TIMEOUT, success, fail, true);
    }

    // 更新locate
    owner.update_locate = function (url, data, success, fail) {
        //		ajax(url, data, 'PUT', TIMEOUT, success, fail, true);
        ajax(url, data, 'POST', TIMEOUT, success, fail, true);
    }

    // 删除locate
    owner.delete_locate = function (url, data, success, fail) {
        ajax(url, data, 'GET', TIMEOUT, success, fail, true);
    }

    // 获取gateway列表
    owner.get_gateway_list = function (url, data, success, fail) {
        ajax(url, data, 'GET', TIMEOUT, success, fail, true);
    }

    // 获取userid下的所有gateway
    owner.get_gateway_list_all = function (url, data, success, fail) {
        ajax(url, data, 'GET', TIMEOUT, success, fail, true);
    }

    // 获取单个gateway
    owner.get_gateway_info = function (url, data, success, fail) {
        ajax(url, data, 'GET', TIMEOUT, success, fail, true);
    }

    // update gateway
    owner.update_gateway = function (url, data, success, fail) {
        //		ajax(url, data, 'PUT', TIMEOUT, success, fail, true);
        ajax(url, data, 'POST', TIMEOUT, success, fail, true);
    }

    // delete gateway
    owner.delete_gateway = function (url, data, success, fail) {
        //		ajax(url, data, 'DELETE', TIMEOUT, success, fail, true);
        ajax(url, data, 'POST', TIMEOUT, success, fail, true);
    }

    // 检测gateway状态
    owner.check_gateway = function (url, data, success, fail) {
        ajax(url, data, 'GET', TIMEOUT, success, fail, true);
    }

    // 获取node列表
    owner.get_node_list = function (url, data, success, fail) {
        ajax(url, data, 'GET', TIMEOUT, success, fail, true);
    }

    //添加node
    owner.add_node = function (url, data, success, fail) {
        ajax(url, data, 'GET', TIMEOUT, success, fail, true);
    }

    //更新node
    owner.update_node = function (url, data, success, fail) {
        //		ajax(url, data, 'PUT', TIMEOUT, success, fail, true);
        ajax(url, data, 'POST', TIMEOUT, success, fail, true);
    }

    owner.update_node_name = function (url, data, success, fail) {
        ajax(url, data, 'POST', TIMEOUT, success, fail, true);
    }

    //delete node
    owner.delete_node = function (url, data, success, fail) {
        //		ajax(url, data, 'DELETE', TIMEOUT, success, fail, true);
        ajax(url, data, 'POST', TIMEOUT, success, fail, true);
    }

    //获取schedule
    owner.get_schedule = function (url, data, success, fail) {
        ajax(url, data, 'GET', TIMEOUT, success, fail, true);
    }

    //更新schedule
    owner.update_schedule = function (url, data, success, fail) {
        //		ajax(url, data, 'PUT', TIMEOUT, success, fail, true);
        ajax(url, data, 'POST', TIMEOUT, success, fail, true);
    }

    //拷贝schedule
    owner.copy_schedule = function (url, data, success, fail) {
        //		ajax(url, data, 'PUT', TIMEOUT, success, fail, true);
        ajax(url, data, 'POST', TIMEOUT, success, fail, true);
    }

    //获取能耗
    owner.energy_info = function (url, data, success, fail) {
        ajax(url, data, 'GET', TIMEOUT, success, fail, true);
    }

    // 当天的能量曲线
    owner.energy_curve_today = function (url, data, success, fail) {
        ajax(url, data, 'GET', TIMEOUT, success, fail, true);
    }

    owner.energy_curve_week = function (url, data, success, fail) {
        ajax(url, data, 'GET', TIMEOUT, success, fail, true);
    }

    owner.make_power = function (url, data, success, fail) {
        ajax(url, data, 'GET', TIMEOUT, success, fail, true);
    }

    //设置越控
    owner.set_temp_override = function (url, data, success, fail) {
        //		ajax(url, data, 'PUT', 1TIMEOUT, success, fail, true);
        ajax(url, data, 'POST', TIMEOUT, success, fail, true);
    }

    // 设置燃气阀越控
    owner.set_gas_valve_override = function (url, data, success, fail) {
        //		ajax(url, data, 'PUT', 1TIMEOUT, success, fail, true);
        ajax(url, data, 'POST', TIMEOUT, success, fail, true);
    }

    // 燃气阀即时信息获取
    owner.get_gas_valve_info = function (url, data, success, fail) {
        ajax(url, data, 'GET', TIMEOUT, success, fail, true);
    }

    //获取写状态,后台默认等待8秒，这里超时设置为10秒
    owner.write_status = function (url, data, success, fail) {
        ajax(url, data, 'GET', TIMEOUT, success, fail, true);
    }

    //link gateway
    owner.link_gateway = function (url, data, success, fail) {
        ajax(url, data, 'POST', TIMEOUT, success, fail, false);
    }

    //link ap status
    owner.link_ap_status = function (url, data, success, fail) {
        ajax(url, data, 'GET', TIMEOUT, success, fail, false);
    }

    //get user info
    owner.get_user_info = function (url, data, success, fail) {
        ajax(url, data, 'GET', TIMEOUT, success, fail, true);
    }

    //激活node
    owner.set_active = function (url, data, success, fail) {
        //		ajax(url, data, 'PUT', TIMEOUT, success, fail, true);
        ajax(url, data, 'POST', TIMEOUT, success, fail, true);
    }

    //瞬时刷新网关
    owner.set_active_gateway = function (url, data, success, fail) {
        ajax(url, data, 'GET', TIMEOUT, success, fail, true);
    }

    //node_add_status
    owner.node_add_status = function (url, data, success, fail) {
        ajax(url, data, 'GET', TIMEOUT, success, fail, true);
    }

    // 测试网关
    owner.light_gateway = function (url, data, success, fail) {
        ajax(url, data, 'GET', TIMEOUT, success, fail, true);
    }

    // 执行器状态
    owner.actuator_status = function (url, data, success, fail) {
        ajax(url, data, 'GET', TIMEOUT, success, fail, true);
    }

    owner.alerm_message_list = function (url, data, success, fail) {
        ajax(url, data, 'POST', TIMEOUT, success, fail, true);
    }

    owner.alerm_message_detail = function (url, data, success, fail) {
        ajax(url, data, "GET", TIMEOUT, success, fail, true);
    }

    owner.loadPage = function (url, data, success, failed) {
        ajax(url, data, "GET", TIMEOUT, success, failed, false);
    }
}(mui, window.poer_function = {}));