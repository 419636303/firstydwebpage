$('.register').click(function(){
    var url = "http://47.104.244.134:8080/usersave.do"
    var $user = $('.txt').val()
    var $psw = $('.psw').val()
    var $eml = $('.eml').val()
   // console.log($user)
    $.post(url,{"username":$user,"password":$psw,"email":$eml},
        function (res) {
            console.log(res)
            if(xmlhttp.Status == 500){
                alert("注册失败")
            }else{
                alert('成功')
            }
        }
    );
})