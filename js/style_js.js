
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

});



