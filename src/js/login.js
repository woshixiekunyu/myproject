requirejs(['config'],function(){
	requirejs(['jquery'],function(){
		$('header').load('../html/header.html',function(){
			requirejs(['header'],function(){
				// 获取cookie值
				// var cookie = document.cookie.split('; ')
				// var user;
				// var pas;
				// cookie.forEach(function(item){
				// 	var arr = item.split('=');

				// 	if(arr[0] === 'username'){
				// 		user = arr[1]
				// 	}else if(arr[0] === 'password'){
				// 		pas = arr[1]
				// 	}
				// })
				// console.log(user,pas)
				console.log(777)
				// 判断输入的值是否正确
				$('#username').blur(function(){
					if($(this).val() !== user){
						console.log('用户名不存在')
					}

				})
				$('#password').blur(function(){
					if($(this).val() !== pas){
						console.log('密码错误')
					}

				})
				// 点击时各种条件
				$('.btnlogin').on('click',function(){
					
					
					if($('#username').val() !== user){
						return false;
					}
					if($('#password').val() !== pas){
						return false;
					}
					var isuser = true;
					var now = new Date();
					now.setDate(now.getDate()+30)
					document.cookie = 'isuser=' + isuser +';expires=' + now+';path=/';
					location.href='../index.html';
				})

				
				console.log(66)
				$('footer').load('../html/loginfooter.html');
			})
		})
	})
})