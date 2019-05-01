
jQuery().ready(function () {
    "use strict"
    $('.slider').ripples({
        dropRadius: 13,
        perturbance: 0.01

    });


    $(".text").typed({
        strings: [" <strong> i love </strong> <strong class='primary'>codings .</strong>", "<strong>and to </strong>  <strong class='primary'>share !!</strong>"],
        typeSpeed: 0,
        loop:true

    });

    $(window).scroll(function() {

        var top = $(window).scrollTop();
        if(top >=60){

            $("nav").addClass('secondary')
        }else
        if($("nav").hasClass('secondary')){
            $("nav").removeClass('secondary');
        }

    });

    $('.work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $("#team-members").owlCarousel({
        items:3,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true,
        responsive:{

            0:{
                items:1
            },

            480:{
                items:1
            },

            768:{
                items:3
            }
        }
    });

    $('.counter').counterUp({
        delay: 10,
        time: 4000
    });

    $('.smooth-scroll').smoothScroll();

});



