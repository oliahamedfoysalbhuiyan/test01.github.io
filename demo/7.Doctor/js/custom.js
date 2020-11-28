$(function () {
    $('.tab_1 .tab_cont').hide();
    $('.tab_2 .tab_cont').hide();
    $('.tab_3 .tab_cont').hide();
    $('.tab_4 .tab_cont').hide();
    $('.tab_5 .tab_cont').hide();
    
    
    $('.tab_1 .tab_hedng .fa-angle-double-down').click(function () {
        $('.tab_1 .tab_cont').slideDown(500);
        $('.tab_2 .tab_cont').slideUp(500);
        $('.tab_3 .tab_cont').slideUp(500);
        $('.tab_4 .tab_cont').slideUp(500);
        $('.tab_5 .tab_cont').slideUp(500);
    });
    $('.tab_2 .tab_hedng .fa-angle-double-down').click(function () {
        $('.tab_1 .tab_cont').slideUp(500);
        $('.tab_2 .tab_cont').slideDown(500);
        $('.tab_3 .tab_cont').slideUp(500);
        $('.tab_4 .tab_cont').slideUp(500);
          $('.tab_5 .tab_cont').slideUp(500);
        
    });
    $('.tab_3 .tab_hedng .fa-angle-double-down').click(function () {
        $('.tab_1 .tab_cont').slideUp(500);
        $('.tab_2 .tab_cont').slideUp(500);
        $('.tab_3 .tab_cont').slideDown(500);
        $('.tab_4 .tab_cont').slideUp(500);
          $('.tab_5 .tab_cont').slideUp(500);
    });
    $('.tab_4 .tab_hedng .fa-angle-double-down').click(function () {
        $('.tab_1 .tab_cont').slideUp(500);
        $('.tab_2 .tab_cont').slideUp(500);
        $('.tab_3 .tab_cont').slideUp(500);
        $('.tab_4 .tab_cont').slideDown(500);
          $('.tab_5 .tab_cont').slideUp(500);
    });
     $('.tab_5 .tab_hedng .fa-angle-double-down').click(function () {
        $('.tab_1 .tab_cont').slideUp(500);
        $('.tab_2 .tab_cont').slideUp(500);
        $('.tab_3 .tab_cont').slideUp(500);
        $('.tab_4 .tab_cont').slideUp(500);
        $('.tab_5 .tab_cont').slideDown(500);
    });
});
// ------------------------------------ //
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
});

// ------------------------------------ //
$('.doctor_slide').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
});