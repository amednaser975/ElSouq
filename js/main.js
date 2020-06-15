$(function () {
    'use strict';

    // Adjust Slider Height
    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH   = $('.navbar').innerHeight();
   $('.slider, .carousel-item').height(winH - navH);

   // Featured Work Shuffle
   $('.featured-work ul li').on('click', function() {

    $(this).addClass('active').siblings().removeClass('active');

    if ($(this).data('class') === '.all') {

        $('.shuffle-images div').css('opacity',1);

    } else {

        $('.shuffle-images div').css('opacity',.1);
        $($(this).data('class')).parent().css('opacity',1);
    }

   });

   // Fixed Navbar On Scroll
   $(window).on('scroll', function () {
    
    
    if ($(this).scrollTop() >= 100)
    {
        $('.navbar').css({

            backgroundColor:'#333',
            top: '0px',
            left: '0px'
            
        });

    } else if ($(this).scrollTop() >= 0)
    {
        $('.navbar').css({

            backgroundColor:'transparnet',
            top: '0px',
            left: '0px'
            
        });
    } else {
        $('.navbar').css({

            backgroundColor:'transparnet',
            top: '0px',
            left: '0px'
            
        });
    }

   });
});
// Scroll To Top button
var scrollToTop = $("#back-to-top");
var offsetTopFeatures = $('.features').offset().top;
$(window).scroll(function() {
  if ($(window).scrollTop() >= offsetTopFeatures) {
    if (scrollToTop.is(":hidden")) {
      scrollToTop.css("display", "block");
    }
  } else {
    scrollToTop.css("display", "none");
  }
});
$("#back-to-top").click( function () {

  $('html, body').animate({scrollTop: 0}, 1000);
})