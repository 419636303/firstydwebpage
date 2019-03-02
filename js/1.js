

var i = 0
setInterval(function(){
	i++;
	if(i>2){
		i=0
	}
	//console.log(i)
	$(".bannerlist li").eq(i).fadeIn(600).siblings().fadeOut(600);
	$(".dian li").removeClass('active').eq(i).addClass('active')
	//console.log($('.bannerlist li'))
	
},2000)

$(function(){
	var oList = document.getElementById("prodList");
	/*var oNum = document.getElementById("num");
	var oLink = oNum.children[0];*/
	console.log('aa')
	var url = "http://47.104.244.134:8080/goodsbytid.do";
	$.get(url,{tid:13,page:1,limit:13},function(res){
		console.log(res);
		var str = "";
		for(var i=1;i<res.data.length;i++){
			str += "<li><a href='Details page.html?id="+res.data[i].id+"'><img src='"+res.data[i].picurl+"'/><b>"+res.data[i].id+"</b><p class='goods'>"+res.data[i].name+"</p><p class='goodspri'>"+res.data[i].price+"</p></a><input type='button' class='addbtn' value='添加购物车' data-id='"+res.data[i].id+"'></li>";
			
						
		}
		
		oList.innerHTML = str;
		//点击跳转到详情页
		var obj1 ={};
		$("img").each(function(){
			$(this).click(function(){
				var $id=$(this).parent().find("b").html();
				console.log($id);
				if(obj1[$id]==undefined){
						obj1[$id]=1;
					}else{
						obj1[$id]+=1;
					}
					var objToStr = JSON.stringify(obj1);
					setCookie("hart",objToStr,7);
			})
		})
		
		var aBtns = document.querySelectorAll(".addbtn");
		console.log(aBtns)
		/*if(getCookie("cart")){
			var obj = JSON.parse(getCookie("cart"));
			var num = 0;
			for(var i in obj){
				num+=obj[i];
			}
			oLink.innerHTML = num;
		}else{
			var obj={};
		}*/
		if(getCookie("lart")){
			var obj = JSON.parse(getCookie("lart"));
			console.log(obj)
		}
		var token = obj[0];
		console.log(token);
		for(var i =0;i<aBtns.length;i++){
			aBtns[i].onclick = function(){
				var id = this.getAttribute("data-id");
				var url = " http://47.104.244.134:8080/cartsave.do";
				$.get(url,{gid:id,token:token},function(res){
					console.log(res);
				})
				/*if(obj[id]==undefined){
					obj[id]=1;
				}else{
					obj[id]+=1;
				}
				var url1=""
				var num = 0;
				for(var i in obj){
					num+=obj[i];
				}
				oLink.innerHTML = num;*/
				/*var objToStr = JSON.stringify(obj);
				setCookie("cart",objToStr,7);*/
			}
		}
	})
	
	
	
	
})
