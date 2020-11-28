$(function () {

    $('.tab_1 .tab_cont').show();
    $('.tab_2 .tab_cont').hide();
    $('.tab_3 .tab_cont').hide();

    $('.tab_1 .tab_hedng .fa-chevron-down').click(function () {
        $('.tab_1 .tab_cont').slideUp(1000);
        $('.tab_2 .tab_cont').slideUp(1000);
        $('.tab_3 .tab_cont').slideUp(1000);
    });
    $('.tab_2 .tab_hedng .fa-chevron-down').click(function () {
        $('.tab_1 .tab_cont').slideUp(1000);
        $('.tab_2 .tab_cont').slideDown(1000);
        $('.tab_3 .tab_cont').slideUp(1000);
    });
    $('.tab_3 .tab_hedng .fa-chevron-down').click(function () {
        $('.tab_1 .tab_cont').slideUp(1000);
        $('.tab_2 .tab_cont').slideUp(1000);
        $('.tab_3 .tab_cont').slideDown(1000);
    });
    $('.tab_1 .tab_hedng .fa-chevron-down').click(function () {
        $('.tab_1 .tab_cont').slideDown(1000);
        $('.tab_2 .tab_cont').slideUp(1000);
        $('.tab_3 .tab_cont').slideUp(1000);

    });

});