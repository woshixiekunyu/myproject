requirejs(['config'],function(){
	requirejs(['jquery'],function(){
		$('header').load('../html/header.html',function(){
			requirejs(['header'],function(){
				$('body>nav').load('../html/nav.html',function(){

					$.ajax({
						url:'http://localhost/myproject/dist/mysql.php',
						dataType:'JSON',
						success:function(data){
							$('<img/>').attr('src',data[0].bigimg).appendTo($('.box'));
							console.log(data[0])
						}
					})

					$('footer').load('../html/footer.html')
				});
			})
		})
	})
})