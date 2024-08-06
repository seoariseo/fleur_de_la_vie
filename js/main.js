$(function () {
    $(".menu_btn").click(function () {
        $(this).toggleClass("act")
    }) //menu_btn.click


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

    })






}) //jquery