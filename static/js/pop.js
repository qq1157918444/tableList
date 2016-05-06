define(["jquery","countDown"],function($,countDown){
    var $dom = {
        $body:$("body")
    };
    var str="";
    function okDom(){
        var dom = '<div class="m-pop-waning js-pop-warning">'+
            '<p class="part part1"><i></i><span>保存成功</span></p>'+
            '<p class="part part3">窗口将于<span class="js-warning-count"></span>秒钟后自动关闭</p>'+
            '</div>';
        return dom;
    }
    function falseDom(){
        var dom = '<div class="m-pop-waning js-pop-warning" >'+
            '<p class="part part2"><i></i><span>保存失败</span></p>'+
            '<p class="part part4">请重新操作！</p>'+
            '<p class="part part3">窗口将于<span class="js-warning-count"></span>秒钟后自动关闭</p>'+
            '</div>';
        return dom;
    }
    function alertDom(title){
        var dom = '<div class="m-pop-waning js-pop-warning">'+
            '<p class="part part5">'+title+'</p>'+
            '</div>';
        return dom;
    }
    var init = function(num,title){
        var delayTime = "";
        if(num == 1){//保存成功
            str = okDom();
            delayTime = "3100";
        }else if(num == 2){//保存失败
            str = falseDom();
            delayTime = "3100";
        }else if(num == 3){//提示弹框
            str = alertDom(title);
            delayTime = "1000";
        }
        if($(".js-pop-warning").length == 0){
            $dom.$body.append(str);
        }
        countDown.init($(".js-warning-count"));
        setTimeout(function(){$(".js-pop-warning").remove();},delayTime)
    };
    return {
        init:init
    };
});