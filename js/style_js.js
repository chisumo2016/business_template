
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

});



