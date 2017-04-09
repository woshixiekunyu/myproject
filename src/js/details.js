requirejs(['config'],function(){
	requirejs(['jquery'],function(){
		$('header').load('../html/header.html',function(){
			requirejs(['header'],function(){
				$('body>nav').load('../html/nav.html',function(){
					$('main>nav .goodslists>ul').hide();
					$('main nav .goodslists').children().children('li').children('.content').hide();
					//获取导航列表的位置

					var $listTop = $('main>nav').outerHeight();
					var $listWid = $('main>nav .goodslists').outerWidth();
					// console.log($listWid)
					// var $listLeft = $('main>nav>.goodslists').offset().left;
					// console.log($('main>nav .goodslists .content'))

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

					

					//获取数据
					$.ajax({
						url:'http://localhost/myproject/dist/mysql.php',
						dataType:'JSON',
						success:function(data){
							
							var cookie = document.cookie;
							// console.log(cookie)
							var cookiearr = cookie.split('; ');
							console.log(cookiearr[0])
							var res = Number(cookiearr[0].match(/\d/)[0]);
							// console.log(res)
							for(var i=0;i<=data.length;i++){
								if(i === res){
									var bigimgarr =  data[i-1].bigimg.split('?');
									$('.zoomimg>.img')[0].innerHTML = bigimgarr.map(function(item,idx){
										return `
											<img src="${item}" data-id="${idx}"/>
										`;
									}).join('');

									$('.control>h3').html(data[i-1].goodsName);
									$('.control>p').html(data[i-1].decription);
									var res = data[i-1].oldprice - data[i-1].price;
									$('.discount>.price').html(`<span class="smalltip">促销价:</span><i>￥${data[i-1].price}</i><div class="tips"><b>已降${res}.00元</b></div><span>可得价：</span><i>￥${data[i-1].oldprice}</i><span>赠送积分：</span><i>${data[i-1].extra}积分</i>`);
									$('.discount>.num').html(`<span>商品编号：</span><i id="goodsNum">${data[i-1].number}</i><span>库存状况：</span><i>${data[i-1].kucun}</i>`);
									var infor = data[i-1].cuxiao;
									var inforarr = infor.split('?');
									for(var j=0;j<inforarr.length-1;j++){
										var $span = $('<span/>').html(inforarr[j]);
										$('.cuxiaoinfor').append($('<p/>').append($('<span/>').addClass('bgspan').html('赠品')).append($span));
									}
									if(j==inforarr.length-1){
										$('.cuxiaoinfor').append($('<p/>').append($('<span/>').addClass('bgspan').html('换购')).append($('<span/>').html(inforarr[j])));
									}
									

									var $zoomlist = $('.buy_goods>.zoomimg>.imglist ul');

									
									var allimg = data[i-1].smallimg;
									// console.log(i)
									var imgarr = allimg.split('?');
									
									$zoomlist[0].innerHTML = imgarr.map(function(item,idx){
										// console.log(item)
										return `
											<li>
												<img src="${item}" data-id="${idx}"/>
											</li>
										`
									}).join('');


									var $lens = $zoomlist.children().length;
									
									$zoomlist.css('width',$lens*$zoomlist.children()[0].offsetWidth+$lens-1*5)
									// console.log($zoomlist.css('width'))
									// 
									//给第一个设定高亮
									$zoomlist.children().eq(0).addClass('imgborder');
									$('.zoomimg>.img').children().eq(0).show().siblings().hide();

									$zoomlist.on('mouseenter','li',function(){
										$(this).addClass('imgborder').siblings().removeClass('imgborder');
										var $index = $(this).children('img').attr('data-id');
										// console.log($index)
										for(var i=0;i<$('.zoomimg>.img').children().length;i++){
											$('.zoomimg>.img').children().hide();
										}
										$('.zoomimg>.img').children().eq($index).show().siblings().hide();
										// console.log($('.zoomimg>.img').children())
									})

									var $idx = 0;
									$zoomlist.parent().prev().on('click',function(){
										$idx--;
										if($idx<=5-$lens){
											$idx = 5-$lens;
										}
										var $left = ($zoomlist.children().eq(0).outerWidth()+5)*$idx;
										$zoomlist.css('left',$left);

									})
									$zoomlist.parent().next().on('click',function(){
										$idx++;
										// console.log($idx)
										if($idx>=0){
											$idx=0;
										}
										var $left = ($zoomlist.children().eq(0).outerWidth()+5)*$idx;
										$zoomlist.css('left',$left);
									})
									break;
								}
							}


							function zoom(ele){
								this.ele = ele;
								this.img = ele.children();
							}

							zoom.prototype = {
								constructor:zoom,
								init:function(){
									var $self = this.ele;
									var $bigbox = $('<div/>').addClass('bigbox')
										.css('left',this.ele.offset().left+this.ele.outerWidth()+10)
										.css('top',this.ele.offset().top);
									var $zoom = $('<span/>').addClass('zoom');

									
									var radian;

									this.ele.on('mouseenter','img',function(){
										var $idx = $(this).children().attr('data-id');
										// console.log($(this))

										//生成大图
										
										var abcd = $('<img/>').attr('src',this.src)
										.attr('data-id',$idx).appendTo($bigbox);

										//添加放大镜
										$zoom.appendTo($(this).parent());

										//添加大盒子
										$('body').append($bigbox)
										

										
									}).on('mouseleave',function(){
										// console.log(this)
										$zoom.remove();
										$bigbox.remove();
										$bigbox.children().remove()
										// this.remove();
										// console.log(this.ele)
									}.bind(this))

									this.ele[0].onmousemove =function(e){
										// console.log(this.ele.children()[0])
										// console.log(this.ele[0].offsetLeft-$zoom.outerWidth()/2)
										var left = e.pageX-this.ele[0].offsetLeft-$zoom.outerWidth()/2;
										var top = e.pageY-this.ele[0].offsetTop-$zoom.outerHeight()/2;
										if($bigbox.children()[0]){
											radian = this.ele[0].offsetWidth/$($bigbox).children()[0].offsetWidth;
											// console.log(radian)
											// console.log(this.ele[0])
											$zoom.css('width',$bigbox.outerWidth()*radian)
											$zoom.css('height',$bigbox.outerHeight()*radian)
											this.move(left,top,radian)

										}	
									}.bind(this)

									this.$bigbox = $bigbox;
									this.$zoom = $zoom;
								},
								move:function(left,top,radian){
									// console.log(this.ele)
									if(left<0){
										left=0;
									}else if(left >= this.ele[0].offsetLeft+this.ele.outerWidth()-this.$zoom.outerWidth()-32){
										
										left = this.ele.offset().left+this.ele.outerWidth()-this.$zoom.outerWidth()-32;
									}
									if(top<0){
										top=0;
										// console.log(this.ele.offset().top,top)
									}else if(top >= this.ele.children().outerHeight()-this.$zoom.outerHeight()){
										// console.log(this.ele.children().outerHeight)
										top = this.ele.children().outerHeight()-this.$zoom.outerHeight();
									}
									// console.log(left,top)
									this.$zoom.css('left',left)
									this.$zoom.css('top',top)
									// console.log(this.$bigbox.children())
									this.$bigbox.children().css('left',-left/radian)
									this.$bigbox.children().css('top',-top/radian)
									
								},
								
							}

							var z1 = new zoom($('.zoomimg>.img'));
							z1.init();



							$('.buyselect').on('click','.add',function(){
								$('#goodsNum')[0].value++;
							}).on('click','.cut',function(){
								$('#goodsNum')[0].value--;
								if($('#goodsNum')[0].value<1){
									$('#goodsNum')[0].value=1;
								}

							}).on('click','.addcar',function(){
									var carCookie = document.cookie;
									var okaddcar = carCookie.includes("isuser");
									if(okaddcar === false){
										alert('请登录')
										return false;
									}
									if(okaddcar){
										
										var carCookiearr = carCookie.split('; ');
										// console.log(cookiearr[0])
										var $res = Number(carCookiearr[0].match(/\d/)[0]);
										
										var $numbers = $('#goodsNum').html();
										var $img = data[$res-1].img;
										var $goodName = data[$res-1].goodsName;
										var $price = data[$res-1].price;
										console.log($goodName)

										// var now = new Date();
										// now.setDate(now.getDate()+30)
										// document.cookie = '$id=' + res +';expires=' + now+';path=/';

										$.ajax({
											url:'../../dist/writein.php',
											dataType:'json',
											data:{id:$res,numbers:$numbers,img:$img,goodsName:$goodName,price:$price,$goodsNum:5}
											
										})
									}

							})

						}
					})

					$('footer').load('../html/footer.html')
				});
			})
		})
	})
})