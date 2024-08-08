
$(function () {


    //메뉴 영역

    $(".menu_btn").click(function () {
        $(this).toggleClass("act")
    }) //menu_btn.click



    //slick 영역

    $(".m_img").slick({
        autoplay: true,
        arrows:true,
        dots: true,
        slidesToShow: 1,
        responsive: [{
            breakpoint: 430,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        } ]

    })//slick








    // best flower 영역
    
    $(".bf_img_list > li ").hover(function(){
        $(this).siblings().css({opacity : "0.5"})
        $(".bf_sub").hide();
        $(this).find(".bf_sub").slideDown();
        
    },function(){
        $(".bf_img_list > li" ).css({opacity : "1"});
        $(".bf_sub").stop().slideUp();
    })

    $(".bf_sub").hover(function(){
        $(this).stop();
    },function(){
        $(".bf_sub").slideUp();
    })//

    







}) //jquery