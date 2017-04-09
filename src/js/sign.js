requirejs(['config'],function(){
	requirejs(['jquery'],function(){
		$('header').load('../html/header.html',function(){
			requirejs(['header'],function(){
				//验证滑动块
				$('.slide')[0].onmousedown = function(evt){
					var ox = evt.offsetX;
					$('.slidearea')[0].onmousemove=true;
					$('.slidearea')[0].onmousemove = function(e){
						var left = e.clientX-ox-$('.slidearea')[0].offsetLeft;
						$('.slide').css('left',left)
						if(left<=0){
							$('.slide').css('left',0)
						}else if(left>=$('.slidearea')[0].offsetWidth-$('.slide').outerWidth()){
							$('.slide').css('left',$('.slidearea')[0].offsetWidth-$('.slide').outerWidth())
							$('.slidearea').css('backgroundColor','#90c31f').children('span').show();
							$('.slidearea')[0].onmousemove=null;
							$('.slide')[0].onmousedown=null;
							console.log($('.slide').offset().left)
							console.log($('.slidearea').offset().left+$('.slidearea').outerWidth()-$('.slide').outerWidth())
						}
						e.preventDefault();
					}

				}
				$('.slide')[0].onmouseup = function(){
					// $('.slide').css('left',$('.slide').offset().left);
					$('.slidearea')[0].onmousemove=false;
				}


				//验证码
				$('.Code .codeshow').on('click',function(e){
					 random();
				})
				 random();
				function random(){
					var num = String(parseInt(Math.random()*10000));
					while(num.length<4){
						num = '0'+num;
					}
					$('.Code .codeshow').html(num)
				}



				// 注册验证
				$('#refer').on('click',function(){
					//获取每一个输入框的值
					var $user = $('#username').val();
					var $password = $('#password').val();
					var $repassword = $('#repassword').val();
					var $code = $('#code').val();
					var $agree  = $('.agree').val();


					if(!/^[\w]{1,16}$/.test($user) && !/^[\w\-\.]+@[\da-z\-]+(\.[a-z]{2,3}){1,2}$/.test($user) && !/^1[34578]\d{9}$/.test($user)){
						alert('用户名错误');
						return false;
					}

					if(!/^[\D\d]{8,16}$/.test($password)){
						alert('密码长度不符合');
						return false;
					}
					if($repassword !=$password){
						alert('密码不一样,请重新输入');
						return false;
					}
					if($('.slide').offset().left<$('.slidearea').offset().left+$('.slidearea').outerWidth()-$('.slide').outerWidth()){
						alert('请把滑动块拉到右边');
						return false;
					}
					if($('#code').val() !== $('.Code .codeshow').html()){
						alert('验证码不正确');
						random();
						return false;
					}

					if(!$('.agree')[0].checked){
						alert('请勾选我已阅读');
						return false;
					}


					//把用户名密码保存起来
					
					document.cookie = 'username=' + $user+';path=/';
					document.cookie = 'password=' + $password+';path=/';

					window.location.href="../html/login.html"  
				})

				
				
				$('footer').load('../html/loginfooter.html')
			})
			
		})

	})
})