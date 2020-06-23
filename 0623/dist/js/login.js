// 登陆
$(document).ready(function(){
    $('.login .login-a').click(function(){
        $('.login-mask,.login-modal-a').css({"display":"block"});
        }); /* 
    window.onleydown=function(event){
        if(event.keyCode==27){
            $('.login-mask,.login-modal-a').css('display','none')
        }
    } */
});
//注册
$(document).ready(function(){
    $('.registered').click(function(){
        $('.login-mask,.login-modal-b').css({"display":"block"});
        }); 
    /* this.keyup=function(event){
        if(event.keyCode==27){
            $('.login-mask,.login-modal').css('display','none')
        }
    } */
});

$('.login-1-1>div').click(function(){
    $(this).addClass("active").siblings().removeClass("active"); 
    var index=$(this).index();
    $(this).parent().siblings().children().eq(index).addClass("active").siblings().removeClass("active"); 
});
 $(function(){
    $('.inp').click(function(){ 
        $(this).prop("value",""); 
    });
 });

 $(function(){
    $('.login-modal-a .login-btn input').click(function(){
        var a=$('.c1').val(); 
        var b=$('.c2').val(); 
        $.get("http://jx.xuzhixiang.top/ap/api/login.php",{
            username:a,
            password:b
        },function(data){
            console.log(data);
            if(data.code==1){
                console.log(data);
                location.href=""; 
            }else if(data.code==0){
                alert("用户不存在，请注册");
            }
        })  
    })
    $('.login-modal-b .login-btn input').click(function(){
        var a=$('.c1').val(); 
        var b=$('.c2').val(); 
        $.get("http://jx.xuzhixiang.top/ap/api/reg.php",{
            username:a,
            password:b
        },function(data){
            if(data.code==1){
                alert("注册成功");
                location.href=""; 
            }else if(data.code==0){
                alert("用户名已存在"); 
            }
        })  
    })
});
/* $('.login-modal-a .login-btn input').click(function(){
    var a=$('.c1').val(); 
    var b=$('.c2').val(); 
    $.ajax({
        url:'D:\phpStudy\WWW\website\php\login.php',
        // url:'http://jx.xuzhixiang.top/ap/api/login.php',
        type:'get',
        data:{   
            username:a,password:b,
        },
        dataType:"json", 
        success:function(res){
            var name=res.data.username;
            var psw=res.data.password;
            if((a==name)&&(b==psw)){
            console.log("登陆成功");
            $('.login-mask,.login-modal-a').css({"display":"none"});
         }  
        }
    }); 
}); */
/* $('.login-modal-b .login-btn input').click(function(){
    var a=$('.c1').val(); 
    var b=$('.c2').val(); 
    $.ajax({
        // url:'D:\phpStudy\WWW\website\php\login.php',
        url:'http://jx.xuzhixiang.top/ap/api/login.php',
        type:'get',
        data:{   
            username:a,password:b,
        },
        dataType:"json", 
        success:function(res){
            var name=res.data.username;
            var psw=res.data.password;
            if((a==name)&&(b==psw)){
            console.log("登陆成功");
            $('.login-mask,.login-modal-b').css({"display":"none"});
         }  
        }
    }); 
}); */
 