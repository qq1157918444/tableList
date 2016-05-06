require.config({
    paths:{
        jquery:"../js/lib/jquery-1.11.0.min",
        doT:"../js/lib/doT.min",
        request:"./request",
        pop:"./pop",
        countDown:"./countDown",
        list:"./list",
        upd:"./upd",
        del:"./del"
    },
    shim:{
        'jquery': {
            exports: '$'
        },
        'request': {
            deps: ['jquery'],
            exports: 'request'
        },
        'doT': {
            deps: ['jquery'],
            exports: 'doT'
        },
        'pop': {
            deps: ['jquery'],
            exports: 'pop'
        },
        'countDown': {
            deps: ['jquery'],
            exports: 'countDown'
        },
        'list':{
            deps: ['jquery','doT'],
            exports: 'list'
        },
        'upd':{
            deps: ['jquery'],
            exports: 'upd'
        },
        'edit':{
            deps: ['jquery'],
            exports: 'edit'
        },
        'del':{
            deps: ['jquery'],
            exports: 'del'
        }
    }
});

require(["jquery","list","upd","del"],function($, list, upd, del){
    var $dom = {
        $btn:$("#js_add_btn"),
        $view:$("#js_list_view")
    };
    list.init();
    $dom.$btn.off("click");
    $dom.$btn.on("click",function(){
        upd.init();
    });
    $dom.$view.off("click");
    $dom.$view.on("click",".js-edit",function(){
        var attrId = $(this).data("attrid");
        var attrName = $(this).data("attrname");
        var attrValues = $(this).data("attrvalues");
        var attDescription = $(this).data("attdescription");
        upd.init(attrId,attrName,attrValues,attDescription);
    });
    $dom.$view.on("click",".js-del",function(){
        var attrId = $(this).data("attrid");
        var index = $(this).parents("tr").index();
        del.init(attrId,index);
    });

});