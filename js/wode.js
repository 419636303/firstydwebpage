$(function(){
	$(".login	").on("click",function(){
		$.post("http://47.104.244.134:8080/userlogin.do",{"name":$(".txt").val(),"password":$(".psw").val()},
		function(res){
			console.log(res);
			if(res.msg=="OK"){
				//window.location.href="#";
				//window.location.href="index.html";
				
				console.log(res.data.token);
				//把登录的token存入cookie中
				var obj={};
				var $token=res.data.token;
				var $username = $('.txt').val()
				//console.log($username)
				obj[0]=$token;
				obj[1]=$username;
				var objToStr = JSON.stringify(obj);
				setCookie("lart",objToStr);
				//$('body').load('index.html');
					var obj = JSON.parse(getCookie("lart"));
	//console.log(obj)

					var $user = obj[1]
					var time = new Date();
					var hour = time.getHours();
					if(hour<11&&hour>=5){
						$('.hello').html("早上好，"+$user)
					}if(hour>=11&&hour<=13){
						$('.hello').html("中午好，"+$user)
					}if(hour>13&&hour<=18){
						$('.hello').html("下午好，"+$user)
					}
					if(hour>18&&hour<=23){
						$('.hello').html("晚上好，"+$user)
					}if(hour>23&&hour<5){
						$('.hello').html("注意休息哦，"+$user)
					}


			}else{
				alert("登录失败");
			}
			
		})
	})
	var obj = JSON.parse(getCookie("lart"));
	//console.log(obj)

					var $user = obj[1]
					var time = new Date();
					var hour = time.getHours();
					if(hour<11&&hour>=5){
						$('.hello').html("早上好，"+$user)
					}if(hour>=11&&hour<=13){
						$('.hello').html("中午好，"+$user)
					}if(hour>13&&hour<=18){
						$('.hello').html("下午好，"+$user)
					}
					if(hour>18&&hour<=23){
						$('.hello').html("晚上好，"+$user)
					}if(hour>23&&hour<5){
						$('.hello').html("注意休息哦，"+$user)
					}
})



	$('.register').click(function (e) { 
		e.preventDefault();
		// window.location.href = 'register.html'
		$('article').first().load('register.html')
		$('.hello').html("")
		
	});
console.log($('article').last())