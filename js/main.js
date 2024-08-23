
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


    // var images = $(".box");
    //             console.log(images.length)         

    //         i = 0;
    //         setInterval(function(){

    //             if( i % 2 == 0 ){

    //                 images.eq(i).animate({left: "0"}, 1000).delay(2000).animate({left: "-100%"}, 1000, function () {
    //                     $(this).css({left:"-100%"}) })
    //                     if( i == 3){
    //                         i=0
    //                     }else{
    //                         i++
    //                     }//

    //             } else {
    //                 images.eq(i).animate({right: "0"}, 1000).delay(2000).animate({right: "-100%"}, 1000, function () {
    //                     $(this).css({right:"-100%"}) })

    //                     if( i == 3){
    //                         i=0;
    //                     }else{
    //                         i++;
    //                     }//

    //             } 
                

    //         }, 3000)//







    // best flower 영역
    
    $(".bf_img_list > li ").hover(function(){
        $(this).siblings().css({opacity : "0.5"})
        $(".bf_sub").hide();
        $(this).find(".bf_sub").slideDown();
        $(".plant_section").css({"z-index" : "-1"});
        
    },function(){
        $(".bf_img_list > li" ).css({opacity : "1"});
        $(".bf_sub").stop().slideUp();
        $(".plant_section").css({"z-index" : "0"});
    })

    $(".bf_sub").hover(function(){
        $(this).stop();
    },function(){
        $(".bf_sub").slideUp();
    })//



//     var p_images = $(".box_2");
//     console.log(images.length)         

// j = 1;
// setInterval(function(){

//     if( j % 3 == 0 ){

//         p_images.eq(j).animate({left: "0"}, 1000).delay(2000).animate({left: "-100%"}, 600, function () {
//             $(this).css({left:"-100%"}) })
//             if( j == 1){
//                 j=0
//             }else{
//                 j++
//             }//

//     } else {
//         p_images.eq(j).animate({right: "0"}, 1200).delay(2000).animate({right: "-100%"}, 600, function () {
//             $(this).css({right:"-100%"}) })

//             if( j == 1){
//                 j=0;
//             }else{
//                 j++;
//             }//

//     } 
    

// }, 2500)//





    // best plant 영역

    $(".bp_img_list > li ").hover(function(){
        $(this).siblings().css({opacity : "0.5"})
        $(".bp_sub").hide();
        $(this).find(".bp_sub").slideDown();
        
    },function(){
        $(".bp_img_list > li" ).css({opacity : "1"});
        $(".bp_sub").stop().slideUp();
    })

    $(".bp_sub").hover(function(){
        $(this).stop();
    },function(){
        $(".bp_sub").slideUp();
    })//



    $(".main > li , .sub_menu").hover(function(){
        $(this).children(".sub_menu").stop().slideDown(500);

    },function(){
        $(".sub_menu").stop().slideUp("fast");

    })//(".main > li , .sub_menu").hover


    $(".menu_btn").click( function(){
        $(".menu_pop").css({left : "0", display : "block" });
        $(".pop_bg").fadeIn(500);
    })//click
    
    $(".menu_closeBtn").click(function(){
        $(".menu_pop").css({left : "-100%"})
        $(".pop_bg").fadeOut(200);
    })//(".menu_closeBtn").click




}) //jquery


