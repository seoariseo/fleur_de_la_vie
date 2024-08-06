$(function(){

    $(".home_btn").hover(function(){
        $(".s_box").fadeOut(500);
        $(".s_box2").fadeIn(600);
        
    },function(){
        $(".s_box2").hide();
        $(".s_box").show();

    })


})//jquery