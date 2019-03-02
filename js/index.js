$('section').load('1.html')
$('.gouwuche').click(function(){
	$(this).css({'color':'yellow'}).siblings().css({'color':'white'})
	$('section').load('2.html')
})
$('.shouye').click(function(){
	$(this).css({'color':'yellow'}).siblings().css({'color':'white'})
	$('section').load('1.html')
})

$('.my').click(function(){
	$(this).css({'color':'yellow'}).siblings().css({'color':'white'})
	$('section').load('wode.html')
})

$('.menu').click(function(){
	//console.log("aa")
	$('*').animate({'left':'3rem'});
	//$('.menu').animate({'left':'-3rem'})
})
