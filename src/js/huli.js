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

						
						var ul = $('<ul/>')[0];
						$.ajax({
							url:'http://localhost/myproject/dist/mysql.php',
							dataType:'JSON',
							success:function(data){
								ul.innerHTML = data.map(function(item){
									return `
										<li>
											<a target="_blank"><img src="${item.img}" data-set="${item.id}"></a>
											<p><i>￥</i>${item.price}</p>
											<a href="#">${item.goodsName}</a>
											<p>${item.decription}</p>
											<p><i style="background:url('${item.bgimg}')"></i><span>有<a href="#">${item.disc}</a>评论</span></p>
										</li>
									`
								}).join('');
								$('main>section>.goodlists').append($(ul))

								var $list = $('main>section>.goodlists>ul').children();
								var $div = $('<div/>').addClass('collect');
								var $addcar = $('<span/>').addClass('addcar').appendTo($div).html('加入购物车');
								var $i = $('<i/>').appendTo($addcar);

								var $collect = $('<span/>').appendTo($div).html('收藏');
								var $i = $('<i/>').appendTo($collect);
								$list.append($div);

								var $lists = $('main>section>.goodlists>ul');
								$lists.on('click','img',function(){
									var $id = $(this).attr('data-set');

									document.cookie = 'id='+$id+';path:/';

									location.href = 'details.html';
								}).on('click','.addcar',function(){
									var currentImg = $(this).parent().parent().children().has('img')
									var cloneImg = currentImg.children().clone().addClass('cloneImg')
													.css('left',currentImg[0].offsetLeft)
													.css('top',currentImg[0].offsetTop).appendTo(currentImg);
									// console.log(cloneImg.offset().top)
									//  
									var yspeed = -10;
									var topTarget = cloneImg.offset().top;
				                    var timer = setInterval(()=>{
				                    	var currentTop = cloneImg[0].offsetTop;
				                        yspeed-=20;

				                        // 当currentTop到达目标值后，停止定时器
				                        if(currentTop <= -topTarget){
				                            clearInterval(timer);
				                            
				                        }

				                        cloneImg[0].style.top = currentTop + yspeed + 'px';
				                    },50);
				                    console.log(currentImg.offset().left)
				                    cloneImg.animate({left:-currentImg.offset().left,width:5},function(){
				                        // 删除用于动画的图片

				                       cloneImg.remove();

				                        // 停止top抛物线定时器
				                        clearInterval(timer);
				                    });


				                    
									$.ajax({
										url:'../../dist/mysql.php',
										dataType:'json',
										success:function(data){
											var carCookie = document.cookie;
											var okaddcar = carCookie.includes("isuser");
											if(okaddcar === false){
												alert('请登录')
												return false;
											}
											if(okaddcar){
												
												// console.log(cookiearr[0])
												
												var $res = $(this).parent().parent().children().has('img').children().attr('data-set');
												
												var $numbers = data[$res-1].number;
												console.log($numbers)
												var $img = data[$res-1].img;
												var $goodName = data[$res-1].goodsName;
												var $price = data[$res-1].price;
												// console.log($goodName)

												// // var now = new Date();
												// // now.setDate(now.getDate()+30)
												// // document.cookie = '$id=' + res +';expires=' + now+';path=/';

												$.ajax({
													url:'../../dist/writein.php',
													dataType:'json',
													data:{id:$res,numbers:$numbers,img:$img,goodsName:$goodName,price:$price,$goodsNum:5}
												})
											}
										}.bind(this)
									})

								})
							}
						})
						

						$('footer').load('../html/footer.html')
				});
			})
			

			
		})
		

		

	})
})