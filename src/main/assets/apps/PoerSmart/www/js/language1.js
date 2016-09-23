/**
 * 语言
 **/
(function($, owner) {
	var LANG_EN = "English"; // English
	var LANG_CN = "Chinese"; // 简体中文
	var LANG_UKR = "Ukrainian"; // 乌克兰语
	var LANG_FRA = "Franch"; // 法语
	var LANG_ESP = "Spanish"; // 西班牙
	var LANG_RUS = "Russain"; // 俄语
	var LANG_BLR = "Belarusian"; // 白俄罗斯
	var LANG_ROM = "Romanian"; // 罗马尼亚

	owner.lang_options = {
		English: "English",
		Chinese: "简体中文",
		Ukrainian: "",
		Franch: "",
		Spanish: "",
		Russain: "Pусский",
//		Russain: "",
		Belarusian: "",
		Romanian: "Romana"
	};

	//Save
	owner.label_save = function(language) {
		switch (language) {
			case LANG_EN:
				return "Save";
			case LANG_CN:
				return "保存";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Сохранить";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Salveaza";
			default:
				return "Save";
		}
	}

	//Refresh
	owner.label_refresh = function(language) {
			switch (language) {
				case LANG_EN:
					return "Refresh";
				case LANG_CN:
					return "刷新";
				case LANG_UKR:
					return "";
				case LANG_FRA:
					return "";
				case LANG_ESP:
					return "";
				case LANG_RUS:
					return "Повтор";
				case LANG_BLR:
					return "";
				case LANG_ROM:
					return "Reincarca";
				default:
					return "Refresh";
			}
	}

	//add
	owner.label_add = function(language) {
			switch (language) {
				case LANG_EN:
					return "Add";
				case LANG_CN:
					return "增加";
				case LANG_UKR:
					return "";
				case LANG_FRA:
					return "";
				case LANG_ESP:
					return "";
				case LANG_RUS:
					return "Добавить";
				case LANG_BLR:
					return "";
				case LANG_ROM:
					return "Adauga";
				default:
					return "Add";
			}
	}

	//copy
	owner.label_copy = function(language) {
		switch (language) {
			case LANG_EN:
				return "Copy";
			case LANG_CN:
				return "拷贝";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Копировать";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Copiaza";
			default:
				return "Copy";
		}
	}

	//submit
	owner.label_submit = function(language) {
		switch (language) {
			case LANG_EN:
				return "Submit";
			case LANG_CN:
				return "提交";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Отправить";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Transmite";
			default:
				return "Submit";
		}
	}

	//Cancel
	owner.label_cancel = function(language) {
		switch (language) {
			case LANG_EN:
				return "Cancel";
			case LANG_CN:
				return "取消";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Отмена";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Anuleaza";
			default:
				return "Cancel";
		}
	}

	//更新成功
	owner.label_update_success = function(language) {
		switch (language) {
			case LANG_EN:
				return "Update success";
			case LANG_CN:
				return "更新成功";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Обновлено";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Actualizare cu success";
			default:
				return "Update success";
		}
	}

	//更新失败
	owner.label_update_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Update failed";
			case LANG_CN:
				return "更新失败";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка обновления";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Actualizare esuata";
			default:
				return "Update failed";
		}
	}

	//设置更新中
	owner.label_set_updating = function(language) {
		switch (language) {
			case LANG_EN:
				return "Settings is updating";
			case LANG_CN:
				return "设置更新中";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Настройки обновлены";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Setari in curs de actualizare";
			default:
				return "Settings is updating";
		}
	}

	//更新中
	owner.label_updating = function(language) {
		switch (language) {
			case LANG_EN:
				return "Updating";
			case LANG_CN:
				return "更新中";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Обновляется";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "In curs de actualizare";
			default:
				return "Updating";
		}
	}

	//确认
	owner.label_confirm = function(language) {
		switch (language) {
			case LANG_EN:
				return "Confirm";
			case LANG_CN:
				return "确认";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Подтвердить";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Confirm";
			default:
				return "Confirm";
		}
	}

	//Yes
	owner.label_yes = function(language) {
		switch (language) {
			case LANG_EN:
				return "Yes";
			case LANG_CN:
				return "是";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Да";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Da";
			default:
				return "Yes";
		}
	}

	//No
	owner.label_no = function(language) {
		switch (language) {
			case LANG_EN:
				return "No";
			case LANG_CN:
				return "否";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Нет";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Nu";
			default:
				return "No";
		}
	}

	//提醒
	owner.label_tip = function(language) {
		switch (language) {
			case LANG_EN:
				return "Tip";
			case LANG_CN:
				return "提醒";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Тип";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Sfat";
			default:
				return "Tip";
		}
	}

	//Ok
	owner.label_ok = function(language) {
		switch (language) {
			case LANG_EN:
				return "Ok";
			case LANG_CN:
				return "好的";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ок";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Ok";
			default:
				return "Ok";
		}
	}

	//没有改变
	owner.label_no_change = function(language) {
		switch (language) {
			case LANG_EN:
				return "No change";
			case LANG_CN:
				return "没有修改";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Не менять";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Nemodificat";
			default:
				return "No change";
		}
	}

	//再按一次退出应用
	owner.label_click_to_exit = function(language) {
		switch (language) {
			case LANG_EN:
				return "Click again, then exit app";
			case LANG_CN:
				return "再按一次退出应用";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Нажмите еще раз для выхода из приложения";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Faceti clic din nou apoi iesiti din aplicatie";
			default:
				return "Click again, then exit app";
		}
	}

	//设备类型
	owner.label_devicetype_array = function(language) {
		switch (language) {
			case LANG_EN:
				return ['Thermostat', 'Security'];
			case LANG_CN:
				return ['温控设备', '安防设备'];
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return ['Температура','Безопастность'];
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return ['Reglare temperatura','Instalatie gaz'];
			default:
				return ['Thermostat', 'Security'];
		}
	}

	//邮箱
	owner.label_email = function(language) {
		switch (language) {
			case LANG_EN:
				return "Email";
			case LANG_CN:
				return "邮箱";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Email";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "e-mail";
			default:
				return "Email";
		}
	}

	//邮箱为空
	owner.label_email_empty = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please enter email";
			case LANG_CN:
				return "请输入邮箱";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пожалуйста, введите Email";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Introduceti adresa de e-mail";
			default:
				return "Please enter email";
		}
	}

	//邮箱长度太短
	owner.label_email_too_short = function(language) {
		switch (language) {
			case LANG_EN:
				return "Email is too short! The valid length is 5~50";
			case LANG_CN:
				return "邮箱长度太短！有效长度是5~50";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Email слишком короткий. 5-50 символов";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Adresa de e-mail este invalida (lungimea acceptata intre 5 si 50 caractere)!";
			default:
				return "Email is too short! The valid length is 5~30";
		}
	}

	//邮箱长度太长
	owner.label_email_too_long = function(language) {
		switch (language) {
			case LANG_EN:
				return "Email is too long! The valid length is 5~50";
			case LANG_CN:
				return "邮箱长度太长！有效长度是5~50";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Email слишком длинный. 5-50 символов";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Adresa de e-mail este invalida (lungimea acceptata intre 5 si 50 caractere)!";				
			default:
				return "Email is too long! The valid length is 5~50";
		}
	}

	//密码
	owner.label_password = function(language) {
		switch (language) {
			case LANG_EN:
				return "Password";
			case LANG_CN:
				return "密码";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пароль";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Parola";
			default:
				return "Password";
		}
	}

	//密码为空
	owner.label_password_empty = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please enter password";
			case LANG_CN:
				return "请输入密码";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пожалуйста, введите пароль";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Va rugam sa introduceti parola";
			default:
				return "Please enter password";
		}
	}

	//密码太短
	owner.label_password_too_short = function(language) {
		switch (language) {
			case LANG_EN:
				return "Password is too short! The valid length is 3~15";
			case LANG_CN:
				return "密码长度太短！有效长度是3~15";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пароль слишком короткий. 3-15 символов";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Parola aleasa este invalida (lungimea acceptata intre 3 si 15 caractere)!";
			default:
				return "Password is too short! The valid length is 3~15";
		}
	}

	//密码太长
	owner.label_password_too_long = function(language) {
		switch (language) {
			case LANG_EN:
				return "Password is too long! The valid length is 3~15";
			case LANG_CN:
				return "密码长度太长！有效长度是3~15";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пароль слишком длинный. 5-15 символов";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Parola aleasa este invalida (lungimea acceptata intre 3 si 15 caractere)!";
			default:
				return "Password is too long! The valid length is 3~15";
		}
	}

	//新密码
	owner.label_new_password = function(language) {
		switch (language) {
			case LANG_EN:
				return "New password";
			case LANG_CN:
				return "新密码";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Новый пароль";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Parola noua";
			default:
				return "New password";
		}
	}

	//新密码
	owner.label_new_password_empty = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please enter new password";
			case LANG_CN:
				return "请输入新密码";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пожалуйста, введите новый пароль";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Va rugam introduceti noua parola";
			default:
				return "Please enter new password";
		}
	}

	//新密码太短
	owner.label_newpassword_too_short = function(language) {
		switch (language) {
			case LANG_EN:
				return "New password is too short! The valid length is 3~10";
			case LANG_CN:
				return "新密码长度太短！有效长度是3~10";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пароль слишком короткий. 5-15 символов";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Parola aleasa este invalida (lungimea acceptata intre 3 si 15 caractere)!";
			default:
				return "New assword is too short! The valid length is 3~10";
		}
	}

	//新密码太长
	owner.label_newpassword_too_long = function(language) {
		switch (language) {
			case LANG_EN:
				return "New password is too long! The valid length is 3~10";
			case LANG_CN:
				return "新密码长度太长！有效长度是3~10";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пароль слишком длинный. 5-15 символов";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Parola aleasa este invalida (lungimea acceptata intre 3 si 15 caractere)!";
			default:
				return "New password is too long! The valid length is 3~10";
		}
	}

	//确认密码
	owner.label_confirm_password = function(language) {
		switch (language) {
			case LANG_EN:
				return "Confirm";
			case LANG_CN:
				return "确认密码";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Подтвердить";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Confirm";
			default:
				return "Confirm";
		}
	}

	//确认密码为空
	owner.label_confirm_password_empty = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please enter confirm password";
			case LANG_CN:
				return "请输入确认密码";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пожалуйста, подтвердите пароль";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Va rugam sa confirmati parola";
			default:
				return "Please enter confirm password";
		}
	}

	//密码与确认密码不一致
	owner.label_confirm_password_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "Password is different from confirm password";
			case LANG_CN:
				return "密码与确认密码不一致";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Неверный пароль";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Parola introdusa este diferita de cea confirmata";
			default:
				return "Password is different from confirm password";
		}
	}

	//新密码与确认密码不一致
	owner.label_new_confirm_password_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "New password is different from confirm password";
			case LANG_CN:
				return "新密码与确认密码不一致";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Новый пароль должен отличаться";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Parola introdusa este diferita de cea confirmata";
			default:
				return "New password is different from confirm password";
		}
	}

	//语言
	owner.label_language = function(language) {
		switch (language) {
			case LANG_EN:
				return "Language";
			case LANG_CN:
				return "语言";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Язык";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Selectati limba";
			default:
				return "Language";
		}
	}

	//英语
	owner.label_english = function(language) {
		switch (language) {
			case LANG_EN:
				return "English";
			case LANG_CN:
				return "英语";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Английский";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "English";
			default:
				return "English";
		}
	}

	//中文
	owner.label_chinese = function(language) {
		switch (language) {
			case LANG_EN:
				return "英文";
			case LANG_CN:
				return "中文";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Китайский";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "英文";
			default:
				return "英文";
		}
	}

	//登录
	owner.label_login = function(language) {
		switch (language) {
			case LANG_EN:
				return "Login";
			case LANG_CN:
				return "登录";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Имя пользователя";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Login";
			default:
				return "Login";
		}
	}

	//登录
	owner.label_demo_login = function(language) {
		switch (language) {
			case LANG_EN:
				return "Demo Login";
			case LANG_CN:
				return "演示登录";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Demo Login";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Demo Login";
			default:
				return "Demo Login";
		}
	}

	//注册
	owner.label_register = function(language) {
		switch (language) {
			case LANG_EN:
				return "Register";
			case LANG_CN:
				return "注册";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Регистрация";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Inregistrare";
			default:
				return "Register";
		}
	}

	//注册成功
	owner.label_register_success = function(language) {
		switch (language) {
			case LANG_EN:
				return "Register success";
			case LANG_CN:
				return "注册成功";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Зарегистрирован";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Inregistrare reusita";
			default:
				return "Register success";
		}
	}

	//注册失败
	owner.label_register_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Register failed";
			case LANG_CN:
				return "注册失败";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка регистрации";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Inregistrare esuata";
			default:
				return "Register failed";
		}
	}

	//忘记密码
	owner.label_forget_password = function(language) {
		switch (language) {
			case LANG_EN:
				return "Forget Password";
			case LANG_CN:
				return "忘记密码";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Забыли пароль?";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Am uitat parola";
			default:
				return "Forget Password";
		}
	}

	//获取locate失败
	owner.label_get_locate_fail = function(language) {
		switch (language) {
			case LANG_EN:
				return "Get locate list failed";
			case LANG_CN:
				return "获取区域信息失败";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Nu s-a reusit obtinerea informatiilor despre zona";
			default:
				return "Get locate list failed";
		}
	}

	//locate信息错误
	owner.label_locate_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "Locate info is error";
			case LANG_CN:
				return "区域信息有误";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка положения";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Informatia despre zona este incorecta";
			default:
				return "Locate info is error";
		}
	}

	//登录失败
	owner.label_login_fail = function(language) {
		switch (language) {
			case LANG_EN:
				return "Login failed";
			case LANG_CN:
				return "登录失败";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка имени пользователя";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Logare esuata";
			default:
				return "Login failed";
		}
	}

	//home模式
	owner.label_home = function(language) {
		switch (language) {
			case LANG_EN:
				return "Home";
			case LANG_CN:
				return "在家";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Дома";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Acasa";
			default:
				return "Home";
		}
	}

	//away模式
	owner.label_away = function(language) {
		switch (language) {
			case LANG_EN:
				return "Away";
			case LANG_CN:
				return "离开";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Не дома";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Plecat";
			default:
				return "Away";
		}
	}

	//holiday模式
	owner.label_holiday = function(language) {
		switch (language) {
			case LANG_EN:
				return "Holiday";
			case LANG_CN:
				return "假日";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Отпуск";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "In vancanta";
			default:
				return "Holiday";
		}
	}

	//off模式
	owner.label_off = function(language) {
		switch (language) {
			case LANG_EN:
				return "Off";
			case LANG_CN:
				return "关闭";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Выкл.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Inchis";
			default:
				return "Off";
		}
	}

	//override模式
	owner.label_override = function(language) {
		switch (language) {
			case LANG_EN:
				return "Override";
			case LANG_CN:
				return "越控";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Управление";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Treci temporar peste setarile salvate";
			default:
				return "Override";
		}
	}

	//gateway offline模式
	owner.label_gateway_offline = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway offline";
			case LANG_CN:
				return "网关离线";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Шлюз отключен";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Gateway offline";
			default:
				return "Gateway offline";
		}
	}

	//offline模式
	owner.label_offline = function(language) {
		switch (language) {
			case LANG_EN:
				return "Offline";
			case LANG_CN:
				return "离线";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Отключен";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Offline";
			default:
				return "Offline";
		}
	}

	//湿度
	owner.label_humidity = function(language) {
		switch (language) {
			case LANG_EN:
				return "Humidity";
			case LANG_CN:
				return "湿度";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Влажность";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Umiditate relativa";
			default:
				return "Humidity";
		}
	}

	//改变工作模式为
	owner.label_change_workmode_to = function(language) {
		switch (language) {
			case LANG_EN:
				return "Change work mode to";
			case LANG_CN:
				return "改变工作模式为";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Изменить режим на:";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Schimba modul de lucru cu";
			default:
				return "Change work mode to";
		}
	}

	//Account info
	owner.label_account_info = function(language) {
		switch (language) {
			case LANG_EN:
				return "Account Info";
			case LANG_CN:
				return "账号信息";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Личная информация";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Informatii cont";
			default:
				return "Account Info";
		}
	}

	//Name
	owner.label_name = function(language) {
		switch (language) {
			case LANG_EN:
				return "Name";
			case LANG_CN:
				return "名称";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Имя";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Nume";
			default:
				return "Name";
		}
	}

	//Name empty
	owner.label_name_empty = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please enter name";
			case LANG_CN:
				return "请输入名称";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пожалуйста, введите Имя";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Va rugam introduceti numele";
			default:
				return "Please enter name";
		}
	}

	//名称太短
	owner.label_name_too_short = function(language) {
		switch (language) {
			case LANG_EN:
				return "Name is too short! The valid length is 3~15";
			case LANG_CN:
				return "名称长度太短！有效长度是3~15";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Имя слишком короткое. 3-15 символов.";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Numele este invalid (lungimea acceptata intre 3 si 15 caractere)!";
			default:
				return "Name is too short! The valid length is 3~15";
		}
	}

	//名称太长
	owner.label_name_too_long = function(language) {
		switch (language) {
			case LANG_EN:
				return "Name is too long! The valid length is 3~15";
			case LANG_CN:
				return "名称长度太长！有效长度是3~15";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Имя слишком длинное. 3-15 символов";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Numele este invalid (lungimea acceptata intre 3 si 15 caractere)!";
			default:
				return "Name is too long! The valid length is 3~15";
		}
	}

	//Country
	owner.label_country = function(language) {
		switch (language) {
			case LANG_EN:
				return "Country";
			case LANG_CN:
				return "国家";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Страана";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Tara";
			default:
				return "Country";
		}
	}

	//postcode
	owner.label_postcode = function(language) {
		switch (language) {
			case LANG_EN:
				return "Postcode";
			case LANG_CN:
				return "邮编";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Индекс";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Cod postal";
			default:
				return "Postcode";
		}
	}

	//postcode空
	owner.label_postcode_empty = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please enter postcode";
			case LANG_CN:
				return "请输入邮编";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Введите почтовый индекс";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Va rugam introduceti codul postal";
			default:
				return "Please enter postcode";
		}
	}

	//邮编太短
	owner.label_postcode_too_short = function(language) {
		switch (language) {
			case LANG_EN:
				return "Postcode is too short! The valid length is 5~10";
			case LANG_CN:
				return "邮编长度太短！有效长度是5~10";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Индекс слишком короткий. 5-10 символов";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Codul postal este invalid (lungimea acceptata de 6 cifre)!";
			default:
				return "Postcode is too short! The valid length is 5~10";
		}
	}

	//邮编太长
	owner.label_postcode_too_long = function(language) {
		switch (language) {
			case LANG_EN:
				return "Postcode is too long! The valid length is 5~10";
			case LANG_CN:
				return "邮编长度太长！有效长度是5~10";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Индекс слишком длинный. 5~10 символов";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Codul postal este invalid (lungimea acceptata de 6 cifre)!";
			default:
				return "Postcode is too long! The valid length is 5~10";
		}
	}

	//change password
	owner.label_change_password = function(language) {
		switch (language) {
			case LANG_EN:
				return "Change password";
			case LANG_CN:
				return "修改密码";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Изменить пароль";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Schimbare parola";
			default:
				return "Change password";
		}
	}

	//logout
	owner.label_logout = function(language) {
		switch (language) {
			case LANG_EN:
				return "Logout";
			case LANG_CN:
				return "退出登录";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Выйти";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Iesire din aplicatie";
			default:
				return "Logout";
		}
	}

	//home setup
	owner.label_home_setup = function(language) {
		switch (language) {
			case LANG_EN:
				return "Home Setup";
			case LANG_CN:
				return "设置";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Информация о доме";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Setare mod Acasa";
			default:
				return "Home Setup";
		}
	}

	//zone setup
	owner.label_zone_setup = function(language) {
		switch (language) {
			case LANG_EN:
				return "Zone Setting";
			case LANG_CN:
				return "区域设置";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Настройка часового пояса";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Setare Zona";
			default:
				return "Zone Setting";
		}
	}

	//gateway setup
	owner.label_gateway_setup = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway Setup";
			case LANG_CN:
				return "网关设置";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Настройка шлюза";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Setare Gateway";
			default:
				return "Gateway Setup";
		}
	}

	//sn
	owner.label_sn = function(language) {
		switch (language) {
			case LANG_EN:
				return "SN";
			case LANG_CN:
				return "序列号";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Сер.№";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Serie";
			default:
				return "SN";
		}
	}

	//软件
	owner.label_software = function(language) {
		switch (language) {
			case LANG_EN:
				return "Softversion";
			case LANG_CN:
				return "软件版本";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Версия ПО";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Versiune software";
			default:
				return "Softversion";
		}
	}

	//硬件
	owner.label_hardware = function(language) {
		switch (language) {
			case LANG_EN:
				return "Hardversion";
			case LANG_CN:
				return "硬件版本";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Версия оборудования";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Versiune hardware";
			default:
				return "Hardversion";
		}
	}

	//时区
	owner.label_time_zone = function(language) {
		switch (language) {
			case LANG_EN:
				return "TimeZone";
			case LANG_CN:
				return "时区";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Часовой пояс";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Fus orar";
			default:
				return "TimeZone";
		}
	}

	//device setup
	owner.label_device_setup = function(language) {
		switch (language) {
			case LANG_EN:
				return "Device Setup";
			case LANG_CN:
				return "设备设置";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Настройка устройства";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Setare echipament";
			default:
				return "Device Setup";
		}
	}

	//温控设备
	owner.label_thermostat = function(language) {
		switch (language) {
			case LANG_EN:
				return "Thermostat";
			case LANG_CN:
				return "温控设备";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Терморегулятор";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Termostat";
			default:
				return "Thermostat";
		}
	}

	//温度设置
	owner.label_temperature_set = function(language) {
		switch (language) {
			case LANG_EN:
				return "Temperature Setup";
			case LANG_CN:
				return "温度设置";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Настройка температуры";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Setare temperatura";
			default:
				return "Temperature Setup";
		}
	}

	//Away温度
	owner.label_away_temperature = function(language) {
		switch (language) {
			case LANG_EN:
				return "Away Temperature";
			case LANG_CN:
				return "离开温度";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Нет дома Температура";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Temperatura in modul Plecat";
			default:
				return "Away Temperature";
		}
	}

	//Away温度简写
	owner.label_away_temp_simple = function(language) {
		switch (language) {
			case LANG_EN:
				return "Away Temp";
			case LANG_CN:
				return "离开温度";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Нет дома темп.";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Temperatura in modul Plecat";
			default:
				return "Away Temp";
		}
	}

	//Holiday温度
	owner.label_holiday_temperature = function(language) {
		switch (language) {
			case LANG_EN:
				return "Holiday Temperature";
			case LANG_CN:
				return "假日温度";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				// return "Температура отпуск";
				return "Температура Отпуск";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Temperatura in modul Vacanta";
			default:
				return "Holiday Temperature";
		}
	}

	//Off温度
	owner.label_off_temperature = function(language) {
		switch (language) {
			case LANG_EN:
				return "Off Temperature";
			case LANG_CN:
				return "关闭温度";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "";
			case LANG_BLR:
				// return "Температура выкл.";
				return "Температура Выкл";

			case LANG_ROM:
				return "Temperatura cu sistemul oprit";
			default:
				return "Off Temperature";
		}
	}

	//Off温度简写
	owner.label_off_temp_simple = function(language) {
		switch (language) {
			case LANG_EN:
				return "Off Temp";
			case LANG_CN:
				return "关闭温度";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Выкл. темп.";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Temperatura cu sistemul oprit";
			default:
				return "Off Temp";
		}
	}

	//改变温度
	owner.label_change_temperature = function(language) {
		switch (language) {
			case LANG_EN:
				return "Change temperature";
			case LANG_CN:
				return "改变温度";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Изменение температуры";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Modifica temperatura";
			default:
				return "Change temperature";
		}
	}

	//温度单位设置
	owner.label_tempunit_set = function(language) {
		switch (language) {
			case LANG_EN:
				return "Temperature Unit Setup";
			case LANG_CN:
				return "温度单位设置";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Установки температуры";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Setarea temperaturii";
			default:
				return "Temperature Unit Setup";
		}
	}

	//摄氏度
	owner.label_centigrade = function(language) {
		switch (language) {
			case LANG_EN:
				return "Centigrade";
			case LANG_CN:
				return "摄氏度";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Сельсий";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Grade Celsius";
			default:
				return "Centigrade";
		}
	}

	//华氏度
	owner.label_fahrenheit = function(language) {
		switch (language) {
			case LANG_EN:
				return "Fahrenheit";
			case LANG_CN:
				return "华氏度";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Фаренгейт";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Grade Fahrenheit";
			default:
				return "Fahrenheit";
		}
	}

	//温度单位
	owner.label_temp_unit = function(language) {
		switch (language) {
			case LANG_EN:
				return "Temp Unit";
			case LANG_CN:
				return "温度单位";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				// return "Ед. темп.";
				return "Ед.температуры";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Afisarea temperaturii in";
			default:
				return "Temp Unit";
		}
	}

	//feedback
	owner.label_feedback = function(language) {
		switch (language) {
			case LANG_EN:
				return "Feedback";
			case LANG_CN:
				return "反馈信息";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Отзывы";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Feedback";
			default:
				return "Feedback";
		}
	}

	//feedback空
	owner.label_feedback_empty = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please enter feedback info";
			case LANG_CN:
				return "请输入反馈信息";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пожалуйста, введите отзыв";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Va rugam introduceti informatiile de feedback";
			default:
				return "Please enter feedback info";
		}
	}

	//feedback太短
	owner.label_feedback_too_short = function(language) {
		switch (language) {
			case LANG_EN:
				return "Feedback is too short! The valid length is 10~100";
			case LANG_CN:
				return "内容太短！有效长度在10~100";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Отзыв слишком короткий! Допустимая длинна 10-100";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Feedback-ul este invalid (lungimea acceptata intre 10 si 100 caractere)!";
			default:
				return "Feedback is too short! The valid length is 10~100";
		}
	}

	//feedback太长
	owner.label_feedback_too_long = function(language) {
		switch (language) {
			case LANG_EN:
				return "Feedback is too long! The valid length is 10~100";
			case LANG_CN:
				return "内容太长！有效长度在10~100";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Отзыв слишком длинный! Допустимая длинна 10-100";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Feedback-ul este invalid (lungimea acceptata intre 10 si 100 caractere)!";
			default:
				return "Feedback is too long! The valid length is 10~100";
		}
	}

	//device setup
	owner.label_aboutus = function(language) {
		switch (language) {
			case LANG_EN:
				return "About us";
			case LANG_CN:
				return "关于我们";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "О нас";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Despre noi";
			default:
				return "About us";
		}
	}

	//smart home
	owner.label_smart_home = function(language) {
		switch (language) {
			case LANG_EN:
				return "Smart Home";
			case LANG_CN:
				return "智能家居";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Умный дом";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Case inteligente";
			default:
				return "Smart Home";
		}
	}

	//Privacy Policy
	owner.label_privacy_policy = function(language) {
		switch (language) {
			case LANG_EN:
				return "Privacy Policy";
			case LANG_CN:
				return "隐私政策";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Политика конфиденциальности";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Politici de confidentialitate";
			default:
				return "Privacy Policy";
		}
	}

	//Privacy Policy
	owner.label_copyright = function(language) {
		switch (language) {
			case LANG_EN:
				return "Copyright ©2015 POER All Rights Reserved.";
			case LANG_CN:
				return "版权归POER所有";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "©2015 POER, Все права защищены";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Copyright ©2015 POER. All Rights Reserved.";
			default:
				return "Copyright ©2015 POER All Rights Reserved.";
		}
	}

	//Privacy Policy
	owner.label_version = function(language) {
		switch (language) {
			case LANG_EN:
				return "Ver";
			case LANG_CN:
				return "版本";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Версия";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Versiune";
			default:
				return "Ver";
		}
	}

	//忘记密码提交成功
	owner.label_forget_password_success = function(language) {
		switch (language) {
			case LANG_EN:
				return "Submit success, please check your email";
			case LANG_CN:
				return "提交成功，请查收你的邮件";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Отправлено. Проверьте свой email";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Trimitere efectuata cu succes, va rugam sa va verificati e-mailul";
			default:
				return "Submit success, please check your email";
		}
	}

	//忘记密码提交失败
	owner.label_forget_password_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Submit failed";
			case LANG_CN:
				return "提交失败";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Передача не удалась";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Trimitere esuata";
			default:
				return "Submit failed";
		}
	}

	//current
	owner.label_current = function(language) {
		switch (language) {
			case LANG_EN:
				return "Current";
			case LANG_CN:
				return "当前";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Текущ.";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Valoare actuala";
			default:
				return "Current";
		}
	}

	//target
	owner.label_target = function(language) {
		switch (language) {
			case LANG_EN:
				return "Target";
			case LANG_CN:
				return "目标";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Цель";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Valoare dorita";
			default:
				return "Target";
		}
	}

	//Electricity
	owner.label_electricity = function(language) {
		switch (language) {
			case LANG_EN:
				return "Electricity";
			case LANG_CN:
				return "电量";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Электричество";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Incarcare";
			default:
				return "Electricity";
		}
	}

	//Hold until
	owner.label_holduntil = function(language) {
		switch (language) {
			case LANG_EN:
				return "Hold Until";
			case LANG_CN:
				return "持续到";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				// return "Удерживать до";
				return "Удержать до";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Mentine pana la ora";
			default:
				return "Hold Until";
		}
	}

	//Press for options
	owner.label_btn_press = function(language) {
		switch (language) {
			case LANG_EN:
				return "Press for Options";
			case LANG_CN:
				return "点击更多操作";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Нажать для настроек";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Apasa pentru optiuni";
			default:
				return "Press for Options";
		}
	}

	//Following Schedule
	owner.label_follow_schedule = function(language) {
		switch (language) {
			case LANG_EN:
				return "Following Schedule";
			case LANG_CN:
				return "按编程进行";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Programare urmatoare";
			default:
				return "Following Schedule";
		}
	}

	//Schedule
	owner.label_schedule = function(language) {
		switch (language) {
			case LANG_EN:
				return "Schedule";
			case LANG_CN:
				return "编程";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				// return "Расписание";
				return "График";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Programare";
			default:
				return "Schedule";
		}
	}

	//Copy Schedule
	owner.label_copy_schedule = function(language) {
		switch (language) {
			case LANG_EN:
				return "Schedule Copy";
			case LANG_CN:
				return "编程拷贝";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Скапировать расписание";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Copiere programare";
			default:
				return "Schedule Copy";
		}
	}

	//update Schedule
	owner.label_update_schedule = function(language) {
		switch (language) {
			case LANG_EN:
				return "Update Schedule?";
			case LANG_CN:
				return "更新编程?";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Обновить расписание?";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Update programare";
			default:
				return "Update Schedule?";
		}
	}

	//node not exist
	owner.label_node_noexist = function(language) {
		switch (language) {
			case LANG_EN:
				return "There is no this device";
			case LANG_CN:
				return "该设备不存在";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Отсутствующее устройство";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Echipament lipsa";
			default:
				return "There is no this device";
		}
	}

	//gateway not exist
	owner.label_gateway_noexist = function(language) {
		switch (language) {
			case LANG_EN:
				return "There is no this gateway";
			case LANG_CN:
				return "该网关不存在";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Отсутствующий шлюз";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Gateway lipsa";
			default:
				return "There is no this gateway";
		}
	}

	//schedule info error
	owner.label_schedule_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "Schedule info is error";
			case LANG_CN:
				return "编程信息错误";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка в расписании";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Programare eronata";
			default:
				return "Schedule info is error";
		}
	}

	//cann't override
	owner.label_cannot_override = function(language) {
		switch (language) {
			case LANG_EN:
				return "Just in override or home workmode can do override";
			case LANG_CN:
				return "只有越控和在家模式下才能进行越控";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Управление возможно только в режиме управления или в режиме домашней работы";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Controlul este posibil numai in modul de control sau de modul Acasa";
			default:
				return "Just in override or home workmode can do override";
		}
	}

	//override time error
	owner.label_override_time_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "Override time must be bigger than current time";
			case LANG_CN:
				return "越控时间必须大于当前时间";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Время управления должно быть позже текущего";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Timpul de setat trebuie sa fie mai mare decat cel prezent";
			default:
				return "Override time must be bigger than current time";
		}
	}

	//deviceinfo
	owner.label_deviceinfo = function(language) {
		switch (language) {
			case LANG_EN:
				return "Device Info";
			case LANG_CN:
				return "设备信息";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Информация об устройстве";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Info echipament";
			default:
				return "Device Info";
		}
	}

	//set location
	owner.label_set_location = function(language) {
		switch (language) {
			case LANG_EN:
				return "Location Set";
			case LANG_CN:
				return "位置设置";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ввод расположения";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Setare locatie";
			default:
				return "Location Set";
		}
	}

	//location
	owner.label_location = function(language) {
		switch (language) {
			case LANG_EN:
				return "Location";
			case LANG_CN:
				return "位置";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Расположение";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Locatie";
			default:
				return "Location";
		}
	}

	//location 空
	owner.label_location_empty = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please enter location";
			case LANG_CN:
				return "请输入位置信息";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пожалуйста введите расположение";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Va rugam introduceti locatia";
			default:
				return "Please enter location";
		}
	}

	//location长度太短
	owner.label_location_too_short = function(language) {
		switch (language) {
			case LANG_EN:
				return "Location is too short! The valid length is 3~20";
			case LANG_CN:
				return "位置信息长度太短！有效长度是3~20";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Слишком близкое расположение! Рекомендуется от 3 до 20";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Locatia este invalida (lungimea acceptata intre 35 si 20 caractere)!";
			default:
				return "Location is too short! The valid length is 3~20";
		}
	}

	//location长度太长
	owner.label_location_too_long = function(language) {
		switch (language) {
			case LANG_EN:
				return "Location is too long! The valid length is 3~20";
			case LANG_CN:
				return "位置信息长度太长！有效长度是3~20";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "";
			case LANG_BLR:
				return "Слишком далекое расположение! Рекомендуется от 3 до 20";

			case LANG_ROM:
				return "Locatia este invalida (lungimea acceptata intre 35 si 20 caractere)!";
			default:
				return "Location is too long! The valid length is 3~20";
		}
	}

	//gateway id
	owner.label_gateway = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway";
			case LANG_CN:
				return "网关";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Шлюз";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Gateway";
			default:
				return "Gateway";
		}
	}

	//battery
	owner.label_battery = function(language) {
		switch (language) {
			case LANG_EN:
				return "Battery";
			case LANG_CN:
				return "电量";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Барарея";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Incarcare baterie";
			default:
				return "Battery";
		}
	}

	//weekday
	owner.label_weekday = function(language) {
		switch (language) {
			case LANG_EN:
				return "Weekday";
			case LANG_CN:
				return "工作日";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "";
			case LANG_BLR:
				return "День недели";

			case LANG_ROM:
				return "Zi din saptamana";
			default:
				return "Weekday";
		}
	}

	//start time
	owner.label_start_time = function(language) {
		switch (language) {
			case LANG_EN:
				return "Start Time";
			case LANG_CN:
				return "开始时间";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Время начала";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Ora de inceput";
			default:
				return "Start Time";
		}
	}

	//end time
	owner.label_end_time = function(language) {
		switch (language) {
			case LANG_EN:
				return "End Time";
			case LANG_CN:
				return "结束时间";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Время окончания";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Ora de sfarsit";
			default:
				return "Enssd Time";
		}
	}

	//temperature
	owner.label_temperature = function(language) {
		switch (language) {
			case LANG_EN:
				return "Temperature";
			case LANG_CN:
				return "温度";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Температура";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Temperatura";
			default:
				return "Temperature";
		}
	}

	//start time hour error
	owner.label_starttime_hourerror = function(language) {
		switch (language) {
			case LANG_EN:
				return "The hour of start time is error! The valid range is 0~24";
			case LANG_CN:
				return "开始时间的小时数据有误!有效范围是0~24";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка! Время начала указывается от 0 до 24";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Ora este invalida! Ora trebuie sa fie intre 0 si 24!";
			default:
				return "The hour of start time is error! The valid range is 0~24";
		}
	}

	//start time minute error
	owner.label_starttime_minuteerror = function(language) {
		switch (language) {
			case LANG_EN:
				return "The minute of start time must be 0 or 30!";
			case LANG_CN:
				return "开始时间的分钟数据必须是0或30";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Минуты начала должны быть 0 или 30!";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Minutul este invalid! Minutul trebuie sa fie 0 sau 30!";
			default:
				return "The minute of start time must be 0 or 30!";
		}
	}

	//end time hour error
	owner.label_endtime_hourerror = function(language) {
		switch (language) {
			case LANG_EN:
				return "The hour of end time is error! The valid range is 0~24";
			case LANG_CN:
				return "结束时间的小时数据有误!有效范围是0~24";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка! Время окончания указывается от 0 до 24";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Ora este invalida! Ora trebuie sa fie intre 0 si 24!";
			default:
				return "The hour of end time is error! The valid range is 0~24";
		}
	}

	//end time minute error
	owner.label_endtime_minuteerror = function(language) {
		switch (language) {
			case LANG_EN:
				return "The minute of end time must be 0 or 30!";
			case LANG_CN:
				return "结束时间的分钟数据必须是0或30";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Минуты окончания должны быть 0 или 30!";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Minutul este invalid! Minutul trebuie sa fie 0 sau 30!";
			default:
				return "The minute of end time must be 0 or 30!";
		}
	}

	//end time <start time
	owner.label_start_end_time_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "End time must be bigger than start time";
			case LANG_CN:
				return "结束时间必须大于开始时间";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Время окончания должно быть позже времени начала";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Timpul de sfarsit trebuie sa fie mai mare decat cel de start";
			default:
				return "End time must be bigger than start time";
		}
	}

	//temperature error
	owner.label_temperature_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "The temperature is error! The valid range is ";
			case LANG_CN:
				return "温度错误!有效范围是";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка температуры! Разрешенный показатель:";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Temperatura este invalida! Intervalul corect este ";
			default:
				return "The temperature is error! The valid range is ";
		}
	}

	//start time too big
	owner.label_starttime_toobig = function(language) {
		switch (language) {
			case LANG_EN:
				return "Start time can not be bigger than 24:00!";
			case LANG_CN:
				return "开始时间不能大于24:00";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Время начала не может быть позже 24:00!";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Ora de inceput nu poate fi mai mare ca 24:00!";
			default:
				return "Start time can not be bigger than 24:00!";
		}
	}

	//end time too big
	owner.label_endtime_toobig = function(language) {
		switch (language) {
			case LANG_EN:
				return "End time can not be bigger than 24:00!";
			case LANG_CN:
				return "结束时间不能大于24:00";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Время окончания не может быть позже 24:00!";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Ora de sfarsit nu poate fi mai mare ca 24:00";
			default:
				return "End time can not be bigger than 24:00!";
		}
	}

	//first point error
	owner.label_firstpoint_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "The first time point must be 0:00!";
			case LANG_CN:
				return "第一个时间节点必须是0:00";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Первая возможная установка времени 0:00!";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Prima setare de temperatura trebuie sa fie de la ora 0:00!";
			default:
				return "The first time point must be 0:00!";
		}
	}

	//end point error
	owner.label_endpoint_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "The last time point must be 24:00!";
			case LANG_CN:
				return "最后一个节点必须是24:00";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Последняя возможная установка времени 24:00!";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Ultima setare de temperatura trebuie sa fie de la ora 24:00!";
			default:
				return "The last time point must be 24:00!";
		}
	}

	//point max
	owner.label_timepoint_max = function(language) {
		switch (language) {
			case LANG_EN:
				return "The max number of time points is 13!";
			case LANG_CN:
				return "最大的时间节点数量是13";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Максимально 13 установок времени";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Numarul maxim de setari intr-o zi este de 13";
			default:
				return "The max number of the points is 13!";
		}
	}

	//point max
	owner.label_firstpoint_delete = function(language) {
		switch (language) {
			case LANG_EN:
				return "The first time point can not be deleted!";
			case LANG_CN:
				return "第一个时间节点不能被删除";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Первая точка времени не может быть удалена!";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Prima setare de temperatura nu poate fi stearsa!";
			default:
				return "The first time point can not be deleted!";
		}
	}

	//周一到周日
	owner.label_weekday_array = function(language) {
		switch (language) {
			case LANG_EN:
				return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			case LANG_CN:
				return ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return ['Duminica', 'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata'];
			default:
				return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		}
	}

	//add device
	owner.label_add_device = function(language) {
		switch (language) {
			case LANG_EN:
				return "Add Device";
			case LANG_CN:
				return "添加设备";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Подключить устройство";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Adauga echipament";
			default:
				return "Add Device";
		}
	}

	//Add Thermostat
	owner.label_add_thermostat = function(language) {
		switch (language) {
			case LANG_EN:
				return "Add Thermostat";
			case LANG_CN:
				return "添加温控器";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				// return "Подключить термостат";
				return "Добавить термостат";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Adauga Termostat";
			default:
				return "Add Thermostat";
		}
	}

	//Add Gateway
	owner.label_add_gateway = function(language) {
		switch (language) {
			case LANG_EN:
				return "Add Gateway";
			case LANG_CN:
				return "添加网关";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Подключить Шлюз";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Adauga Gateway";
			default:
				return "Add Gateway";
		}
	}

	//thermostat_tip
	owner.label_thermostat_tip = function(language) {
		switch (language) {
			case LANG_EN:
				return "Scan device ID on the device's back.If any trouble on scanning, " + "you may type the ID manually.";
			case LANG_CN:
				return "扫描设备背面的设备ID号。如果扫描遇到问题，你可以手动输入ID号。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Сканируйте ID на обратной стороне устройства. Если не удается, " + "вы можете ввести ID вручную.";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Scaneaza codul de bare de pe spatele echipamentului. Daca nu reusiti," + "puteti sa introduceti codul manual";
			default:
				return "Scan device ID on the device's back.If any trouble on scanning, " + "you may type the ID manually.";
		}
	}

	//Add product success
	owner.label_addproduct_success = function(language) {
		switch (language) {
			case LANG_EN:
				return "Add device success";
			case LANG_CN:
				return "添加设备成功";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Устройство успешно добавлено";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Echipamentul a fost adaugat cu succes";
			default:
				return "Add device success";
		}
	}

	//Add product fail
	owner.label_addproduct_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Device is offline,please make sure device is in power, and closer to gateway" + ".Device will online after in power.";
			case LANG_CN:
				return "设备没有上线，请确认设备上电，并离近网关。设备上电后将自动上线。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Устройство не подключено. Пожалуйста, убедитесь, что устройство подключено к эл.питанию и достаточно близко к Шлюзу";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Echipamentul este offline. Asigurati-va ca echipamentul este conectat la priza si in apropierea Gateway-ului" +" Echipamentul va reveni online dupa conectarea la priza";
			default:
				return "Device is offline,please make sure device is in power, and closer to gateway" + ".Device will online after in power.";
		}
	}

	//mac empty
	owner.label_mac_empty = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please enter deviceid";
			case LANG_CN:
				return "请输入设备ID";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Введите ID устройства";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Va rugam introduceti codul echipamentului";
			default:
				return "Please enter deviceid";
		}
	}

	//mac error
	owner.label_mac_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "The deviceid is start with 'FCE892'";
			case LANG_CN:
				return "设备ID以'FCE892'开头";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "ID устройств начинается с 'FCE892'";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Codul echipamentului incepe cu FCE892...";
			default:
				return "The deviceid is start with 'FCE892'";
		}
	}

	//mac short
	owner.label_mac_short = function(language) {
		switch (language) {
			case LANG_EN:
				return "The length of the deviceid is 6 or 12";
			case LANG_CN:
				return "设备ID长度是6位或者12位";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Длинна ID устройства от 6 до 12 знаков";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Lungimea codului este de 6 sau 12 caractere";
			default:
				return "The length of the deviceid is 6 or 12";
		}
	}

	//check device
	owner.label_check_device = function(language) {
		switch (language) {
			case LANG_EN:
				return "Adding Device";
			case LANG_CN:
				return "添加设备中";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Добавить устройство";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Echipamentul este in curs de adaugare";
			default:
				return "Adding Device";
		}
	}

	//connect
	owner.label_connect = function(language) {
		switch (language) {
			case LANG_EN:
				return "Connect";
			case LANG_CN:
				return "连接";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Соединить";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conectare";
			default:
				return "Connect";
		}
	}

	//scan
	owner.label_scan = function(language) {
		switch (language) {
			case LANG_EN:
				return "Scan";
			case LANG_CN:
				return "扫描";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Сканмровать";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Scanare";
			default:
				return "Scan";
		}
	}

	//set
	owner.label_set = function(language) {
		switch (language) {
			case LANG_EN:
				return "Set";
			case LANG_CN:
				return "设置";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Выбор";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Setare";
			default:
				return "Set";
		}
	}

	//check
	owner.label_check = function(language) {
		switch (language) {
			case LANG_EN:
				return "Check";
			case LANG_CN:
				return "检查";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Проверка";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Verificat";
			default:
				return "Check";
		}
	}

	//status
	owner.label_status = function(language) {
		switch (language) {
			case LANG_EN:
				return "Status";
			case LANG_CN:
				return "状态";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Состояние";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Status";
			default:
				return "Status";
		}
	}

	//gateway_tip one
	owner.label_gateway_tip_one = function(language) {
		switch (language) {
			case LANG_EN:
				return "Scan device ID on the device's back. If any trouble on scanning, " + "you may type the ID manually.";
			case LANG_CN:
				return "扫描设备背面的ID。如果扫描遇到问题，你可以手动输入ID。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Сканируйте ID на обратной стороне устройства. Если не удается, " + "вы можете ввести ID вручную.";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Scaneaza codul de bare de pe spatele echipamentului. Daca nu reusiti," + "puteti sa introduceti codul manual";
			default:
				return "Scan device ID on the device's back. If any trouble on scanning, " + "you may type the ID manually.";
		}
	}

	//next step
	owner.label_next_step = function(language) {
		switch (language) {
			case LANG_EN:
				return "Next Step";
			case LANG_CN:
				return "下一步";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Далее";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Pasul urmator";
			default:
				return "Next Step";
		}
	}

	//gateway_tip two top
	owner.label_gateway_tip_two_top = function(language) {
		switch (language) {
			case LANG_EN:
				return "Be sure the gateway was installed and powered in right way.Flashing Led " + "means it is ready for Wi-Fi connection.";
			case LANG_CN:
				return "确认网关已经安装并正常上电。Led灯闪意味着网关已经准备好连接Wi-Fi了。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Убедитесь, что шлюз вставлен в розетку. Зажженный LED индикатор " + " означает готовность подключения к WiFi";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Asigurati-va ca Gateway-ul este instalat corespunzator si alimentat de la priza. Clipitul intermitent rapid al LEDului" + "inseamna ca este gata pentru conectarea Wi-Fi.";
			default:
				return "Be sure the gateway was installed and powered in right way.Flashing Led " + "means it is ready for Wi-Fi connection.";
		}
	}

	//gateway_tip two bottom
	owner.label_gateway_tip_two_bottom = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please back to App. once gateway's Wi-Fi connected.";
			case LANG_CN:
				return "一旦网关Wi-Fi连接后，请返回App。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Вернитесь в приложение, если шлюз подключен к WiFi";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Va rugam sa va reintoarceti in aplicatie dupa conectarea Gateway-ului.";
			default:
				return "Please back to App. once gateway's Wi-Fi connected.";
		}
	}

	//label connected ap
	owner.label_connected_ap = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway connected? then go for next!";
			case LANG_CN:
				return "网关已连接?下一步!";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Шлюз зарегистрирован? Перейдите далее!";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "S-a conectat Gateway-ul? Treceti la pasul urmator";
			default:
				return "Gateway connected? then go for next!";
		}
	}

	//wifi empty
	owner.label_wifi_empty = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please enter wifi";
			case LANG_CN:
				return "请输入WIFI账号";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пожалуйста, введите WiFi";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Introduceti numele retelei de Wi-Fi.";
			default:
				return "Please enter wifi";
		}
	}

	//gateway_tip three
	owner.label_gateway_tip_three = function(language) {
		switch (language) {
			case LANG_EN:
				return "Register gateway on wireless router by typing your Wi-Fi name and password.";
			case LANG_CN:
				return "输入你的Wi-Fi账号和密码，在无线路由上注册网关。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Зарегистрируйте Шлюз в сети WiFi. Введите название и пароль домашней сети WiFi";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "permiteti accesul Gateway-ului la reteaua Wi-Fi prin introducerea numelui retelei si a parolei de acces";
			default:
				return "Register gateway on wireless router by typing your Wi-Fi name and password.";
		}
	}

	//gateway_tip four
	owner.label_gateway_tip_four = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please connect route's Wi-Fi. Back to App, once route's Wi-Fi connected." + "Check gateway connection again before adding devices on App.";
			case LANG_CN:
				return "请连接路由Wi-Fi,连接后请返回App.添加设备之前需要检查网关连接状态.";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пожалуйста подключитесь к Wi-Fi. Вернитесь в приложение после подключения к Wifi." + " Проверьте подключение шлюза перед добавлением устройств";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Va rugam sa va reintoarceti in aplicatie dupa conectarea Gateway-ului." + "Verificati conectarea Gateway-ului la reteaua Wi-Fi inaintea adaugarii unui echipament nou.";
			default:
				return "Please connect route's Wi-Fi. Back to App, once route's Wi-Fi connected." + "Check gateway connection again before adding devices on App.";
		}
	}

	//connect network
	owner.label_connect_network = function(language) {
		switch (language) {
			case LANG_EN:
				return "Connect route Wi-Fi";
			case LANG_CN:
				return "连接路由Wi-Fi";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Подключить WiFi";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conectare la reteaua Wi-Fi";
			default:
				return "Connect route Wi-Fi";
		}
	}

	//label check gateway connection
	owner.label_check_gateway = function(language) {
		switch (language) {
			case LANG_EN:
				return "Check Gateway Connection";
			case LANG_CN:
				return "检查网关连接";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Проверьте соединение со Шлюзом";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Verificati conectarea Gateway-ului la reteaua Wi-Fi";
			default:
				return "Check Gateway Connection";
		}
	}

	//send wifi failed
	owner.label_sendwifi_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Send wifi info to gateway failed";
			case LANG_CN:
				return "发送wifi信息到网关失败";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка передачи данных WiFi в шлюз ";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conectarea Gateway-ului la reteaua Wi-Fi, esuata!";
			default:
				return "Send wifi info to gateway failed";
		}
	}

	//bind gateway success
	owner.label_bindgateway_success = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway registration succeed!";
			case LANG_CN:
				return "网关注册成功!";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Шлюз зарегистрирован!";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Adaugarea Gateway-ului la reteaua Wi-Fi, reusita!";
			default:
				return "Gateway registration succeed!";
		}
	}

	//bind gateway failed
	owner.label_bindgateway_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway is offline. Please move a little closer to gateway";
			case LANG_CN:
				return "网关没有上线。请靠近网关一点。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Шлюз недоступен. Уменьшите рассояние до шлюза";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conectarea la Gateway, esuata! Va rugam sa apropiati echipamentul de Gateway!";
			default:
				return "Gateway is offline. Please move a little closer to gateway";
		}
	}

	//valve_normal
	owner.label_valve_normal = function(language) {
		switch (language) {
			case LANG_EN:
				return "Valve Normal";
			case LANG_CN:
				return "阀门正常";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Клапан в порядке";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Valva este deschisa. Gazele functioneaza normal!";
			default:
				return "Valve Normal";
		}
	}

	//valve_close
	owner.label_valve_close = function(language) {
		switch (language) {
			case LANG_EN:
				return "Valve Close";
			case LANG_CN:
				return "阀门关闭";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Клапан закрыт";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Valva este inchisa! Gazele sunt oprite!";
			default:
				return "Valve Close";
		}
	}

	//danger
	owner.label_danger = function(language) {
		switch (language) {
			case LANG_EN:
				return "Danger";
			case LANG_CN:
				return "危险";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Опастность";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "ATENTIE! PERICOL DE INCENDIU!";
			default:
				return "Danger";
		}
	}

	//danger desc
	owner.label_danger_desc = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gas lesking detected!";
			case LANG_CN:
				return "探测到燃气泄漏!";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Обнаружена утеска газа!";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Au fost detectate scapari in alimentarea cu gaz!";
			default:
				return "Gas lesking detected!";
		}
	}

	//safe
	owner.label_safe = function(language) {
		switch (language) {
			case LANG_EN:
				return "Safe";
			case LANG_CN:
				return "安全";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Сохранить";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "In siguranta";
			default:
				return "Safe";
		}
	}
	owner.label_safe_desc = function(language) {
		switch (language) {
			case LANG_EN:
				return "Equipment normal!";
			case LANG_CN:
				return "设备正常！";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Устройства в порядке!";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Echipamentul in stare de functionare normala";
			default:
				return "Equipment normal!";
		}
	}
	owner.label_danger_message = function(language) {
		switch (language) {
			case LANG_EN:
				return "All Clear";
			case LANG_CN:
				return "临时解除";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Очистить все";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "A fost detectata o scapare de gaz acasa! Intrati in casa cu precautie, fara a fuma, iar inainte de a aprinde lumina sau alte echipamente electrice, ventilati bine incaperile! Pentru repornire, apelati la Serviciul de Urgente gaze naturale al furnizorului dvs de gaze";
			default:
				return "All Clear";
		}
	}
	owner.label_btn_all_clear = function(language) {
		switch (language) {
			case LANG_EN:
				return "All Clear";
			case LANG_CN:
				return "临时解除";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Очистить все";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Atentie gaze detectate";
			default:
				return "All Clear";
		}
	}
	owner.label_btn_help = function(language) {
		switch (language) {
			case LANG_EN:
				return "Help";
			case LANG_CN:
				return "求救";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Помощь";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Ajutor";
			default:
				return "Help";
		}
	}
	owner.label_data_statistics = function(language) {
		switch (language) {
			case LANG_EN:
				return "Data Statistics";
			case LANG_CN:
				return "数据统计";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Статистика";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Date statistice";
			default:
				return "Data Statistics";
		}
	}
	owner.label_alerm_record = function(language) {
		switch (language) {
			case LANG_EN:
				return "Alerm Record";
			case LANG_CN:
				return "报警记录";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Журнал ошибок";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Inregistrarile alarmelor";
			default:
				return "Alerm Record";
		}
	}
	owner.label_equipment_number = function(language) {
		switch (language) {
			case LANG_EN:
				return "Equipment Number";
			case LANG_CN:
				return "设备编号";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Номер устройства";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Numarul echipamentului";
			default:
				return "Equipment Number";
		}
	}
	owner.label_gas_name = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gas Name";
			case LANG_CN:
				return "气体名称";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Газ";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Locatia detectorului de gaz";
			default:
				return "Gas Name";
		}
	}

	//close valve confirm
	owner.label_close_valve_confirm = function(language) {
		switch (language) {
			case LANG_EN:
				return "Must manually open the valve is closed, you sure you want to close the valve?";
			case LANG_CN:
				return "阀门关闭后必须要手动打开，确定要关闭阀门吗？";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Потребуется открывать клапан вручную! Вы уверены, что хотите закрыть клапан?";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Doriti inchiderea valvei? Odata inchisa, aceasta se poate deschide doar manual!";
			default:
				return "Must manually open the valve is closed, you sure you want to close the valve?";
		}
	}

	//Update Now
	owner.label_update_now = function(language) {
		switch (language) {
			case LANG_EN:
				return "Update";
			case LANG_CN:
				return "更新";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Обновить";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Actualizare";
			default:
				return "Update";
		}
	}

	//download file
	owner.label_download_file = function(language) {
		switch (language) {
			case LANG_EN:
				return "Download File";
			case LANG_CN:
				return "下载文件";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Загрузить файл";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Descarca fisier";
			default:
				return "Download File";
		}
	}

	//download failed
	owner.label_download_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Download failed";
			case LANG_CN:
				return "下载失败";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка загрузки";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Descarcare esuata";
			default:
				return "Download failed";
		}
	}

	//install
	owner.label_install = function(language) {
		switch (language) {
			case LANG_EN:
				return "Install";
			case LANG_CN:
				return "安装";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Установить";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Instalare";
			default:
				return "Install";
		}
	}

	//install success
	owner.label_install_success = function(language) {
		switch (language) {
			case LANG_EN:
				return "Install success, reboot now!";
			case LANG_CN:
				return "更新成功，即将重启!";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Установлено, требуется перезагрузка";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Instalarea aplicatiei a reusit! Dati un restart inaintea utilizarii";
			default:
				return "Install success, reboot now!";
		}
	}

	//install failed
	owner.label_install_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Install failed";
			case LANG_CN:
				return "安装失败";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка установки";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Instalare esuata!";
			default:
				return "Install failed";
		}
	}

	//link ap failed
	owner.label_link_ap_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Connect gateway failed,please connect wifi ";
			case LANG_CN:
				return "连接网关失败,请连接wifi ";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка соединения шлюза. Пожалуйста подключитесь к wifi";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conectarea Gateway-ului a esuat! Va rugam sa conectati Wi-Fi-ul!";
			default:
				return "Connect gateway failed,please connect wifi ";
		}
	}

	//link wrong ap
	owner.label_link_wrong_ap = function(language) {
		switch (language) {
			case LANG_EN:
				return "You have linked another wifi.Please link ";
			case LANG_CN:
				return "你连接了另一个wifi。请连接";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Вы соединились с другой Wifi сетью";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "V-ati conectat la o alta retea Wi-Fi! Va rugam sa va conectati la";
			default:
				return "You have linked another wifi.Please link ";
		}
	}

	//link wifi failed
	owner.label_link_wifi_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Your phone dosn't link network.Please change your wifi.";
			case LANG_CN:
				return "你的手机不能上网。请改变你的wifi。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ваш телефон не соединен с сетью. Пожалуйста смените Wifi";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Telefonul dvs nu se conecteaza la aceasta retea. Va rugam sa schimbati reteaua";
			default:
				return "Your phone dosn't link network.Please change your wifi.";
		}
	}

	//ap link wifi error2
	owner.label_linkwifi_error2 = function(language) {
		switch (language) {
			case LANG_EN:
				return "Link wifi failed";
			case LANG_CN:
				return "连接wifi失败。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка WiFi соединения";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conectarea la reteaua Wi-Fi a esuat!";
			default:
				return "Link wifi failed";
		}
	}

	//ap link wifi error3   成功
	owner.label_linkwifi_error3 = function(language) {
		switch (language) {
			case LANG_EN:
				return "Link wifi success.";
			case LANG_CN:
				return "连接wifi成功。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка WiFi соединения";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conectarea la reteaua Wi-Fi a reusit!";
			default:
				return "Link wifi success.";
		}
	}

	//ap link wifi error4
	owner.label_linkwifi_error4 = function(language) {
		switch (language) {
			case LANG_EN:
				return "The configuration of the wifi is error";
			case LANG_CN:
				return "wifi配置信息错误。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка настроек wifi";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Configuratia de acces la reteaua Wi_Fi este eronata";
			default:
				return "The configuration of the wifi is error";
		}
	}

	//ap link wifi error6
	owner.label_linkwifi_error6 = function(language) {
		switch (language) {
			case LANG_EN:
				return "Unable to resolve DNS server";
			case LANG_CN:
				return "无法解析服务器DNS。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Невозможно подключиться к DNS серверу";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Imposibil de rezolvat DNS server";
			default:
				return "Unable to resolve DNS server";
		}
	}

	//choose weekday
	owner.label_choose_weekday = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please choose weekday";
			case LANG_CN:
				return "请选择日期。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Выберите день недели";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Va rugam sa alegeti ziua din saptamana";
			default:
				return "Please choose weekday";
		}
	}

	//deviceid
	owner.label_deviceid = function(language) {
		switch (language) {
			case LANG_EN:
				return "Device ID";
			case LANG_CN:
				return "设备ID";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "ID устройства";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Seria echipamentului";
			default:
				return "Device ID";
		}
	}

	//config
	owner.label_config = function(language) {
		switch (language) {
			case LANG_EN:
				return "Config";
			case LANG_CN:
				return "配置";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Настройка";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Configurare";
			default:
				return "Config";
		}
	}

	//check ap status
	owner.label_check_ap_status = function(language) {
		switch (language) {
			case LANG_EN:
				return "Check gateway link network status";
			case LANG_CN:
				return "检查网关联网状态";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Проверка соединения шлюза";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Verificati statusul conectarii Gateway-ului";
			default:
				return "Check gateway link network status";
		}
	}

	//check gateway status
	owner.label_check_gateway_status = function(language) {
		switch (language) {
			case LANG_EN:
				return "Check gateway back status";
			case LANG_CN:
				return "检查网关返回状态";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Проверка обратной связи со шлюзом";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Verificati statusul conectarii back a Gateway-ului";
			default:
				return "Check gateway back status";
		}
	}

	//check gateway status fail
	owner.label_check_gateway_status_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Check gateway back status failed";
			case LANG_CN:
				return "检查网关返回状态失败";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка обратной связи со шлюзом";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conectarea Gateway-ului la reteaua back Wi-Fi a esuat!";
			default:
				return "Check gateway back status failed";
		}
	}

	//check gateway status fail
	owner.label_gateway_notreceive = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway doesn't receive the command to add device";
			case LANG_CN:
				return "网关没有接收到添加设备信息";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Шлюз не получает команду на добавление устройства";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Gateway-ul nu primeste comanda de a adauga un echipament nou";
			default:
				return "Gateway doesn't receive the command to add device";
		}
	}

	//type id manually
	owner.label_type_id_manually = function(language) {
		switch (language) {
			case LANG_EN:
				return "Type device ID manually";
			case LANG_CN:
				return "手动输入设备ID";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ввести вручную ID устройства";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Introduceti manual seria echipamentului";
			default:
				return "Type device ID manually";
		}
	}

	//label step3
	owner.label_step3 = function(language) {
		switch (language) {
			case LANG_EN:
				return "Start Registration";
			case LANG_CN:
				return "开始注册";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Регистрация";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Incepeti inregistrarea";
			default:
				return "Start Registration";
		}
	}

	//add_radiator
	owner.label_add_radiator = function(language) {
		switch (language) {
			case LANG_EN:
				return "Add Radiator Controller";
			case LANG_CN:
				return "添加温控阀";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				// return "Добавить радиаторный термостат";
				return "Добавить термоголовку";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Adauga un nou cap termostat de radiator";
			default:
				return "Add Radiator Controller";
		}
	}

	//add_gas_detector
	owner.label_add_gas_detector = function(language) {
		switch (language) {
			case LANG_EN:
				return "Add Gas Detector";
			case LANG_CN:
				return "添加燃气传感器";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				// return "Добавить синализатор газа";
				return "Добавить сигнализатор";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Adauga un nou detector de gaze";
			default:
				return "Add Gas Detector";
		}
	}

	//delete
	owner.label_delete = function(language) {
		switch (language) {
			case LANG_EN:
				return "Delete";
			case LANG_CN:
				return "删除";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Удаление";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Stergere";
			default:
				return "Delete";
		}
	}

	//cancel hold
	owner.label_cancelhold = function(language) {
		switch (language) {
			case LANG_EN:
				return "Cancel Hold";
			case LANG_CN:
				return "取消越控";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Отмена удержания";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Asteapta cu anularea";
			default:
				return "Cancel Hold";
		}
	}

	//label zone
	owner.label_zone = function(language) {
		switch (language) {
			case LANG_EN:
				return "Zone";
			case LANG_CN:
				return "区域";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Зона";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Zona";
			default:
				return "Zone";
		}
	}

	//label time
	owner.label_time = function(language) {
		switch (language) {
			case LANG_EN:
				return "Time";
			case LANG_CN:
				return "时间";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Время";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Ora";
			default:
				return "Time";
		}
	}

	//删除成功
	owner.label_delete_success = function(language) {
		switch (language) {
			case LANG_EN:
				return "Delete succeed";
			case LANG_CN:
				return "删除成功";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Удалено";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Stergere reusita!";
			default:
				return "Delete succeed";
		}
	}

	//删除失败
	owner.label_delete_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Delete failed";
			case LANG_CN:
				return "删除失败";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка удаления";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Stergere esuata!";
			default:
				return "Delete failed";
		}
	}

	// 标题
	owner.label_content_title = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gas Concentration Alarm Set [unit:%]";
			case LANG_CN:
				return "燃气报警浓度设定【单位：%】";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Концентрация газа для тревоги";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Nivelul de Cconcentratia de gaz de la care se activeaza alarma: [unit:%]";
			default:
				"Gas Concentration Alarm Set [Unit:%]";
		}
	}

	// 手动输入
	owner.label_manual_input = function(language) {
		switch (language) {
			case LANG_EN:
				return "Manual Input";
			case LANG_CN:
				return "手动输入";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ручной ввод";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Introducere manuala";
			default:
				return "Manual Input";
		}
	}

	//
	owner.label_generator = function(language) {
		switch (language) {
			case LANG_EN:
				return "Generator";
			case LANG_CN:
				return "发电";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Генератор";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Incarcare electrotermica";
			default:
				return "Generator";
		}
	}

	//radiator
	owner.label_radiator = function(language) {
		switch (language) {
			case LANG_EN:
				return "Radiator Controller";
			case LANG_CN:
				return "温控阀";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Радиаторный термостат";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Cap termostati radiator";
			default:
				return "Radiator Controller";
		}
	}

	//energy save
	owner.label_energy_save = function(language) {
		switch (language) {
			case LANG_EN:
				return "Energy Saving";
			case LANG_CN:
				return "节能";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				// return "Экономия энергии";
				return "Уровень экономии";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Energie economisita";
			default:
				return "Energy Saving";
		}
	}

	// 手动微调
	owner.label_manual_fine = function(language) {
		switch (language) {
			case LANG_EN:
				return "Manual Fine";
			case LANG_CN:
				return "手动微调";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ручная точная";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Acord manual fin";
			default:
				return "Manual Fine";
		}
	}
	owner.label_check_by_self = function(language) {
		switch (language) {
			case LANG_EN:
				return "Self-Test";
			case LANG_CN:
				return "自检";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Самодиагностика";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Test oprire valva gaz";
			default:
				return "Self-Test";
		}
	}
	owner.label_concentration = function(language) {
		switch (language) {
			case LANG_EN:
				return "Concentration";
			case LANG_CN:
				return "浓度";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Концентрация";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Concentratie gaz";
			default:
				return "Concentration";
		}
	}
	owner.label_alerm_valve_value = function(language) {
		switch (language) {
			case LANG_EN:
				return "Alarm Point";
			case LANG_CN:
				return "告警阀值";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Точка тревоги";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Limita de alarma";
			default:
				return "Alarm Point";
		}
	}
	owner.label_get_gas_valve_info_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Get Gas valve info failed!";
			case LANG_CN:
				return "获取燃气阀信息失败!";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Не удалось получить информацию газового клапана";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Preluarea statusului valvei de oprire gaz, esuata!";
			default:
				return "Get Gas valve info failed!";
		}
	}
	owner.label_buzzer = function(language) {
		switch (language) {
			case LANG_EN:
				return "Buzzer:";
			case LANG_CN:
				return "蜂鸣器:";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Зуммер";				
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Sirena avertizare pericol";
			default:
				return "Buzzer:";
		}
	}
	owner.label_empty_set_valve_value = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please input the alerm valve value!";
			case LANG_CN:
				return "请输入告警阀！";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пожалуйста, введите значение для тревоги клапана!";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Introduceti limita de declansare a electrovalvei";
			default:
				return "Please input the alerm valve value!";
		}
	}
	owner.label_valve_openstatus = function(language) {
		switch (language) {
			case LANG_EN:
				return "Valve open status";
			case LANG_CN:
				return "阀开度";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Состояние клапана";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Electrovalva de gas deschisa!";
			default:
				return "Valve open status";
		}
	}
	owner.label_check_gateway_online = function(language) {
		switch (language) {
			case LANG_EN:
				return "Check whether there is online gateway in the location";
			case LANG_CN:
				return "检查当前区域内是否有网关在线";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Проверьте наличие подключенного шлюза поблизости";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Verifica existenta vreunui Gateway online in locatie!";
			default:
				return "Check whether there is online gateway in the location";
		}
	}
	owner.label_no_gateway_online = function(language) {
		switch (language) {
			case LANG_EN:
				return "There is no online gateway";
			case LANG_CN:
				return "没有在线网关";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Нет подключенного шлюза";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "In locatia nu se afla niciun Gateway online!";
			default:
				return "There is no online gateway";
		}
	}

	//energy info error
	owner.label_energy_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "Energy info is error";
			case LANG_CN:
				return "能耗信息错误";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка информации";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Informatia despre energie este eronata!";
			default:
				return "Energy info is error";
		}
	}

	//能量消耗
	owner.label_energy_consume = function(language) {
		switch (language) {
			case LANG_EN:
				return "Energy Consume";
			case LANG_CN:
				return "能量消耗";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Потребление энергии";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Consumul de energie";
			default:
				return "Energy Consume";
		}
	}

	//能量消耗
	owner.label_energy_type = function(language) {
		switch (language) {
			case LANG_EN:
				return ['Total', 'RfEnergy', 'MotorEnergy', 'StandByEnergy', 'OtherEnergy'];
			case LANG_CN:
				return ['消耗总计', '通讯耗能', '执行耗能', '系统耗能', '其他耗能'];
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return ['Всего', 'Радиосигнал', 'Энергия', 'Режим ожидания', 'Прочее'];
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return ['Total', 'RfEnergy', 'MotorEnergy', 'StandByEnergy', 'OtherEnergy'];
			default:
				return ['Total', 'RfEnergy', 'MotorEnergy', 'StandByEnergy', 'OtherEnergy'];
		}
	}

	//edit
	owner.label_edit = function(language) {
		switch (language) {
			case LANG_EN:
				return "Edit";
			case LANG_CN:
				return "编辑";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Редактировать";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Editare";
			default:
				return "Edit";
		}
	}

	//no choose locate
	owner.label_no_choose_locate = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please choose a locate";
			case LANG_CN:
				return "请选择区域";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Выберите местоположение";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Va rugam sa alegeti o locatie";
			default:
				return "Please choose a locate";
		}
	}

	//locate name
	owner.label_locate_name = function(language) {
		switch (language) {
			case LANG_EN:
				return "Locate Name";
			case LANG_CN:
				return "区域名称";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Название местоположения";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Numele locatiei";
			default:
				return "Locate Name";
		}
	}

	//locate name empty
	owner.label_locate_name_empty = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please enter locate name";
			case LANG_CN:
				return "请输入区域名称";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Введите название местоположения";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Va rugam introduceti numele locatiei";
			default:
				return "Please enter locate name";
		}
	}

	//locate name short
	owner.label_locate_name_too_short = function(language) {
		switch (language) {
			case LANG_EN:
				return "Locate name is too short! The valid length is 2~20";
			case LANG_CN:
				return "区域名称太短!有效长度是2~20";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Название местоположения слишком короткое. 2-20 символов";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Numele locatiei este invalid (numarul valide caractere este intre 2 si 20)";
			default:
				return "Locate name is too short! The valid length is 2~20";
		}
	}

	//locate name long
	owner.label_locate_name_too_long = function(language) {
		switch (language) {
			case LANG_EN:
				return "Locate name is too long! The valid length is 2~20";
			case LANG_CN:
				return "区域名称太长!有效长度是2~20";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Название местоположения слишком длинное. 2-20 символов";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Numele locatiei este invalid (numarul valide caractere este intre 2 si 20)";
			default:
				return "Locate name is too long! The valid length is 2~20";
		}
	}

	//add fail
	owner.label_add_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Add failed";
			case LANG_CN:
				return "添加失败";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка добавления";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Adaugare esuata!";
			default:
				return "Add failed";
		}
	}

	//can't delete default locate
	owner.label_not_delete_default_locate = function(language) {
		switch (language) {
			case LANG_EN:
				return "Can not delete default locate";
			case LANG_CN:
				return "不能删除默认区域";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Невозможно удалить расположение по умолчанию";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Nu poate fi stearsa locatia implicita";
			default:
				return "Can not delete default locate";
		}
	}

	//can't delete locate
	owner.label_not_delete_locate = function(language) {
		switch (language) {
			case LANG_EN:
				return "Can not delete the locate which has some gateways";
			case LANG_CN:
				return "不能删除拥有网关的区域";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Невозможно удалить расположение соответствующее Шлюзу";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Nu poate fi stearsa o locatie cu Gateway-uir conectate";
			default:
				return "Can not delete the locate which has some gateways";
		}
	}

	//set timezone
	owner.label_set_timezone = function(language) {
		switch (language) {
			case LANG_EN:
				return "Set gateway's timezone";
			case LANG_CN:
				return "设置网关时区信息";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Выберите часовой пояс шлюза";

			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Setati fusul orar pentru Gateway";
			default:
				return "Set gateway's timezone";
		}
	}
	owner.array_datetime_picker_labels = function(language) {
		switch (language) {
			case LANG_EN:
				return ['Y', 'M', 'D', 'H', 'Mi'];
			case LANG_CN:
				return ['年', '月', '日', '时', '分'];
			case LANG_BLR:
				return "";
			case LANG_RUS:
				return ['Г', 'М', 'Д', 'Ч', 'Мин'];
			case LANG_ROM:
				return ['A', 'L', 'Z', 'H', 'Min'];
			default:
				return ['Y', 'M', 'D', 'H', 'Mi'];
		}
	}
	owner.array_confirm_buttons = function(language) {
		switch (language) {
			case LANG_EN:
				return ['Cancel', 'OK'];
			case LANG_CN:
				return ['取消', '确定'];
			case LANG_BLR:
				return "";
			case LANG_RUS:
				return ['Отмена', 'OK'];
			case LANG_ROM:
				return ['Anulare', 'OK']
			default:
				return ['Cancel', 'OK'];
		}
	}
	owner.label_energy_good = function(language) {
		switch (language) {
			case LANG_EN:
				return "Good";
			case LANG_CN:
				return "良";
			case LANG_BLR:
				return "";
			case LANG_RUS:
				return "Хорошо";
			case LANG_ROM:
				return "Bun";
			default:
				return "Good";
		}
	}
	owner.msg_connect_to_wifi_first = function(language) {
		switch (language) {
			case LANG_EN:
				return "Phone is not connected to a wireless network, connect to a wireless network after the operation";
			case LANG_CN:
				return "手机未连接到无线网络，请连接到无线网络后再操作";
			case LANG_RUS:
				return "Телефон не подключен к беспроводной сети, подключите к беспроводной сети";
			case LANG_BLR:
				return "";			
			case LANG_ROM:
				return "Telefonul nu este conectat la o retea wireless. Conectati-va dupa finalizarea operatiunii";
			default:
				return "Phone is not connected to a wireless network, connect to a wireless network after the operation";
		}
	}
	owner.msg_connection_unknow = function(language) {
		switch (language) {
			case LANG_EN:
				return "Current network connection status is unknown, check the network connection";
			case LANG_CN:
				return "当前网络连接状态未知，请检查网络连接";
			case LANG_RUS:
				return "Неизвестный статус соединения, проверьте сетевое соединение";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Statusul conectarii la retea este necunoscut; verificati conectarea la retea";
			default:
				return "Current network connection status is unknown, check the network connection";
		}
	}
	owner.msg_connection_none = function(language) {
		switch (language) {
			case LANG_EN:
				return "The network is not connected, check the network connection";
			case LANG_CN:
				return "网络未连接，请检查网络连接";
			case LANG_RUS:
				return "Сеть недоступна, проверьте сетевое подключение";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Reteaua nu este conectata, verificati conectarea la retea";
			default:
				return "The network is not connected, check the network connection";
		}
	}
	owner.msg_connection_ethernet = function(language) {
		switch (language) {
			case LANG_EN:
				return "Network has been switched to a wired network";
			case LANG_CN:
				return "网络已切换为有线网络";
			case LANG_RUS:e
				return "Сеть подключена";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Tocmai v-ati conectat la o retea cu fir";
			default:
				return "Network has been switched to a wired network";
		}
	}
	owner.msg_connection_cell2G = function(language) {
		switch (language) {
			case LANG_EN:
				return "Network has been switched to 2G";
			case LANG_CN:
				return "网络已切换为蜂窝数据2G";
			case LANG_RUS:
				return "Подключено к сети 2G";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Tocmai v-ati conectat la o retea mobila 2G";
			default:
				return "Network has been switched to 2G";
		}
	}
	owner.msg_connection_cell3G = function(language) {
		switch (language) {
			case LANG_EN:
				return "Network has been switched to 3G";
			case LANG_CN:
				return "网络已切换为蜂窝数据3G";
			case LANG_RUS:
				return "Подключено к сети 3G";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Tocmai v-ati conectat la o retea mobila 3G";
			default:
				return "Network has been switched to 3G";
		}
	}
	owner.msg_connection_cell4G = function(language) {
		switch (language) {
			case LANG_EN:
				return "Network has been switched to 4G";
			case LANG_CN:
				return "网络已切换为蜂窝数据4G";
			case LANG_RUS:
				return "Подключено к сети 4G";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Tocmai v-ati conectat la o retea mobila 4G";
			default:
				return "Network has been switched to 4G";
		}
	}
	owner.msg_connection_wifi = function(language) {
		switch (language) {
			case LANG_EN:
				return "Network has been switched to the radio signal";
			case LANG_CN:
				return "网络已切换为无线信号";
			case LANG_RUS:
				return "Подключено к радиосигналу";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Tocmai v-ati conectat la o retea Wi-Fi";
			default:
				return "Network has been switched to WIFI";
		}
	}
	owner.title_auto_config = function(language) {
		switch (language) {
			case LANG_EN:
				return "Auto Configuration";
			case LANG_CN:
				return "一键配置";
			case LANG_RUS:
				return "Автоматическая настройка";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Auto configurare";
			default:
				return "Auto Configuration";
		}
	}
	owner.label_wifi_signal = function(language) {
		switch (language) {
			case LANG_EN:
				return "WIFI signal";
			case LANG_CN:
				return "WIFI 信号";
			case LANG_RUS:
				return "Сигнал Wifi";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Nivel semnal Wi-Fi";
			default:
				return "WIFI signal";
		}
	}
	owner.label_gateway_mac = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway mac";
			case LANG_CN:
				return "网关mac";
			case LANG_RUS:
				return "MAC Шлюза";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Mac-ul Gateway-ului";
			default:
				return "Gateway mac";
		}
	}
	owner.label_start_config = function(language) {
		switch (language) {
			case LANG_EN:
				return "Start Configuration";
			case LANG_CN:
				return "开始配置";
			case LANG_RUS:
				return "Начало настройки";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Pornire configurare";
			default:
				return "Start Configuration";
		}
	}
	owner.label_config_title_start = function(language) {
		switch (language) {
			case LANG_EN:
				return "Start Configuration...";
			case LANG_CN:
				return "开始配置。。。";
			case LANG_RUS:
				return "Начало настройки...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Pornire configurare ...";
			default:
				return "Start Configuration...";
		}
	}
	owner.label_config_title = function(language) {
		switch (language) {
			case LANG_EN:
				return "Configuring...";
			case LANG_CN:
				return "配置中。。。";
			case LANG_RUS:
				return "Настройка...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Se configureaza ...";
			default:
				return "Configuring...";
		}
	}
	owner.msg_gateway_connection_timeout = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway connection timeout";
			case LANG_CN:
				return "网关连接超时";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ожидание подключения шлюза";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Timpul de incercare pentru conectarea Gateway-ului a expirat";
			default:
				return "Gateway connection timeout";
		}
	}
	owner.msg_gateway_connection_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway connection failed";
			case LANG_CN:
				return "网关连接超时";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка подключения шлюза";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conectarea Gateway-ului a esuat!";
			default:
				return "Gateway connection failed";
		}
	}
	owner.msg_connecting_gateway = function(language) {
		switch (language) {
			case LANG_EN:
				return "Connecting Gateway...";
			case LANG_CN:
				return "连接网关。。。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Соединение со Шлюзом";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conectare Gateway ...";
			default:
				return "Connecting Gateway...";
		}
	}
	owner.msg_obtaining_ip_address = function(language) {
		switch (language) {
			case LANG_EN:
				return "Obtaining IP address...";
			case LANG_CN:
				return "正在获取IP地址。。。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Получение IP-адреса ...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Obtinere adresa IP ...";
			default:
				return "Obtaining IP address...";
		}
	}
	owner.msg_gateway_connection_status_checked = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway connection status is being checked...";
			case LANG_CN:
				return "验证网关连接状态。。。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Состояние подключения шлюза проверяется ...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Se verifica statusul conectarii Gateway-ului ...";
			default:
				return "Gateway connection status is being checked...";
		}
	}
	owner.msg_configuring_gateway = function(language) {
		switch (language) {
			case LANG_EN:
				return "Configuring Gateway...";
			case LANG_CN:
				return "配置网关。。。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Настройка шлюза...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Gateway-ul se configureaza ...";
			default:
				return "Configuring Gateway...";
		}
	}
	owner.msg_checking_for_gateway_networking_state = function(language) {
		switch (language) {
			case LANG_EN:
				return "Checking for Gateway networking state...";
			case LANG_CN:
				return "验证网关联网状态。。。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Проверка сетевого состояния шлюза...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return " Se verifica statusul retelei proprii a Gateway-ului ...";
			default:
				return "Checking for Gateway networking state...";
		}
	}
	owner.msg_connecting_wifi = function(language) {
		switch (language) {
			case LANG_EN:
				return "Connecting WIFI...";
			case LANG_CN:
				return "连接WIFI。。。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Подключение к сети Wifi...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return " Se conecteaza la reteaua Wi-Fi ...";
			default:
				return "Connecting WIFI...";
		}
	}
	owner.msg_start_verify_gateway = function(language) {
		switch (language) {
			case LANG_EN:
				return "Start verification gateway...";
			case LANG_CN:
				return "开始验证网关。。。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Начало проверки шлюза...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Se verifica functionarea Gateway-ului ...";
			default:
				return "Start verification gateway...";
		}
	}
	owner.msg_get_information_gateway = function(language) {
		switch (language) {
			case LANG_EN:
				return "Get Information Gateway...";
			case LANG_CN:
				return "获取网关信息。。。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Получение информации...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Se primesc informatii actualizate de la Gateway ...";
			default:
				return "Get Information Gateway...";
		}
	}
	owner.msg_being_successful_gateway_info = function(language) {
		switch (language) {
			case LANG_EN:
				return "Being successful gateway information...";
			case LANG_CN:
				return "获取网关信息成功。。。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Получение информации...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Se primesc informatii de la Gateway ...";
			default:
				return "Being successful gateway information...";
		}
	}
	owner.msg_start_bind_gateway = function(language) {
		switch (language) {
			case LANG_EN:
				return "Start Bind Gateway...";
			case LANG_CN:
				return "开始绑定网关。。。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Запустите привязку шлюза...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Se incepe comunicarea cu Gateway-ul ...";
			default:
				return "Start Bind Gateway...";
		}
	}
	owner.msg_wifi_connected_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "WIFI connection failed";
			case LANG_CN:
				return "连接WIFI失败";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка Wifi соединения";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conexiunea cu reteaua Wi-Fi, esuata!";
			default:
				return "WIFI connection failed";
		}
	}
	owner.msg_friendly_reminder = function(language) {
		switch (language) {
			case LANG_EN:
				return "Try to make your router, mobile phones and devices closer to each other.";
			case LANG_CN:
				return "尽量使您的路由器、手机和设备互相靠近。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пожалуйста, разместите Ваши роутер, смартфон и устройства ближе друг к другу";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Apropiati telefonul, ruterul si echipamentele intre ele!";
			default:
				return "Try to make your router, mobile phones and devices closer to each other.";
		}
	}
	owner.msg_configuration_success = function(language) {
		switch (language) {
			case LANG_EN:
				return "Configuration is successful";
			case LANG_CN:
				return "配置成功";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Настройка завершена";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Configurarea a reusit!";
			default:
				return "Configuration is successful";
		}
	}
	owner.msg_configuration_failed = function(language) {
		switch (language) {

			//			case LANG_EN: return "Configuration failed\n1.After re-power your device and try again.\n2.Please check Wifi password is correct.";

			//			case LANG_CN: return "配置失败\n\n1、请将设备重新上电后重试。\n2、请检查Wi-fi密码是否正确。";

			//			case LANG_UKR: return "";case LANG_FRA: return ""; case LANG_ESP:return "";case LANG_RUS:return "";case LANG_BLR:return "";
			//           case LANG_ROM: return "";default: return "onfigurarea a esuat!\n\n1.Puteti incerca din nou dupa repornirea echipamentelor.\n2.Verificati corectitudinea introducerii parolei Wi-Fi.";
			case LANG_EN:
				return "Configuration failed!\nYou can click on the button below FAQ for help or try once again!";
			case LANG_CN:
				return "配置失败\n您可以点击下方的FAQ按钮寻求帮助或者重新尝试一次！";
			case LANG_RUS:
				return "Ошибка конфигурации\nНажмите кнопку под FAQ для справки или попробуйте еще раз";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Configurarea a esuat!\nPuteti incerca din nou dupa repornirea echipamentelor sau va informati suplimentar si apoi reincercati.";
			default:
				return "Configuration failed!\nYou can click on the button below FAQ for help or try once again!";
		}
	}
	owner.array_button_array_yes_or_no = function(language) {
		switch (language) {
			case LANG_EN:
				return ['No', 'Yes'];
			case LANG_CN:
				return ['否', '是'];
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return ['Нет', 'Да'];
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return ['Nu', 'Da']
			default:
				return ['No', 'Yes'];
		}
	}
	owner.title_precautions = function(language) {
		switch (language) {
			case LANG_EN:
				return "Precautions";
			case LANG_CN:
				return "注意事项";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Предостережение";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Masuri de precautie";
			default:
				return "Precautions";
		}
	}
	owner.msg_configuration_confirm = function(language) {
		switch (language) {
			case LANG_EN:
				return "Make sure your gateway device has entered the automatic pairing mode (LED slow blinking lights), after confirmation click \"Yes\" to pair, otherwise click \"No\" to cancel pairing.";
			case LANG_CN:
				return "请确认您的网关设备已经进入自动配对模式（LED灯慢速闪烁），确认无误后点击“是”进行配对，否则点击“否”取消配对。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Убедитесь, что устройство в режиме автоматической синхронизации (LED сигнал медленно мигает), убедившись нажмите \"Да\" для сопряжения, в противном случае нажмите \"Нет\" для отмены сопряжения.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Asigurati-va ca Gateway-ul a intrat in modul de configurare automata (LEDul intermitent clipeste lent) si dupa confirmare apasati \"Da\" pentru configurare sau \"Nu\" pentru a opri configurarea.";
			default:
				return "Make sure your gateway device has entered the automatic pairing mode (LED slow blinking lights), after confirmation click \"Yes\" to pair, otherwise click \"No\" to cancel pairing.";
		}
	}
	owner.msg_repower_try_again = function(language) {
		switch (language) {
			case LANG_EN:
				return "After re-power your device and try again.";
			case LANG_CN:
				return "请将设备重新上电后重试。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "После перезагрузки устройства, попробуйте еще раз";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Dupa repornirea echipamentelor incercati din nou.";
			default:
				return "After re-power your device and try again.";
		}
	}
	owner.msg_loging = function(language) {
		switch (language) {
			case LANG_EN:
				return "logging in. . .";
			case LANG_CN:
				return "登录中。。。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Вход в систему...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Se conecteaza ...";
			default:
				return "logging in. . .";
		}
	}
	owner.msg_sel_end_time_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "Select the end time is incorrect!";
			case LANG_CN:
				return "结束时间选择有误!";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Выбранное время окончания неверно!";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Ora de sfarsit este incorecta!";
			default:
				return "Select the end time is incorrect!";
		}
	}
	owner.msg_mac_must_to_be_hex = function(language) {
		switch (language) {
			case LANG_EN:
				return "Device ID must consist of the following characters (0,1,2,3,4,5,6,7,8,9, A, B, C, D, E, F).";
			case LANG_CN:
				return "设备ID必须由以下字符组成（0，1，2，3，4，5，6，7，8，9，A，B，C，D，E，F）。";
			case LANG_RUS:
				return "ID устройства должно содержать символы (0,1,2,3,4,5,6,7,8,9, A, B, C, D, E, F).";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Seria echipamentului este compusa din caracterele 0,1,2,3,4,5,6,7,8,9, A, B, C, D, E, F";
			default:
				return "Device ID must consist of the following characters (0,1,2,3,4,5,6,7,8,9, A, B, C, D, E, F).";
		}
	}
	owner.msg_week_device_need_wait = function(language, times) {
		switch (language) {
			case LANG_EN:
				return "The device is in deep sleep, wake up the device to wait about " + times + " minutes.";
			case LANG_CN:
				return "设备处于深度睡眠状态，唤醒设备大约需要等待" + times + "分钟的时间。";
			case LANG_RUS:
				return "Устройство в режиме ожидания,и ожидайте " + times + " минут.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Echipamentul are functiile oprite. Pentru repornirea functiilor aveti de asteptat" + times + " minute.";
			default:
				return "The device is in deep sleep, wake up the device to wait about " + times + " minutes.";
		}
	}
	owner.msg_press_again_to_exit = function(language) {
		switch (language) {
			case LANG_EN:
				return "Press again to exit the application";
			case LANG_CN:
				return "再按一次退出应用";
			case LANG_RUS:
				return "Нажмите еще раз для выхода из приложения";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Apasati inca odata pentru a iesi din aplicatie";
			default:
				return "Press again to exit the application";
		}
	}
	owner.msg_confirm_logout = function(language) {
		switch (language) {
			case LANG_EN:
				return "OK Log out?";
			case LANG_CN:
				return "确定退出登录？";
			case LANG_RUS:
				return "Выйти?";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Iesiti di aplicatie?";
			default:
				return "OK Log out?";
		}
	}
	owner.msg_demo_can_not_add = function(language) {
		switch (language) {
			case LANG_EN:
				return "DEMO account can not add the device!";
			case LANG_CN:
				return "DEMO 账号不能添加设备！";
			case LANG_RUS:
				return "В Демо режиме невозможно добавить устройство";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Contul DEMO nu permite adaugarea echipamentelor!";
			default:
				return "DEMO account can not add the device!";
		}
	}
	owner.msg_has_none_changed = function(language) {
		switch (language) {
			case LANG_EN:
				return "You have not done any changes, no need to submit!";
			case LANG_CN:
				return "您未做过任何修改，无须提交！";
			case LANG_RUS:
				return "Вы не сделали изменений, нет необходимости в подтверждении";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Nu ati modificat nimic si de aceea nu este necesara transmiterea";
			default:
				return "You have not done any changes, no need to submit!";
		}
	}
	owner.label_name_preparationg = function(language) {
		switch (language) {
			case LANG_EN:
				return "Preparationg";
			case LANG_CN:
				return "准备";
			case LANG_RUS:
				return "Подготовка";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Pregatire";
			default:
				return "Preparationg";
		}
	}
	owner.label_name_wifi_connection = function(language) {
		switch (language) {
			case LANG_EN:
				return "Wi-Fi Connection";
			case LANG_CN:
				return "Wi-Fi连接";
			case LANG_RUS:
				return "Wi-Fi соединение";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conexiune Wi-Fi";
			default:
				return "Wi-Fi Connection";
		}
	}
	owner.label_name_connection_check = function(language) {
		switch (language) {
			case LANG_EN:
				return "Connection Check";
			case LANG_CN:
				return "连接检查";
			case LANG_RUS:
				return "Проверка соединения";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Verificare conexiune";
			default:
				return "Connection Check";
		}
	}
	owner.tip_preparationg = function(language) {
		switch (language) {
			case LANG_EN:
				return "Before add gateway, please plug in the gateway and make it under Paring Mode by long pressing the button until it's LED blinking slowly.";
			case LANG_CN:
				return "添加网关前，请将网关插入电源插座，并长按网关按钮直至LED灯进入慢闪对码状态。 ";
			case LANG_RUS:
				return "Перед добавлением Шлюза, пожалуйста, вставьте его в розетку и включите режим сопряжения";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Inainte de adaugarea unui nou Gateway, va rugam sa il conectati la priza si sa il introductei in modeul de configurare prin atingerea cca 5-7 secunde a iconitei ce simbolizeaza o casa de pe acesta, pana cand LEDul incepe sa clipeasca intermitent, lent.";
			default:
				return "Before add gateway, please plug in the gateway and make it under Paring Mode by long pressing the button until it's LED blinking slowly.";
		}
	}
	owner.tip_connection_check = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please check gateway's connection by pressing below button:<br/>it means a good connection if gateway's LED lit at the same time when below button's light on.";
			case LANG_CN:
				return "请按下方按钮对网关的连接情况进行确认：<br/>当下方按钮灯亮时，如果网关的LED灯也同时亮起，则说明网关当前连接状况良好。";
			case LANG_RUS:
				return "Пожалуйста, проверьте соединение шлюза нажатием кнопки ниже. Одновременное мигание LED индикатора на шлюзе говорит о хорошем соединении";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Va rugam sa verificati reusita conectarii cu Gateway-ul prin apaasarea butonului de mai jos:<br>/ o conexiune reusita este semnalizata prin aprinderea LEDului simultan cu butonul din aplicatie";
			default:
				return "Please check gateway's connection by pressing below button:<br/>it means a good connection if gateway's LED lit at the same time when below button's light on.";
		}
	}
	owner.msg_wifi_connection_success = function(language) {
		switch (language) {
			case LANG_EN:
				return "Congratulations! your gateway addition is succeed！ please go and check the connection work.";
			case LANG_CN:
				return "恭喜您！网关添加成功！去看看它的连接情况吧！";
			case LANG_RUS:
				return "Поздравляем! Шлюз добавлен! Проверьте работу соединения";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Configurarea Gateway-ului a reusit! Verificati acum reusita conectarii.";
			default:
				return "Congratulations! your gateway addition is succeed！ please go and check the connection work.";
		}
	}
	owner.msg_please_input_gateway_name = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please input the GatewayName!";
			case LANG_CN:
				return "请输入网关的名字";
			case LANG_RUS:
				return "Введите название шлюза!";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Introduceti denumirea Gateway-ului:";
			default:
				return "Please input the GatewayName!";
		}
	}
	owner.label_detection_of_gas = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gas";
			case LANG_CN:
				return "检测气体";
			case LANG_RUS:
				return "ГАЗ";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Gaz";
			default:
				return "Gas";
		}
	}
	owner.msg_add_device_finished = function(language) {
		switch (language) {
			case LANG_EN:
				return "Equipment has been added to complete. \n Tip: Check the electrical device, if the device has been powered, please wait 3-5 minutes, the device will automatically on line.";
			case LANG_CN:
				return "设备已添加完成。\n提示：请检查设备上电情况，如果设备已经上电，请耐心等待3-5分钟，设备会自动上线。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Завершение добавления устройства. \n Проверьте питание устройства, подождите 3-5 минут, устройство автоматически подключится.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Echipamentul a fost adaugat cu succes. \n Sfat: Asteptati cca. 3-5 minute pana cand acesta revine online.";
			default:
				return "Equipment has been added to complete. \n Tip: Check the electrical device, if the device has been powered, please wait 3-5 minutes, the device will automatically on line.";
		}
	}
	owner.array_choice_button = function(language) {
		switch (language) {
			case LANG_EN:
				return ["FAQ", "Try again"];
			case LANG_CN:
				return ["FAQ帮助", "重新尝试"];
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return ["FAQ", "Еще раз"];
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return ["FAQ", "Reincearca"];
			default:
				return ["FAQ", "Try again"];
		}
	}
	owner.label_temperature_curve = function(language) {
		switch (language) {
			case LANG_EN:
				return "Temperature curve";
			case LANG_CN:
				return "温度曲线";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "График температуры";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Graficul temperaturii";
			default:
				return "Temperature curer";
		}
	}
	owner.label_power_curve = function(language) {
		switch (language) {
			case LANG_EN:
				return "Power curve";
			case LANG_CN:
				return "发电曲线";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "График мощности";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Graficul incarcarii";
			default:
				return "Power curer";
		}
	}
	owner.label_voltage = function(language) {
		switch (language) {
			case LANG_EN:
				return "Voltage";
			case LANG_CN:
				return "电压";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Напряжение";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Tenisunea (V)";
			default:
				return "Voltage";
		}
	}
	owner.label_last_day = function(language) {
		switch (language) {
			case LANG_EN:
				return "Last 24 Hours";
			case LANG_CN:
				return "最近24小时";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "За 24 часа";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Ultimele 24 ore";
			default:
				return "Last 24 Hours";
		}
	}
	owner.label_last_week = function(language) {
		switch (language) {
			case LANG_EN:
				return "Last Week";
			case LANG_CN:
				return "最近一周";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "За неделю";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Saptamana trecuta";
			default:
				return "Last Week";
		}
	}
	owner.title_alerm_messages = function(language) {
		switch (language) {
			case LANG_EN:
				return "Messages";
			case LANG_CN:
				return "消息列表";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Сообщения";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Mesaje";
			default:
				return "Messages";
		}
	}
	owner.msg_update_timeout = function(language) {
		switch (language) {
			case LANG_EN:
				return "Update timeout";
			case LANG_CN:
				return "更新超时";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Превышено время ожидания обновления";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Timpul pentru actualizare a fost depasit";
			default:
				return "Update timeout";
		}
	}
	owner.array_buttons_for_smart_config_fail_confirm = function(language) {
		switch (language) {
			case LANG_EN:
				return ['Cancel', 'FAQ', 'Try other ways'];
			case LANG_CN:
				return ['取消', 'FAQ', '尝试其他方式'];
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return ['Отмена', 'Справка', 'Попробовать другой способ'];
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return ['Anulare', 'FAQ', 'Incearca altfel'];
			default:
				return ['Cancel', 'FAQ', 'Try other ways'];
		}
	}
	
	owner.msg_smart_config_failure = function(language) {
		switch (language) {
			case LANG_EN:
				return "Adding gateway failed. Please check FAQ for troubleshot then try again after power-off and re-up the gateway.";
			case LANG_CN:
				return "配置失败：请您查看FAQ获取帮助，网关设备重新上电后，再次尝试绑定。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка добавления шлюза. Изучите инструкцию еще раз, затем, попробуйте снова, после выключения и включения шлюза.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Adaugarea unui nou gateway a esuat. Puteti incerca din nou dupa repornirea echipamentelor sau va informati suplimentar si apoi reincercati.";
			default:
				return "Adding gateway failed. Please check FAQ for troubleshot then try again after power-off and re-up the gateway.";
		}
	}
	
	owner.msg_ap_config_failure = function(lang_options) {
		switch (language) {
			case LANG_EN:
				return "Adding gateway failed cause server cannot be connected due to gateway has failed on DNS resolution. Please contact with local custom service or supplier by email to support@poersmart.com.";
			case LANG_CN:
				return "配置失败：网关设备解析DNS失败，无法连接到服务器。请您联系当地客服或邮件联系供应商（support@poersmart.com）。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Неудачное подключения шлюза, из-за ошибки DNS сервера либо шлюза. Пожалуйста, свяжитесь с ближайшим сервисцентром или производителем по e-mail: support@poersmart.com";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Adaugarea unui nou gateway a esuat din cauza imposibilitatii setarii DNSului. Contactati-ne la support@poersmart.ro sau mobil 0727 177 188";
			default:
				return "Adding gateway failed cause server cannot be connected due to gateway has failed on DNS resolution. Please contact with local custom service or supplier by email to support@poersmart.com.";
		}
	}

	owner.msg_sc_config_fail = function (language) {
		switch (language) {
			case LANG_EN:
				return "Adding gateway failed! please choose' try again after power-off and re-up the gateway.";
			case LANG_CN:
				return "配置失败！请将网关重新上电，直接点击【try again】按钮，重新尝试。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Adaugarea unui nou gateway a esuat. Puteti incerca din nou dupa repornirea echipamentelor sau va informati suplimentar si apoi reincercati.";
			default:
				return "Adding gateway failed! please choose' try again after power-off and re-up the gateway.";
		}
	}

	owner.array_button_for_sc_config_fail = function (language) {
		switch (language) {
			case LANG_EN:
				return ["Try again", "Cancel"];
			case LANG_CN:
				return ["重试", "取消"];
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return ["Еще раз", "Отмена"];
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return ["Reincearca", "Anulare"]
			default:
				return ["Try again", "Cancel"];
		}
	}

	owner.label_try_again = function (language) {
		switch (language) {
			case LANG_EN:
				return "Try again";
			case LANG_CN:
				return "再试一次";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Еще раз";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Reincearca";
			default:
				return "Try again";
		}
	}

	owner.msg_config_timeout = function (language) {
		switch (language) {
			case LANG_EN:
				return "Configuration timeout, please try again.";
			case LANG_CN:
				return "配置超时,请重试一次.";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Время истекло, пожалуйста, попробуйте еще раз.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Configurarea a depasit timpul alocat. Reincearca ...";
			default:
				return "Configuration timeout, please try again.";
		}
	}

	owner.msg_wake_up_remind = function(language) {
		switch (language) {
			case LANG_EN:
				return "The current device is dormant, wake-up takes a few minutes, please wait a moment.";
			case LANG_CN:
				return "目前设备处于休眠状态，唤醒需要几分钟，请稍等片刻。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Устройство в режиме ожидания, пробуждение займет несколько минут. Пожалуйста, подождите.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "";
			default:
				return "The current device is dormant, wake-up takes a few minutes, please wait a moment.";
		}
	}
	
}(mui, window.poer_language = {}));