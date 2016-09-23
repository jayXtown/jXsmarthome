function createElement(alermInfo) {
	var li = document.createElement("li");
	li.className = "mui-table-view-cell";
	var div = document.createElement("div");
	div.className = "mui-table";
	var contentDiv = document.createElement("div");
	contentDiv.className = "mui-table-cell mui-col-xs-10";

	// 标题
	var alermTitle = document.createElement("h4");
	alermTitle.className = "mui-ellipsis";
	alermTitle.innerHTML = alermInfo.title;
	contentDiv.appendChild(alermTitle);

	// 子标题
	var alermSubTitle = document.createElement("h5");
	contentDiv.appendChild(alermSubTitle);

	// 消息内容
	var alermContent = document.createElement("p");
	alermContent.className = "mui-h6 mui-ellipsis";
	alermContent.innerHTML = alermInfo.message;
	contentDiv.appendChild(alermContent);
	div.appendChild(contentDiv);

	// 消息时间
	var timeDiv = document.createElement("div");
	var alermTime = document.createElement("span");
	timeDiv.appendChild(alermTime);
	div.appendChild(alermTime);
	li.appendChild(div);
	li.addEventListener("tap", function() {
		poer_function.setLocalStorage("event_id", alermInfo.eventid);
		poer_public.openWindow("alerm_detail.html", "alert_detail");
	})
	return li;
}