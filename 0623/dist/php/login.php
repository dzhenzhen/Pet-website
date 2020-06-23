<?php
    $name=$_GET['name'];
    $pwd=$_GET['pwd'];
    $arr=[
        'msg'=>'{
             "code":1,"msg":"\u767b\u5f55\u6210\u529f","data":{"id":"1","appid":"","username":"111","password":"1111","status":"0","identity":"0","is_delete":"0","token":"22eb6bedf03b0571db9660c3680d7da6"}
            
        }',
        'data'=>[
            'username' => $name,
            'password' => $pwd,
        ]
        ];
        echo json_encode($arr); 
        // "code":1,"msg":"\u767b\u5f55\u6210\u529f","data":{"id":"2","appid":"","username":"112","password":"2222","status":"0","identity":"0","is_delete":"0","token":"22eb6bedf03b0571db9660c3680d7da6"}
        // "code":1,"msg":"\u767b\u5f55\u6210\u529f","data":{"id":"2","appid":"","username":"113","password":"3333","status":"0","identity":"0","is_delete":"0","token":"22eb6bedf03b0571db9660c3680d7da6"}
        // "code":1,"msg":"\u767b\u5f55\u6210\u529f","data":{"id":"3","appid":"","username":"114","password":"4444","status":"0","identity":"0","is_delete":"0","token":"22eb6bedf03b0571db9660c3680d7da6"}
        // "code":1,"msg":"\u767b\u5f55\u6210\u529f","data":{"id":"5","appid":"","username":"115","password":"5555","status":"0","identity":"0","is_delete":"0","token":"22eb6bedf03b0571db9660c3680d7da6"}
?>


