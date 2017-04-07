	var cookie = document.cookie.split('; ')
	var user;
	var pas;
	var isuser;
	cookie.forEach(function(item){
		var arr = item.split('=');

		if(arr[0] === 'username'){
			user = arr[1]
		}else if(arr[0] === 'password'){
			pas = arr[1]
		}else if(arr[0] === 'isuser'){
			isuser = arr[1]
		}
	})
	console.log(666)
	if(isuser){
		$('.welcome span').html(user+'您好，欢迎光临可得眼镜网！');
	}else{
		$('.welcome span').html('您好，欢迎光临可得眼镜网！');
	}
