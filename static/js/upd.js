define(["jquery","list","pop"],function($,list,pop){
    var $dom = {
        $update:$("#js_update"),
        $title:$("#js_pop_title"),
        $close:$("#js_pop_close"),
        $name:$("#js_name"),
        $type:$("#js_type"),
        $dec:$("#js_dec"),
        $submit:$("#js_submit"),
        $cancel:$("#js_cancel")
    };
    var param = {r:Math.random};
    /*弹框显示*/
    function alertShow(){
        $dom.$update.show();
        $dom.$close.on("click",function(){alertHide();});
        $dom.$cancel.on("click",function(){alertHide();});
        $dom.$submit.off("click");
        $dom.$submit.on("click",function(){submitHandle();})
    }
    /*弹框隐藏*/
    function alertHide(){
        $dom.$update.hide();
        clearData();
    }
    /*提交处理*/
    function submitHandle(){
        var attrName = $dom.$name.val();
        var attrValues = $dom.$type.val();
        var attDescription = $dom.$dec.val();
        if(!attrName){
            pop.init(3,"规格名称不能为空");
            $dom.$name.focus();
            return;
        }
        if(!attrValues){
            pop.init(3,"规格类型不能为空");
            $dom.$type.focus();
            return;
        }
        param.attrName = attrName;
        param.attrValues = attrValues.replace(/，/g,",");
        param.attDescription = attDescription;
        if(param.attrId){
            console.log("edit")
        }else{
            console.log("add")
        }

    }
    /*清除数据*/
    function clearData(){
        $dom.$name.val("");
        $dom.$type.val("");
        $dom.$dec.val("");
        param ={};
    }
    /*初始化*/
    function init(attrId,attrName,attrValues,attDescription){
        if(attrId){
            $dom.$title.text("编辑规格");
            $dom.$name.val(attrName);
            $dom.$type.val(attrValues);
            $dom.$dec.val(attDescription);
            param.attrId = attrId;
        }else{
            $dom.$title.text("添加规格");
        }
        alertShow();
    }
    return {
        init:init
    };

});