$(function () {


    // toggle-button : open&close
    $("#toggle-button").click(function () {
        $("nav.menu").slideToggle(function () {
            if ($(this).is(':visible')) {
            } else {

            }
        });
    });


    // logo click : scroll top
    $(" .logo, .btn_top").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });

    // scroll action
    $(window).scroll(function () {

        // btn_top
        if ($(this).scrollTop() > 150) {
            $(".btn_top").fadeIn();
        } else {
            $(".btn_top").fadeOut();
        }
    });


    $('.best-list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,

        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '0',
                }
            }
        ]
    });




});