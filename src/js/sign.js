requirejs(['config'],function(){
	requirejs(['jquery'],function(){
		console.log($('header'))
		$('header').load('../html/header.html')
	})
})