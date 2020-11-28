$(function () {
    $('.venobox').venobox({
        framewidth: '600px',
        frameheight: '400px',
        border: '5px',
        bgcolor: '#31a0ff',
        titleattr: 'data-title',
        numeratio: true,
        infinigall: true,
        spinner: 'cube-grid',

    });

    $('.test_slide').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
        },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
        },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
        }

      ]
    });





});
