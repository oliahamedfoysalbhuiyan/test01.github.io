
// ----------------------------------------- WOW -(Start) ----------------------------------------- //
new WOW().init();
// ----------------------------------------- WOW -(END) ----------------------------------------- //


// ----------------------------------------- TESTMONIAL -(Start) ----------------------------------------- //
$(function () {
    $('.test_slide').slick({
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

// ----------------------------------------- TESTMONIAL -(END) ----------------------------------------- //
// ----------------------------  SHOW MORE -(START) ------------------------------------ //

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
        count:1
    };
})(jQuery);
// ----------------------------  SHOW MORE -(END) ------------------------------------ //




// ---------------------------------- VenoBox (Start) ----------------------------------------- //

$('.venobox').venobox({
    framewidth: '400px', // default: ''
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


// ---------------------------------- Back TO TOP (Start) ----------------------------------------- //

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
// ---------------------------------- Back TO TOP (End) ----------------------------------------- //
