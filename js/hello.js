	var obj = JSON.parse(getCookie("lart"));
	//console.log(obj)

var $user = obj[1]
var time = new Date();
var hour = time.getHours();
if(hour<11&&hour>=5){
	$('.login').html("早上好，"+$user)
}if(hour>=11&&hour<=13){
	$('.login').html("中午好，"+$user)
}if(hour>13&&hour<=18){
	$('.login').html("下午好，"+$user)
}
if(hour>18&&hour<=23){
	$('.login').html("晚上好，"+$user)
}if(hour>23&&hour<5){
	$('.login').html("注意休息哦，"+$user)
}

