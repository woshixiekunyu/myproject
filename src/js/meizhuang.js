requirejs(['config'],function(){
	requirejs(['jquery'],function(){
		$('header').load('../html/header.html',function(){
			$('.welcome span').html('您好，欢迎光临可得眼镜网！')
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


					// 轮播图
					function lunbo(opt){
						this.$list = opt.ele;
						this.$a = this.$list.children();
						this.$img = this.$list.children().children();
						this.$len = this.$list.children('a').length;
						this.$idx = 1;
					}
					lunbo.prototype= {
						constructor:lunbo,

						init:function(){

							var $div = $('<div/>').addClass('page');
							for(var i=0;i<this.$len;i++){
								var $page = $('<span/>').html(i+1).appendTo($div);
								console.log(i)
							}
							this.$list.append($div)
							$div.children()[0].classList.add('active');
							this.timer = setInterval((this.move).bind(this),3000)


							//点击前后按钮
							$('.prev').on('click',function(){
								this.$idx--;
								setInterval((this.show).bind(this),500)
							}.bind(this))
							$('.next').on('click',function(){
								this.$idx++;
								setInterval((this.show).bind(this),500)
							}.bind(this))

							this.$list.on('mouseenter',function(){
								clearInterval(this.timer);
								$('.prev').show();
								$('.next').show();
							}.bind(this)).on('mouseleave',function(){
								this.timer = setInterval((this.move).bind(this),1000);
								$('.prev').hide();
								$('.next').hide();
							}.bind(this))

							$div[0].onmouseover = function(e){
								if(e.target.tagName.toLowerCase() ==='span'){
									this.$idx = e.target.innerText;
									this.show();
								}
							}.bind(this)

							this.$div = $div;


						},
						move:function(){
							this.$idx++;
							this.show();
						},
						show:function(){
							if(this.$idx>this.$len){
								this.$idx=1;
							}else if(this.$idx<1){
								this.$idx = this.$len
							}

							for(var i=0;i<this.$div.children().length;i++){
								this.$div.children()[i].classList.remove('active');

							}
							this.$div.children()[this.$idx-1].classList.add('active');
							console.log(this.$idx)
							this.$img.attr('src','../img/meizhuang_banner'+this.$idx+'.jpg') 
						}
						
					}
					
					var l1 = new lunbo({ele:$('.banner')});
					l1.init();

					$('footer').load('../html/footer.html')
					
			});

			
		})
		

		

	})
})