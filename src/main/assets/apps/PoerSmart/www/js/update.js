/**
 * 判断应用升级模块，从url地址下载升级描述文件到本地local路径
 * yanyilin@dcloud.io
 *
 * 升级文件为JSON格式数据，如下：
 {
	"appid":"HelloH5",
 "iOS":{
 "version":"iOS新版本号，如：1.0.0",
 "note":"iOS新版本描述信息，多行使用\n分割",
 "url":"Appstore路径，如：itms-apps://itunes.apple.com/cn/app/hello-h5+/id682211190?l=zh&mt=8"
 },
 "Android":{
 "version":"Android新版本号，如：1.0.1",
 "note":"Android新版本描述信息，多行使用\n分割",
 "url":"apk文件下载地址，如：http://www.dcloud.io/helloh5p/HelloH5.apk"
 }
 }
 *
 */
(function(w) {
	var server = "http://open.poersmart.com:8012/update_file/update.json", //获取升级描述文件服务器地址
		localDir = "update",
		localFile = "update.json", //本地保存升级描述目录和文件名
		keyUpdate = "updateCheck", //取消升级键名
		keyAbort = "updateAbort", //忽略版本键名
		checkInterval = 0, //升级检查间隔，单位为ms,7天为7*24*60*60*1000=604800000, 如果每次启动需要检查设置值为0
		dir = null;
	get_update_file_time = 0;
	/**
	 * 准备升级操作
	 * 创建升级文件保存目录
	 */
	function initUpdate() {
		//console.log("init update");
		plus.logger.consoleLog("init update");
		// 打开doc根目录
		plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
			fs.root.getDirectory(localDir, {
				create: true
			}, function(entry) {
				plus.logger.consoleLog("getDirectory Success");
				dir = entry;
				plus.logger.consoleLog("dir");
				checkUpdate();
			}, function(e) {
				console.log("准备升级操作，打开update目录失败：" + e.message);
			});
		}, function(e) {
			console.log("准备升级操作，打开doc目录失败：" + e.message);
		});
	}

	/**
	 * 检测程序升级
	 */
	function checkUpdate() {
		//console.log("check update");

		// 判断升级检测是否过期
		/*
     var lastcheck = plus.storage.getItem( keyUpdate );
     if ( lastcheck ) {
     var dc = parseInt( lastcheck );
     var dn = (new Date()).getTime();
     if ( dn-dc < checkInterval ) {	// 未超过上次升级检测间隔，不需要进行升级检查
     return;
     }
     // 取消已过期，删除取消标记
     plus.storage.removeItem( keyUpdate );
     }
     */
		plus.logger.consoleLog("checkUpdate");
		// 读取本地升级文件
		dir.getFile(localFile, {
			create: false
		}, function(fentry) {
			plus.logger.consoleLog("get file");
			console.log("get file");
			fentry.file(function(file) {
				plus.logger.consoleLog("getFile Success");
				var reader = new plus.io.FileReader();
				reader.onloadend = function(e) {
					plus.logger.consoleLog("File Loadend");
					fentry.remove();
					var data = null;
					try {
						data = JSON.parse(e.target.result);
					} catch (e) {
						plus.logger.consoleLog("读取本地审计文件，数据格式错误");
						console.log("读取本地升级文件，数据格式错误！");
						return;
					}
					checkUpdateData(data);
				}
				plus.logger.consoleLog("readAsText");
				plus.logger.consoleLog(file);
				//                            reader.readAsText(file, "UTF-8");
			}, function(e) {
				console.log("读取本地升级文件，获取文件对象失败：" + e.message);
				fentry.remove();
			});
		}, function(e) {
			plus.logger.consoleLog("get file error");
			console.log("get file error");
			// 失败表示文件不存在，从服务器获取升级数据
			getUpdateData();
		});
	}

	/**
	 * 检查升级数据
	 */
	function checkUpdateData(j) {
		//console.log("check update data");
		//console.log(JSON.stringify(j));
		plus.logger.consoleLog("checkUpdateData");
		plus.logger.consoleLog(JSON.stringify(j));

		var curVer = plus.runtime.version,
			inf = j[plus.os.name];
		if (inf) {
			var srvVer = inf.version;
			// 判断是否存在忽略版本号
			var vabort = plus.storage.getItem(keyAbort);
			if (vabort && srvVer == vabort) {
				// 忽略此版本
				return;
			}
			// 判断是否需要升级
			if (compareVersion(curVer, srvVer)) {
				if (mui.os.ios) {
					poer_public.alert(poer_language.label_update_tip(language));
				} else {
					// 提示用户是否升级
					plus.nativeUI.confirm(inf.note, function(i) {
						if (0 == i.index) {
							plus.poerDownload.downloadFile(url, "PoerSmart.apk", language);
//							document.getElementById("label_submit").innerHTML = poer_language.label_download_file(language);
//							poer_public.progress_start();
//							DownLoadFile(inf.url);
							//plus.runtime.openURL( inf.url );
						} else {
							plus.storage.setItem(keyUpdate, (new Date()).getTime().toString());
						}
					}, "App " + poer_language.label_update_now(language) + "?", [poer_language.label_update_now(language), poer_language.label_cancel(language)]);
				}
			}
		}
	}

	//下载升级文件
	function DownLoadFile(url) {
		var d = plus.downloader.createDownload(url, {}, function(f, s) {
			//poer_public.progress_stop();
			document.getElementById("label_submit").innerHTML = poer_language.label_install(language);
			plus.runtime.install(f.filename, {
				force: true
			}, function() {
				//完成更新向服务器进行通知
				poer_public.progress_stop();
				document.getElementById("label_submit").innerHTML = poer_language.label_submit(language);
				poer_public.alert(poer_language.label_install_success(language));
				//alert("Update finished, reboot now!");
				//FinishUpdate();
				plus.runtime.restart();
			}, function(err) {
				poer_public.progress_stop();
				document.getElementById("label_submit").innerHTML = poer_language.label_submit(language);
				poer_public.alert(poer_language.label_install_failed(language) + ":" + JSON.stringify(err));
				//mui.toast("install failed");
			});
		}, function() {
			poer_public.progress_stop();
			document.getElementById("label_submit").innerHTML = poer_language.label_submit(language);
			poer_public.alert(poer_language.label_download_failed(language));
			//MessageBox("download failed", function() {});
		});

		d.start();
	}

	/**
	 * 从服务器获取升级数据
	 */
	function getUpdateData() {
		var xhr = new plus.net.XMLHttpRequest();
		xhr.onreadystatechange = function() {
			switch (xhr.readyState) {
				case 4:
					if (xhr.status == 200) {
						// 保存到本地文件中
						dir.getFile(localFile, {
							create: true
						}, function(fentry) {
							fentry.createWriter(function(writer) {
								writer.onerror = function() {
									console.log("获取升级数据，保存文件失败！");
								}
								writer.write(xhr.responseText);
								//console.log("lu");
								if (get_update_file_time > 0) { //只取一次
									return;
								}
								get_update_file_time++;
								checkUpdate();
							}, function(e) {
								console.log("获取升级数据，创建写文件对象失败：" + e.message);
							});
						}, function(e) {
							console.log("获取升级数据，打开保存文件失败：" + e.message);
						});
					} else {
						console.log("获取升级数据，联网请求失败：" + xhr.status);
					}
					break;
				default:
					break;
			}
		}
		xhr.open("GET", server);
		xhr.send();
	}

	/**
	 * 比较版本大小，如果新版本nv大于旧版本ov则返回true，否则返回false
	 * @param {String} ov
	 * @param {String} nv
	 * @return {Boolean} 
	 */
	function compareVersion(ov, nv) {
		if (!ov || !nv || ov == "" || nv == "") {
			return false;
		}
		var b = false,
			ova = ov.split(".", 4),
			nva = nv.split(".", 4);
		for (var i = 0; i < ova.length && i < nva.length; i++) {
			var so = ova[i],
				no = parseInt(so),
				sn = nva[i],
				nn = parseInt(sn);
			if (nn > no || sn.length > so.length) {
				return true;
			} else if (nn < no) {
				return false;
			}
		}
		if (nva.length > ova.length && 0 == nv.indexOf(ov)) {
			return true;
		}
	}

	if (w.plus) {
		initUpdate();
	} else {
		document.addEventListener("plusready", initUpdate, false);
	}

})(window);