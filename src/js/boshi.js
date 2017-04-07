requirejs(['config'],function(){
	requirejs(['jquery'],function(){
		$('header').load('../html/header.html',function(){
			requirejs(['header'],function(){
				$('body>nav').load('../html/nav.html',function(){
					//页面导航
						//默认隐藏
						$('main>nav .goodslists>ul').hide();
						$('main nav .goodslists').children().children('li').children('.content').hide();
						//获取导航列表的位置

						var $listTop = $('main>nav').outerHeight();
						var $listWid = $('main>nav .goodslists').outerWidth();
						console.log($listWid)
						// var $listLeft = $('main>nav>.goodslists').offset().left;
						console.log($('main>nav .goodslists .content'))

						$('main>nav .goodslists .content').css('top',$listTop);
						$('main>nav .goodslists .content').css('left',$listWid);
						// console.log($('main>nav .goodslists>ul'))
						// $('main>nav .goodslists>ul')[0].style.left = $listLeft+'px';

						//设置该列表的宽度
						var $listWid = $('main>nav>.goodslists').outerWidth();
						$('main>nav .goodslists>ul')[0].style.width = $listWid+'px';
						//添加事件
						$('main>nav .goodslists').on('mouseenter',function(){

							for(var i=0;i<$('main nav .goodslists').children().children('li').length;i++){
								$(this).siblings().removeClass('border').addClass('bdr');
							}
							$('main>nav .goodslists>ul').show();
							
						}).on('mouseenter','>ul>li',function(){
							$(this).children('.content').show();
							$(this).removeClass('bdr').addClass('border').children('h3').children('a').children('i').hide();
							$(this).siblings().addClass('bdr')
						}).on('mouseleave','>ul>li',function(){
							$(this).removeClass('border').children('h3').children('a').children('i').show();
							$(this).siblings().removeClass('bdr')
							$('main>nav .goodslists>ul').children('li').children('.content').hide();
						}).on('mouseleave',function(){
							console.log($(this).children('ul'))
							$(this).children('ul').hide();
						})

						$('footer').load('../html/footer.html')
				});
			})
		})
	})
})