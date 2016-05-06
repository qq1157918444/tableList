define(["jquery","list","pop"],function($,list,pop){
    var $dom = {
        $del:$("#js_del"),
        $warning:$("#js_warning"),
        $cancelBtn:$("#js_del_cancel_btn"),
        $okBtn:$("#js_del_ok_btn"),
        $view:$("#js_list_view")
    };
    var url = {
        query:"/micmm/attribute/isDelAttribute.do",
        del:"/micmm/attribute/delAttribute.do"
    };
    var param = {r:Math.random};
    function alertShow(){
        $dom.$warning.html("确定删除此规格？");
        $dom.$del.show();
    }
    function alertHide(){
        $dom.$cancelBtn.parent("li").show();
        $dom.$del.hide();
    }
    function delSuccess(data){
        if(data.resCode == 1){
            pop.init(3,"删除成功");
            var $trs = $dom.$view.find("table tbody tr");
            $.each($trs,function(index,value){
                if(param.num == index){
                    $(this).remove();
                }
            });
            //list.init();
        }else{
            pop.init(3,"删除失败");
        }
    }
    function delError(){pop.init(3,"接口错误");}
    function delHandle(){
        $.post_(url.del,param,delSuccess,delError);
    }
    function querySuccess(data){
        alertShow();
        if(data.resCode == 1){
            $dom.$cancelBtn.on("click",function(){alertHide();});
            $dom.$okBtn.off("click");
            $dom.$okBtn.on("click",function(){delHandle();});
        }else{
            $dom.$warning.text(data.msg);
            $dom.$cancelBtn.parent("li").hide();
            $dom.$okBtn.on("click",function(){alertHide();});
        }
    }
    function queryError(){pop.init(3,"接口错误");}
    function queryHandle(){
        $.post_(url.query,param,querySuccess,queryError);
    }
    function init(attrId,num){
        if(!attrId){return;}
        param.attrId=attrId;
        param.num=num;
        queryHandle();
    }
    return {
        init:init
    };

});