var url = 'http://47.104.244.134:8080/cartlist.do';
var obj = JSON.parse(getCookie('lart'))
//var oList = document.getElementsByClassName('oList');
console.log(obj)
$.get(url, {token:obj[0]},function (res) {
       console.log(res);
       // console.log(token)
       var str = ""
      for(var i = 0 ;i<res.length;i++){
        
       // str+="<p>+res[i].goods.name+</p>"
       str += "<li><p class='sp_id'><b>" + res[i].id + "</b></p><img src='" + res[i].goods.picurl + "'><span class='C-gid'>" + res[i].gid + "</span><p class='C-mz'>" + '&nbsp' + res[i].goods.name + "</p><span class='C-jg'>" + res[i].goods.price + "</span><span class='jia'>" + '+' + "</span><span class='C-sl'>" + res[i].count + "</span><span class='jian'>" + '-' + "</span><span class='C-sum'>" + res[i].goods.price * res[i].count + "</span><span class='del' >" + '&nbsp' + '删除' + "</span></li>"
        
}
$('.oList').html(str)   
console.log($('.del'))
       $('.del').click(function(){
           console.log('aa')
        var url1 = 'http://47.104.244.134:8080/cartupdate.do';
        var gid = $(this).parent().find('.C-gid').html()
        var id = $(this).parent().find('b').html()
            $(this).parent().remove();
            $.get(url1, {id:id,gid:gid,num:0,token:obj[0]},
                function (res) {
                    console.log(res)
                }
            );
        })
      
      
      //oList.innerHTML = str
   
    }
    
);

/*if($(".oList:has('li')").length){
// 有
}else{
$('.oList').html('空空如也')
}*/