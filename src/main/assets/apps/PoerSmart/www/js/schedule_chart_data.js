var add_button_icon = "path://M15.5 6h-5.5v-5.5c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v5.5h-5.5c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h5.5v5.5c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-5.5h5.5c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5z";
var copy_button_icon = "path://M10 4v-4h-7l-3 3v9h6v4h10v-12h-6zM3 1.414v1.586h-1.586l1.586-1.586zM1 11v-7h3v-3h5v3l-3 3v4h-5zM9 5.414v1.586h-1.586l1.586-1.586zM15 15h-8v-7h3v-3h5v10z";
var refresh_button_icon = "path://M16 6h-6l2.243-2.243c-1.133-1.133-2.64-1.757-4.243-1.757s-3.109 0.624-4.243 1.757c-1.133 1.133-1.757 2.64-1.757 4.243s0.624 3.109 1.757 4.243c1.133 1.133 2.64 1.757 4.243 1.757s3.109-0.624 4.243-1.757c0.095-0.095 0.185-0.192 0.273-0.292l1.505 1.317c-1.466 1.674-3.62 2.732-6.020 2.732-4.418 0-8-3.582-8-8s3.582-8 8-8c2.209 0 4.209 0.896 5.656 2.344l2.343-2.344v6z";
var save_button_icon = "path://M14 0h-14v16h16v-14l-2-2zM8 2h2v4h-2v-4zM14 14h-12v-12h1v5h9v-5h1.172l0.828 0.828v11.172z";
var pageIds = ['chart_sun', 'chart_mon', 'chart_tue', 'chart_wed', 'chart_thu', 'chart_fri', 'chart_sat'];
var timeList = [];
for (var i = 0; i < 24; i++) {
    var H = ultZeroize(i, 2);
    timeList.push(H + ":00");
    timeList.push(H + ":15");
    timeList.push(H + ":30");
    timeList.push(H + ":45");
}
//timeList.push("24:00");

var dayIndex;

var seriesData, markPointData;
var addMarkPoint = true;
var markPointIndex = 0;
var myChart;
var mIsUpdating;

var language;
var schedule_info;
var programTimes;
var show_temp_unit;
var nodeId;
var settings_login_info = poer_function.getLocalStorage("login_info");
language = settings_login_info.language;
showLabels();
var settings_user_info = poer_function.getLocalStorage("user_info");
var userId = settings_user_info.Id;
var userTempUnit = settings_user_info.DisplayMode;
nodeId = poer_function.getLocalStorage("node_detail_id");
show_temp_unit = userTempUnit == 0 ? "°C" : "°F";
var is_edit = false;
var can_write = true;
var no_write_type = 0; //不能操作的原因  0:设备正在写, 1:网关离线, 2:设备离线
var write_status_info = poer_function.getLocalStorage("write_status_info");
var device_status_info;
for (var i in write_status_info) {
    if (write_status_info[i]['Id'] == nodeId) {
        device_status_info = write_status_info[i];
    }
}

function showLabels() {
    document.getElementById("btnEdit").innerHTML = poer_language.label_edit(language);
    document.getElementById("btnDel").innerHTML = poer_language.label_delete(language);
    document.getElementById("btnCancel").innerHTML = poer_language.label_cancel(language);
}
var respWebview;

function refreshPage() {
    plus.key.addEventListener("backbutton", function (e) {
        plus.screen.lockOrientation("portrait-primary");
    }, false);
    myChart = echarts.init(document.getElementById("myChart"));
    schedule_info = poer_function.getLocalStorage("schedule_" + nodeId);
    showChart();
    respWebview = plus.webview.getWebviewById('edit_schedule_' + nodeId);
}

function showChart(isReload) {
    var options = makeInitOptions();
    myChart.setOption(options);
    myChart.showLoading();
    //	myChart.hideLoading();
    myChart.on("click", onMarkPointClick);
    setTimeout(function () {
        if (isReload)
            schedule_info = poer_function.getLocalStorage("schedule_" + nodeId);
        programTimes = schedule_info[dayIndex].ProgramTime;
        makeChartDatas();
//		markPointData.pop();
        var options = makeReadyOptions();
        console.log(JSON.stringify(options));
        myChart.setOption(options);
        myChart.hideLoading();
    }, 1000);
}

function getWeekScheduleList() {
    var reqUrl = poer_url.getScheduleList(userId, nodeId);
    poer_function.get_schedule(reqUrl, {}, getScheduleListSuccess, getScheduleListFailed);
}

function getScheduleListSuccess(result) {
    if (IS_DEBUG) {
        console.log("type of result: " + typeof result);
        console.log(result.ProgramMap.default);
    }
    schedule_info = result.ProgramMap.default;
    for (var i in schedule_info) {
        for (var j in schedule_info[i].ProgramTime) {
            var temp = schedule_info[i].ProgramTime[j];
            schedule_info[i].ProgramTime[j].Sec = temp.Hour * 3600 + temp.Min * 1800;
        }
    }
    //	schedule_info = poer_function.getLocalStorage("schedule_" + nodeId);
    programTimes = schedule_info[dayIndex].ProgramTime;
    makeChartDatas();
    var options = makeReadyOptions();
    myChart.setOption(options);
    myChart.hideLoading();
}

function getScheduleListFailed(xhr) {

}

/***************************数据准备*****************************/
function makeChartDatas() {
    markPointIndex = 0;
    seriesData = [], markPointData = [], addMarkPoint = true;
    var length = programTimes.length;

    for (var i = 0; i < length - 1; i++) {
        var programTime = programTimes[i];
        var nextProgramTime = programTimes[i + 1];
        addToData(i, programTime, nextProgramTime);
    }

//	var lastProgramTime = programTimes[length - 1];
//	if (addMarkPoint) {
//		var temprature = roundUp(lastProgramTime.Temprature / 10 * 2, 0) / 2;
//		var itemColor = getColor(temprature);
//		markPointData.push({
//			index: length - 1,
//			name: timeList[markPointIndex],
//			value: temprature,
//			xAxis: markPointIndex,
//			yAxis: temprature,
//			startTime: lastProgramTime.Sec,
//			endTime: 86400,
//			temprature: temprature,
//			itemStyle: {
//				normal: {
//					color: itemColor
//				}
//			}
//		});
//	}
//	seriesData.push(temprature);

    //	var lastProgramTime = programTimes[length - 1];
    //	var tempProgramTime = {
    //		Hour: 24,
    //		Min: 0,
    //		Temprature: lastProgramTime.Temprature,
    //		Sec: 24 * 3600
    //	};
    //
    //	addToData(length - 1, lastProgramTime, tempProgramTime);
    //
    //	if (addMarkPoint) {
    //		markPointData.push({
    //			index: length - 1,
    //			name: timeList[markPointIndex],
    //			value: tempProgramTime.Temprature / 10,
    //			xAxis: markPointIndex,
    //			yAxis: tempProgramTime.Temprature / 10,
    //			startTime: tempProgramTime.Sec,
    //			endTime: tempProgramTime.Sec,
    //			temprature: tempProgramTime.Temprature / 10,
    //		});
    //	}
    //	seriesData.push(tempProgramTime.Temprature / 10);
}

function getColor(temp) {
    var h = 0,
        sc = 1;
    if (show_temp_unit != "°C") {
        h = 32;
        sc = 1.8;
    }
    if (temp <= (h + 12 * sc)) {
        return "blue";
    } else if (temp > (h + 12 * sc) && temp <= (h + 20 * sc)) {
        return "green";
    } else if (temp > (h + 20 * sc) && temp < (h + 26 * sc)) {
        return "orange";
    } else {
        return "red";
    }
}

function addToData(index, programTime, nextProgramTime) {
    //	if (addMarkPoint) {
    //		addMarkPoint = false;
    var temprature = roundUp(programTime.Temprature / 10 * 2, 0) / 2;
    var itemColor = getColor(temprature);
    markPointData.push({
        index: index,
        name: timeList[markPointIndex],
        value: temprature,
        xAxis: markPointIndex,
        yAxis: temprature,
        startTime: programTime.Sec,
        endTime: nextProgramTime.Sec,
        temprature: temprature,
        itemStyle: {
            normal: {
                color: itemColor
            }
        }
        //		resClick: programTime.Sec != 0
    });
    //	}
    if (programTime.Temprature != nextProgramTime.Temprature) {
        addMarkPoint = true;
    }

    var tempSec = nextProgramTime.Sec - programTime.Sec;

    // for (var i = programTime.Sec; i < nextProgramTime.Sec; i+=900) {
    //     var today = new Date();
    //     var temp = new Date((+new Date(1970, 1, 1, 0, 0, 0)) + i * 1000);
    //     var time = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate(), temp.getHours(), temp.getMinutes());
    //     markPointIndex++;
    //     seriesData.push({
    //         name : +time,
    //         value : [dateToMinStr(time), temprature]
    //     });
    // }

    for (var j = 0; j < tempSec / 900; j++) {
        markPointIndex++;
        seriesData.push(temprature);
    }
}
/***************************数据准备*****************************/

/***************************显示曲线*****************************/
function makeInitOptions() {
    var options = {
        grid: {
            left: 40,
            right: 15,
            top: 40,
            bottom: 22
        },
        tooltip: {
            //			show: false,
            //			showContent: false,
            trigger: 'axis',
            position: function (point, params, dom) {
                var docWidth = document.width;
                var docHeight = document.height;
                var clickX = point[0];
                var clickY = point[1];
                if (clickX > docWidth / 2) {
                    if (language == "English")
                        return [clickX - 160, docHeight - 53];
                    else
                        return [clickX - 100, docHeight - 53]
                } else {
                    return [clickX + 15, docHeight - 53];
                }
            }
        },
        toolbox: {
            show: false,
            feature: {
                myBtnRefresh: {
                    show: true,
                    title: poer_language.label_refresh(language),
                    icon: refresh_button_icon,
                    onclick: onRefreshButtonClick
                },
                myBtnPlus: {
                    show: true,
                    title: poer_language.label_add(language),
                    icon: add_button_icon,
                    onclick: onAddButtonClick
                },
                myBtnSave: {
                    show: true,
                    title: poer_language.label_save(language),
                    icon: save_button_icon,
                    onclick: onSaveButtonClick
                },
                myBtnCopy: {
                    show: true,
                    title: poer_language.label_copy(language),
                    icon: copy_button_icon,
                    onclick: onCopyButtonClick
                }
            },
            top: -6,
            left: "right",
            itemSize: 25,
            itemGap: 20
        },
        xAxis: {
            type: 'category',
            // boundaryGap: true,
            data: timeList,
            // splitLine: {
            //     show: false
            // }
        },
        yAxis: {
            // splitLine: {
            //     show: false
            // }
        },
        series: [{
            name: poer_language.label_temperature(language),
            type: 'line',
            data: []
        }]
    };
    return options;
}

function makeReadyOptions() {
    console.log("makeReadyOptions");
    var options = {
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} ' + show_temp_unit
            }
        },
        series: [{
            name: poer_language.label_temperature(language),
            data: seriesData,
            markPoint: {
                data: markPointData
            }
        }]
    }
    return options;
}
/***************************显示曲线*****************************/

/***************************标注点击事件*****************************/
var resData;

function onMarkPointClick(param) {
    show_can_write(); //实时判断是否可写
    if (!can_write) {
        show_no_write(no_write_type);
        return;
    }
    resData = param.data;
    if (resData.startTime < 86400) {
        editData = {
            node_id: nodeId,
            dayIndex: dayIndex,
            refreshPageId: pageIds[dayIndex],
            start_time: resData.startTime,
            end_time: resData.endTime,
            temperature: resData.temprature
        }

        //		showEditPop();
        //		editDataBind();

        var menu = document.getElementById("menuuu");
        var docWidth = document.width;
        var docHeight = document.height;
        var event = param.event;
        var pageX = event.offsetX;
        var pageY = event.offsetY;

        if (pageX > docWidth / 2) {
            pageX -= 100;
        }

        if (pageY > docHeight / 2) {
            pageY -= 50;
        }

        menu.style.left = pageX + 'px';
        menu.style.top = pageY + 'px';
        if (resData.index == 0) {
            document.getElementById("menu_delete").style.display = "none";
        } else {
            document.getElementById("menu_delete").style.removeProperty("display");
        }
        menu.style.display = "block";
    }
}
/***************************标注点击事件*****************************/

/***************************按钮事件*****************************/
var eventTypes = {
    "onAddButtonClick": onAddButtonClick,
    "onRefreshButtonClick": onRefreshButtonClick,
    "onCopyButtonClick": onCopyButtonClick,
    "onSaveButtonClick": onSaveButtonClick
};
for (var fnName in eventTypes) {
    window.addEventListener(fnName, eventTypes[fnName]);
}

function onAddButtonClick() {
    hideMenu();
    var data = {
        node_id: nodeId,
        dayIndex: dayIndex,
        start_time: 0,
        end_time: 0,
        temperature: 0,
        refreshPageId: pageIds[dayIndex]
    }
    poer_function.setLocalStorage("schedule_single", data);
    poer_public.openWindow("../edit_schedule_single.html", "edit_schedule_single");
}

function onRefreshButtonClick() {
    hideMenu();
    //	showChart();
    var page = plus.webview.getWebviewById("node_detail_" + nodeId);
    mui.fire(page, "refresh_page", {});
}

function onCopyButtonClick() {
    hideMenu();
    show_can_write(); //实时判断是否可写
    if (!can_write && no_write_type != 0) {
        show_no_write(no_write_type);
        return;
    }

    poer_function.setLocalStorage("day_index", dayIndex);
    var copy_schedule_page = plus.webview.getWebviewById("copy_schedule_" + nodeId);
    if (copy_schedule_page != null) {
        mui.fire(copy_schedule_page, 'refresh_page', {});
    }
    poer_public.openWindow("../copy_schedule.html", 'copy_schedule_' + nodeId);
}

function showUpdState(isUpdating) {
    mIsUpdating = isUpdating;
    mui.fire(respWebview, "showUpdState", {
        isUpdating: mIsUpdating
    });
}

function onSaveButtonClick() {
    hideMenu();
    show_can_write(); //实时判断是否可写
    if (!can_write) {
        show_no_write(no_write_type);
        return;
    }
    var first_point = programTimes[0];
    if (first_point['Sec'] > 0) {
        poer_public.alert(poer_language.label_firstpoint_error(language));
        return;
    }
    var length = programTimes.length;
    var end_point = programTimes[length - 1];
    if (end_point['Sec'] < 86400) {
        poer_public.alert(poer_language.label_endpoint_error(language));
        return;
    }

    var content;
    var result_array = new Array();
    var item;
    var temperature;
    var length = programTimes.length;
    if (length > 13) {
        poer_public.alert(poer_language.label_timepoint_max(language));
        return;
    }

    var btnArray = [poer_language.label_no(language), poer_language.label_yes(language)];
    mui.confirm(poer_language.label_update_schedule(language), poer_language.label_confirm(language), btnArray, function (e) {
        if (e.index == 1) { //确认修改
            for (var i in programTimes) {
                item = programTimes[i];
                temperature = item['Temprature'];
                result_array.push({
                    'Hour': item['Hour'],
                    'Min': item['Min'],
                    'Temprature': userTempUnit == 0 ? temperature * 9 : (temperature - 320) * 5
                });
            }
            content = {
                'ProgramTime': result_array
            };
            // console.log(JSON.stringify(result_array));
            save(content);
        }
    });
}
/***************************按钮事件*****************************/

/***************************自定义函数*****************************/
function show_can_write() {
    console.log("show_can_write");
    var write_status_info = poer_function.getLocalStorage("write_status_info");
    var device_status_info;
    for (var i in write_status_info) {
        if (write_status_info[i]['Id'] == nodeId) {
            device_status_info = write_status_info[i];
            if (device_status_info['Status'] == 1) {
                can_write = true;
            } else {
                can_write = false;
                no_write_type = 0; //正在更新中
            }
            break;
        }
    }

    var node_list = poer_function.getLocalStorage("node_list");
    var node_info;
    for (var i in node_list) {
        if (node_list[i]['Id'] == nodeId) {
            node_info = node_list[i];
            break;
        }
    }

    var gateway_list = poer_function.getLocalStorage("gateway_list");
    var gateway_id = node_info['GatewayId'];
    var gateway_info;
    for (var i in gateway_list) {
        if (gateway_list[i]['Id'] == gateway_id) {
            gateway_info = gateway_list[i];
            break;
        }
    }

    //判断网关是否离线以及设备是否离线
    if (!node_info['RfLinkGateway']) { //设备离线
        can_write = false;
        no_write_type = 2;
    }

    if (!gateway_info['IsOnline']) { //网关离线
        can_write = false;
        no_write_type = 1;
    }
}

function show_no_write(type) {
    var text;
    switch (type) {
        case 0:
            text = poer_language.label_set_updating(language);
            break;
        case 1:
            text = poer_language.label_gateway_offline(language);
            break;
        case 2:
            text = poer_language.label_offline(language);
            break;
    }
    poer_public.alert(text);
}

function hideMenu() {
    document.getElementById("menuuu").style.display = "none";
}
/***************************自定义函数*****************************/

/***************************事件绑定*****************************/
document.getElementById("menu_edit").addEventListener("tap", function () {
    hideMenu();
    var data = {
        node_id: nodeId,
        dayIndex: dayIndex,
        refreshPageId: pageIds[dayIndex],
        start_time: resData.startTime,
        end_time: resData.endTime,
        temperature: resData.temprature
    }
    poer_function.setLocalStorage("schedule_single", data);
    poer_public.openWindow("../edit_schedule_single.html", "edit_schedule_single");
});
document.getElementById("menu_delete").addEventListener("tap", function () {
    hideMenu();

    programTimes.splice(resData.index, 1);
    showChart(false);
});
document.getElementById("menu_cancel").addEventListener("tap", function () {
    hideMenu();
})
window.addEventListener("setPoint", function (event) {
    //获得事件参数
    var result = event.detail;
    var start_sec = result.starttime;
    var end_sec = result.endtime;
    var temperature = result.temperature * 10;
    if (IS_DEBUG) {
        console.log("result:" + JSON.stringify(result));
    }
    var start_hour = parseInt(start_sec / 3600);
    var start_min = parseInt(start_sec % 3600 / 60);
    var end_hour = parseInt(end_sec / 3600);
    var end_min = parseInt(end_sec % 3600 / 60);

    var pre_start; //起始点前面的最后一个点
    var next_end; //结束点后面的第一个点
    var pre_end; //结束点前面的最后一个点

    var length = programTimes.length;
    var cur_node_schedule_info = programTimes;
    if (IS_DEBUG) {
        console.log(JSON.stringify(cur_node_schedule_info));
    }
    var i;
    for (i = 0; i < length; i++) {
        if (cur_node_schedule_info[i]['Sec'] - start_sec >= 0) {
            pre_start = i - 1;
            break;
        }
    }
    for (i = 0; i < length; i++) {
        if (cur_node_schedule_info[i]['Sec'] - end_sec >= 0) {
            next_end = i;
            break;
        }
    }
    for (i = length - 1; i > -1; i--) {
        if (cur_node_schedule_info[i]['Sec'] - end_sec <= 0) {
            pre_end = i;
            break;
        }
    }
    var addEnd = true;
    for (i = 0; i < length; i++) {
        if (cur_node_schedule_info[i]["Hour"] == end_hour && cur_node_schedule_info[i]["Min"] == end_min) {
            addEnd = false;
            break;
        }
    }

    console.log(pre_start + "," + next_end + "," + pre_end);

    var child_temp = cur_node_schedule_info[pre_end]['Temprature'];
    if (typeof(next_end) == "undefined") { //结束时间是24:00
        next_end = cur_node_schedule_info.length;
    }
    if (addEnd) {
        cur_node_schedule_info.splice(pre_start + 1, next_end - pre_start - 1, {
            'Hour': start_hour,
            'Min': start_min,
            'Temprature': temperature,
            'Sec': start_sec
        }, {
            'Hour': end_hour,
            'Min': end_min,
            'Temprature': child_temp,
            'Sec': end_sec
        });
    } else {
        cur_node_schedule_info.splice(pre_start + 1, next_end - pre_start - 1, {
            'Hour': start_hour,
            'Min': start_min,
            'Temprature': temperature,
            'Sec': start_sec
        });
    }

    if (cur_node_schedule_info.length > 13) {
        poer_public.alert(poer_language.label_timepoint_max(language));
        return;
    }

    programTimes = cur_node_schedule_info;

    showChart(false);
});

window.addEventListener('refresh_page', function (event) {
    console.log("refresh_page");
    //重新获取schedule info
    show_can_write();
    if (can_write) { //正常才能更新
        console.log("edit schedule refresh page");
        showChart(false);
    }
});

window.addEventListener("reloadPage", function (event) {
    showChart(true);
});
/***************************事件绑定*****************************/

var update_times = 0;

function setBackTask(status) {
    console.log("setBackTask");
    if (!status) {
        update_times = 0;
    }
    var write_status_info = poer_function.getLocalStorage("write_status_info");
    for (var i in write_status_info) {
        if (write_status_info[i]['Id'] == nodeId) {
            write_status_info[i]['Type'] = 'set_node';
            write_status_info[i]['Status'] = status ? 1 : 0;
            poer_function.setLocalStorage('write_status_info', write_status_info);
            break;
        }
    }
    //	if (status) {
    //		weekday_div.style.display = "";
    //		set_updating_div.style.display = "none";
    //	} else {
    //		weekday_div.style.display = "none";
    //		set_updating_div.style.display = "";
    //	}
}

function writestatus_success(data) {
    // console.log("writestatus_success");
    // if (IS_DEBUG) {
    //     console.log(JSON.stringify(data));
    // }
    var Flag = data.TranStatus;
    // console.log("Flag: " + Flag);
    if (Flag) {
        //修改编程信息并保存
        // var content = {
        //     'ProgramTime': programTimes
        // };
        // schedule_info[dayIndex] = content;
        poer_function.setLocalStorage("schedule_" + nodeId, schedule_info);

        poer_public.toast(poer_language.label_update_success(language));
        setBackTask(true);
        showUpdState(false);
    } else {
        if (update_times > 60) {
            poer_public.toast(poer_language.label_update_failed(language));
            setBackTask(true);
            showUpdState(false);
            return;
        }
        setTimeout(get_write_status, 3000);
    }
}

function writestatus_fail(xhr, textStatus, errorThrown) {
    if (update_times > 60) {
        poer_public.alert(poer_language.label_update_failed(language));
        setBackTask(true);
        showUpdState(false);
        return;
    }
    setTimeout(get_write_status, 3000);
}

function get_write_status() {
    console.log(update_times);
    update_times++;
    var url = poer_url.write_status(userId, nodeId);
    var data = {};
    poer_function.write_status(url, data, writestatus_success, writestatus_fail);
}

function update_success(data) {
    var Flag = data.Flag;
    if (Flag) {
        // get_write_status();
        poer_public.alert(poer_language.msg_send_order_finished(language));
        setBackTask(true);
        showUpdState(false);
    } else {
        poer_public.alert(poer_language.label_update_failed(language));
        setBackTask(true);
        showUpdState(false);
    }
}

function update_fail(xhr, textStatus, errorThrown) {
    poer_public.alert(poer_language.label_update_failed(language));
    setBackTask(true);
    showUpdState(false);
}

function save(content) {
    // TODO: 去除updating
    setBackTask(false);
    showUpdState(true);
    var url = poer_url.update_schedule(userId, nodeId, dayIndex);
    poer_function.update_schedule(url, JSON.stringify(content), update_success, update_fail);
}

/***************************编程修改*****************************/
/*
 var btnStartTime = document.getElementById("btnStartTime");
 var btnEndTime = document.getElementById("btnEndTime");
 var btnTemperature = document.getElementById("btnTemperature");
 var btnDelete = document.getElementById("btnDelete");
 var btnSubmit = document.getElementById("btnSubmit");
 var btnCancel = document.getElementById("btnCancel");
 var updatePop = document.getElementById("update-pop");

 var startTime, startTimeValue, endTime, endTimeValue;
 var startTitle = poer_language.label_start_time(language) + ": ";
 var endTitle = poer_language.label_end_time(language) + ": ";
 var temperatureTitle = poer_language.label_temperature(language) + ": ";
 var h = [];
 for (i = 0; i <= 24; i++) {
 h.push({
 text: ultZeroize(i, 2),
 value: i
 });
 }
 var timePickerOption = {
 type: "time",
 customData: {
 h: h,
 i: [{
 text: "00",
 value: 0
 }, {
 text: "15",
 value: 15
 }, {
 text: "30",
 value: 30
 }, {
 text: "45",
 value: 45
 }]
 },
 labels: poer_language.array_datetime_picker_labels(language),
 buttons: poer_language.array_confirm_buttons(language)
 };

 function showEditPop() {
 updatePop.style.removeProperty("display");
 mui.fire(respWebview, "showPopOver", {
 isShow: true
 });
 }

 function hideEditPop() {
 updatePop.style.display = "none";
 mui.fire(respWebview, "showPopOver", {
 isShow: false
 });
 }

 function editDataBind() {
 // 数据绑定
 btnStartTime.innerHTML = startTitle + transfer_time(resData.startTime);
 startTime = transfer_time(resData.startTime);
 btnEndTime.innerHTML = endTitle + transfer_time(resData.endTime);
 endTime = transfer_time(resData.endTime);
 btnTemperature.innerHTML = temperatureTitle + resData.temprature + show_temp_unit;
 if (resData.index == 0) {
 btnDelete.setAttribute("disabled", "disabled");
 } else {
 btnDelete.removeAttribute("disabled");
 }
 }

 btnCancel.addEventListener("tap", function() {
 hideEditPop();
 });

 btnDelete.addEventListener("tap", function() {
 hideEditPop();
 programTimes.splice(resData.index, 1);
 showChart(false);
 });

 btnSubmit.addEventListener("tap", function() {

 });

 function transfer_time(time) {
 var override_time_hour = parseInt(time / 3600);
 var override_time_min = parseInt(time % 3600 / 60);
 var show_override_time = (override_time_hour < 10 ? "0" + override_time_hour : override_time_hour) + ":" + (override_time_min < 10 ? "0" + override_time_min : override_time_min);
 return show_override_time;
 }

 btnStartTime.addEventListener("tap", function() {
 console.log("btnStartTime TAP");
 timePickerOption.value = "1990-01-01 " + startTime;
 timePickerOption.offsetHeight = 100;

 var timePicker = new mui.DtPicker(timePickerOption);
 timePicker.show(function(result) {
 console.log(JSON.stringify(result));
 startTimeValue = result.h.value * 3600 + result.i.value * 60;
 startTime = result.text;
 btnStartTime.innerHTML = startTitle + result.text;
 });
 });

 btnEndTime.addEventListener("tap", function() {
 console.log("btnEndTime TAP");
 timePickerOption.value = "1990-01-01 " + endTime;
 var timePicker = new mui.DtPicker(timePickerOption);
 timePicker.show(function(result) {
 console.log(JSON.stringify(result));
 endTimeValue = result.h.value * 3600 + result.i.value * 60;
 endTime = result.text;
 btnEndTime.innerHTML = endTitle + result.text;
 });
 });
 */
/***************************编程修改*****************************/