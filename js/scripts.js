$(document).ready(function () {
  /**
   * Scroll to top button Functions
   */
  $(window).scroll(function () {
    var scrollToTop = $('.scroll-to-top');
    if ($(window).scrollTop() >= 1000) {
      if (scrollToTop.is(':hidden')) {
        scrollToTop.fadeIn(400);
      }
    } else {
      scrollToTop.fadeOut(400);
    }
  });
  // $('.owl-carousel-1').owlCarousel({
  //   loop: true,
  //   margin: 10,
  //   nav: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 2,
  //     },
  //     1000: {
  //       items: 3,
  //     },
  //   },
  // });
});
