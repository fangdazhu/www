function productCount(){
        var $tr=$("#shopping").find("tr[id]");
        var summer=0;
        $tr.each(function(i,dom){
            var num=$(dom).children(".cart_td_6").find("input").val();//商品数量
            var price=num*$(dom).children(".cart_td_5").text();//商品小计
            $(dom).children(".cart_td_7").html(price);//显示商品小计
            summer+=price;//总价
        });
        $("#total").text(summer);
    }
    productCount();//页面加载完后运行
    //商品增加减少，flag为true时增加，flag为false时减少
    function changeNumber(dom,flag){
        var $input = $(dom).parent().find("input");
        var value = $input.val();
        if(flag){
            value++;
        }else{
            value--;
            if(value<=0){
                value=1;
                alert("充值会员时间必须大于0");
            }
        }
        $input.val(value);
        productCount();
    };
    //点击增加
    $(".cart_td_6").find("img[alt='minus']").click(function(){changeNumber(this,false);});
    //点击减少
    $(".cart_td_6").find("img[alt='add']").click(function(){changeNumber(this,true);});