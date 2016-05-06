define(["jquery","request","doT","pop"],function($,request,doT,pop){
    var $dom = {
        $view:$("#js_list_view"),
        $temp:$("#js_list_temp").html()
    };
    function getData(){
        $.getJSON("sku.json",function(data){
            if(data.resCode == 1){
                render(data.data);
            }else if(data.resCode == 0){
                pop.init(3,data.msg)
            }
        });
    }
    function render(data){
        $dom.$view.html(doT.template($dom.$temp)(data));
    }
    function init(){
        getData();
    }
    return {
        init:init
    };
});