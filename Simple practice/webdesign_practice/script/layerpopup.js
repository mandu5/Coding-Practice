$(".layerPopup").click(function(){
    //$(".layer").css("display","block");
    $(".layer").show();
    $(".layer-bg ").show();
});
$(".layer .close").click(function(){
    //$(".layer").css("display","none");
    $(".layer").hide();
    $(".layer-bg ").hide();
});
