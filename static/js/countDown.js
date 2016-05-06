define(function(){
    var count = 3;
    var clearCountDown = "";
    /*倒计时*/
    function init($count){
        run($count);
        clearCountDown =  setInterval(function() {
            run($count);
        },1000);
    }
    function run($count){
        if (count == 0) {
            $count.html(count);
            count = 3;
            clearInterval(clearCountDown);
        } else {
            $count.html(count);
            count--;
        }
    }
    return {
        init:init
    };
});