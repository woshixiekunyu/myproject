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

						//俱乐部

						var $wel = $('<span/>')
						if(isuser){
							var $tip = $('<span/>').html('尊贵的'+user+'会员');
							var $offer = $('<p/>').html('您可以享受到的服务有')
							var $offer1 = $('<span/>').html('1、积分抵现金') 
							var $offer2 = $('<span/>').html('2、积分全额兑')
							$('main>section>.cub>.cubbody>.infor').append($wel).append($tip).append($offer).append($offer1).append($offer2)
						}else{
							var $tip = $('<span/>').html('您还未登录哦')
							var $a = $('<a/>').html('会员登录').addClass('btncub').attr('href','login.html')
							var $offer = $('<p/>').html('登录后将为您提供：')
							var $offer1 = $('<span/>').html('1、积分抵现金') 
							var $offer2 = $('<span/>').html('2、积分全额兑')
							$('main>section>.cub>.cubbody>.infor').append($wel).append($tip).append($a).append($offer).append($offer1).append($offer2)
						}

						function Lunbo(opt){
							this.$list = opt.ele;
							this.$banner = this.$list.parent();
							this.$img = this.$list.children().find('img');
							this.$len = this.$img.length;
							this.idx = 0;
							this.isBanner = opt.isBanner;
						}
						
						Lunbo.prototype = {
							constructor:Lunbo,

							init:function(){
								// console.log(this.$img[0])
								var imgWidth = this.$img[0].offsetWidth;
								this.imgWidth = imgWidth;

								this.timer = setInterval((this.move).bind(this),2000);


								//鼠标移入停止动画
								this.$banner.on('mouseenter',function(){
									clearInterval(this.timer)
								
								}.bind(this)).on('mouseleave',function(){
									this.timer = setInterval((this.move).bind(this),2000);
									
								}.bind(this))
									
								

								//点击前后按钮
								$('.prev').on('click',function(){
									this.idx--;
									this.show();
								}.bind(this))
								$('.next').on('click',function(){
									this.idx++;
									this.show();
								}.bind(this))

							},
							move:function(imgWidth){
									this.idx++;
									this.show();
								
							},
							show:function(){
								if(this.idx > this.$len-1){
									this.idx = 0;
								}else if(this.idx<0){
									this.idx = this.$len-1;
								}
								
								this.$list.animate({left:-this.imgWidth*this.idx})
							}

						}


						var p1 = new Lunbo({ele:$(' main>section>.banner>ul')});
						p1.init();

						$('footer').load('../html/footer.html')

				});
			})
			

			
		})
		

		

	})
})