
requirejs(['config'],function(){
	requirejs(['jquery'],function(){
		
		$('.welcome span').html('您好，欢迎光临可得眼镜网！');

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

				var $div = $('<div/>').addClass('page')
				for(var i=0;i<this.$len;i++){
					var $page = $('<span/>').html(i).appendTo($div);
					console.log(i)
				}
				
				this.$banner.append($div)
				$div.children()[0].classList.add('active');


				//鼠标移入停止动画
				this.$banner.on('mouseenter',function(){
					clearInterval(this.timer)
					$('.prev').show();
					$('.next').show();
				}.bind(this)).on('mouseleave',function(){
					this.timer = setInterval((this.move).bind(this),2000);
					$('.prev').hide();
					$('.next').hide();
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

				$div[0].onmouseover = function(e){
					if(e.target.tagName.toLowerCase() ==='span'){
						this.idx = e.target.innerText;
						this.show();
					}
				}.bind(this)


				this.$div = $div;
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
				for(var i=0;i<this.$div.children().length;i++){
					this.$div.children()[i].classList.remove('active');
				}
				if(this.isBanner){
					if(this.idx == 1){
						$('main section').attr('style','background-color:rgb(255, 224, 230)');
					}else if(this.idx ==2){
						$('main section').attr('style','background-color:rgb(214, 40, 41)');
					}else if(this.idx ==3){
						$('main section').attr('style','background-color:rgb(254, 220, 37)');
					}else if(this.idx == this.$len-1){
						$('main section').attr('style','background-color:rgb(255, 246, 250)');
					}else{
						$('main section').attr('style','background-color:rgb(255, 255, 255)');
					}
					
				}
				this.$div.children()[this.idx].classList.add('active');
				this.$list.animate({left:-this.imgWidth*this.idx})
			}

		}


		var p1 = new Lunbo({ele:$('.banner ul'),isBanner:true});
		p1.init();

		var $list = $('main section aside');
		$list.children().children('li').children('.content').hide();
		$list.on('mouseenter','>ul>li',function(){

			for(var i=0;i<$list.children().children('li').length;i++){
				$(this).siblings().removeClass('border').addClass('bdr');
			}
			$(this).children('.content').show();
			$(this).removeClass('bdr').addClass('border').children('h3').children('a').children('i').hide();
		}).on('mouseleave','li',function(){
			$(this).children('.content').hide();
			$(this).removeClass('border').children('h3').children('a').children('i').show();
			$(this).siblings().removeClass('bdr')
			
		})
	})
		
}) 