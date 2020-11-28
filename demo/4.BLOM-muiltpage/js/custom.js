  $('.portfolio_slide').slick({
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      prevArrow: '<i class="fas fa-arrow-left team_left_arrow">',
      nextArrow: '<i class="fas fa-arrow-right team_right_arrow"">',
  });
  //////////////////////////////////////
  $('.team_slide').slick({
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      prevArrow: '<i class="fas fa-arrow-left team_left_arrow">',
      nextArrow: '<i class="fas fa-arrow-right team_right_arrow"">',
  });
  ///////////////////////////////////
  $(document).ready(function () {
      $("#hide").click(function () {
          $("h6").hide(1000);
           
          
      });
      $("#show").click(function () {
          $("h6").show(1000);
      });
  });
