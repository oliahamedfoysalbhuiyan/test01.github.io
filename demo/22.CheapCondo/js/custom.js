// -------------------------------  -(Start) -----------------------------------//


// -------------------------------  -(END) ------------------------------------//

// ------------------------------- FAQ -(Start) -----------------------------------//

//faq toggle stuff 
$('.togglefaq').click(function (e) {
    e.preventDefault();
    var notthis = $('.active').not(this);
    notthis.find('.fa-minus').addClass('fa-plus').removeClass(' fa-minus');
    notthis.toggleClass('active').next('.faqanswer').slideToggle(500);
    $(this).toggleClass('active').next().slideToggle("fast");
    $(this).children('i').toggleClass('fa-plus fa-minus');
});
// ------------------------------- FAQ -(END) ------------------------------------//




//--------------------------------  scrolling -(Start)  ------------------------------------//
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".header_part").addClass("scrolling");
    } else {
        $(".header_part").removeClass("scrolling");
    }
});
///-------------------------------- scrolling -(End) --------------------------------------//
// -------------------------------- WOW -(Start) ----------------------------------------- //
new WOW().init();
// -------------------------------- WOW -(END) ----------------------------------------- //
// -------------------------------- TESTMONIAL -(Start) ---------------------------------- //
$(function () {
    $('.slick_slide').slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: '<i class="fas fa-arrow-left left_arrow">',
        nextArrow: '<i class="fas fa-arrow-right right_arrow"">',
    });
});
// ----------------------------- TESTMONIAL -(END) -------------------------------------- //
// ------------------------------  TYPE Js -(START) ------------------------------------ //
$(document).ready(function () {
    var typed = new Typed('.type', {
        strings: ['Web Designer', ' Web Developer', 'Font End Developer', 'Back End Developer'],
        loop: true,
        startDelay: 300,
        backDelay: 1500,
        typeSpeed: 105,
        backSpeed: 85,
        cursorChar: '|',
    });
});
// ----------------------------  TYPE Js -(END) ------------------------------------ //
// ----------------------------  PORTFOLIO -(START) ------------------------------------ //
$(document).ready(function () {
    $('body').showMoreItems({
        count: 6,
    });
});
(function ($) {
    $.fn.showMoreItems = function (options) {
        var $totalItems = $('.item-list li').length,
            $visibleItems = $('.item-list li:visible').length,
            settings = $.extend({}, $.fn.showMoreItems.defaults, options),
            i = settings.count,
            countLess = settings.count - 1;
        $('.item-list li:lt(' + settings.count + ')').show();
        $('.more-trigger').click(function (el) {
            el.preventDefault();
            if ($visibleItems !== $totalItems) {
                if (i + settings.count <= $totalItems) {
                    $visibleItems = i += settings.count;
                    $('.item-list li:lt(' + i + ')').show();
                    if (i == $totalItems) {
                        $('.more-trigger').text("Show Less");
                    }
                } else if (i !== $totalItems) {
                    $('.item-list li:gt(' + countLess + ')').show();
                    $('.more-trigger').text("Show Less");
                    $visibleItems = $totalItems;
                    i = $totalItems;
                }
            } else if ($visibleItems === $totalItems) {
                $('.item-list li:gt(' + countLess + ')').hide();
                $('.more-trigger').text("Show More");
                $visibleItems = settings.count;
                i = settings.count;
            }
        });
    }
    $.fn.showMoreItems.defaults = {
        count: 1
    };
})(jQuery);
// ----------------------------  PORTFOLIO -(END) ------------------------------------ //
// ----------------------------  COUNTER UP -(START) ---------------------------------- //
$(document).ready(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1500,
    });
});
// -----------------------------  COUNTER UP -(END) ------------------------------------ //
// ------------------------------ VenoBox (Start) ------------------------------------- //
$('.venobox').venobox({
    framewidth: '800px', // default: ''
    frameheight: 'auto', // default: ''
    border: '2px #ddd', // default: '0'
    bgcolor: '#fff', // default: '#fff'
    titleattr: 'data-title', // default: 'title'
    numeratio: true, // default: false
    infinigall: true, // default: false
    share: ['facebook', 'twitter', 'download'], // default: []
    arrowsColor: ' #fff',
    spinner: 'cube-grid',
});
// ---------------------------------- VenoBox (Start) ----------------------------------------- //
//------------------------------- VENOBOX-2  -(START) ------------------------------------//
$(document).ready(function () {
    $('.venobox2').venobox({
        framewidth: '850px', // default: ''
        frameheight: '500px', // default: ''
        border: '2px #ddd', // default: '0'
        bgcolor: '#fff', // default: '#fff'
        titleattr: 'data-title', // default: 'title'
        numeratio: true, // default: false
        infinigall: true, // default: false
        share: ['facebook', 'twitter', 'download'], // default: []
        arrowsColor: ' #fff',
        spinner: 'cube-grid',
        spinColor: '#fff',
    });
});
//--------------------------------- VENOBOX-2  -(End)----------------------------------------//
// ------------------------------ Back TO TOP (Start) ----------------------------------- //
(function (a) {
    a.fn.tottTop = function (f) {
        var b = a.extend({
            scrollTop: 800,
            duration: 1E3,
            scrtollTopBtnDuration: 1000
        }, f);
        return this.each(function () {
            var c = a(this),
                d = a(window);
            d.scroll(function () {
                d.scrollTop() > b.scrollTop ? c.fadeIn(b.scrtollTopBtnDuration) : c.fadeOut(b.scrtollTopBtnDuration)
            });
            c.click(e)
        })
    }
})(jQuery);
$('.totop').tottTop();
// ----------------------------- Back TO TOP (End) ------------------------------------ //
