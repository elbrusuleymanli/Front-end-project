$(document).ready(function () {

$(".left").click(function(){
    $(".sign-up-content").hide();
    $(".active-content-area").show();
    $(this).css({"background":"blue","color":"white","font-weight":"bold"});
    $(".right").removeAttr('style');
    


});
$(".right").click(function(){
    $(".active-content-area").hide();
    $(".left").removeAttr('style');
    $(".sign-up-content").show();
    $(this).css({"background":"blue","color":"white","font-weight":"bold"});
    $(".left").css({"background":"none","color":"black"});
   
    
   
   
    });

});
