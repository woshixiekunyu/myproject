requirejs(['config'],function(){
	requirejs(['jquery'],function(){
		$('header').load('../html/header.html',function(){
			requirejs(['header'],function(){
				var cookie = document.cookie.split('; ')
				var isuser;
				cookie.forEach(function(item){
					var arr = item.split('=');

					if(arr[0] === 'isuser'){
						isuser = arr[1]
					}
				})
				if(isuser){
					$.ajax({
						url:'../../dist/getsql.php',
						dataType:'json',
						success:function(data){
							if(data.length<=0){
								$('table').remove();
								$('.allmoney').html('总计(不含运费):￥0.00')
								return false;
							}else{

								$('#null').remove();
								var money = 0;
								data.forEach(function(item,idx){
									$('<tr/>').html(`
										<td><img src="${item.img}"></td>
										<td>商品编号:${item.numbers}</td>
										<td>${item.goodsName}</td>
										<td>￥${item.price}</td>
										<td><button>删除</button></td>
									`).appendTo($('tbody'))
									money+=Number(item.price);
									return money;
								});
								
								$('.allmoney').html('总计(不含运费):￥'+money)
							}	
						}
					})
				}else{
					$('table').remove();
					$('.allmoney').html('总计(不含运费):￥0.00')
					return false;
				}
			})
			$('footer').load('../html/loginfooter.html',function(){
				$('footer').css('backgroundColor','#eee')
			});
		})
	})
})