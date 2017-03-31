requirejs(['config'],function(){
		requirejs(['jquery'],function(){
			$('header').load('../html/header.html',function(){
				$('.welcome span').html('您好，欢迎光临可得眼镜网！')
			})
		})
	})