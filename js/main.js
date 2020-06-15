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
      scrollToTop.fadeIn(500);
    }
  } else {
    scrollToTop.fadeOut(500);
  }
});
$("#back-to-top").click( function () {

  $('html, body').animate({scrollTop: 0}, 1000);
})

$('.nav-link').click(function () {

    let linkHref = $(this).attr('href');
    let sectionOffset = $(linkHref).offset().top;
    $('html, body').animate({scrollTop: sectionOffset}, 1000);
    $(this).parent().siblings().removeClass('active');
    $(this).parent().addClass('active');
})
// Add Active link on Element when reaching its Section
$(window).scroll( function () {

    let hrefOfLink;

    $('.block').each(function (index, element) {

        hrefOfLink = $(element).attr('id');

        if($(window).scrollTop() > $(this).offset().top - 400)
        {
            $('.nav-item').removeClass('active');
            $(`a[href="#${hrefOfLink}"]`).parent().addClass('active');
        }
    })
    if($(window).scrollTop() > $('#stats').offset().top - 1)
    {
        console.log("Ahmed")
        counter(859);
        counter(759);
        counter(737);
        counter(430);
    }
})
// Counter 
function counter (num) 
{
  let i = 0;
  let count = setInterval(()=>{
    switch(num) {
      case 859:
        $('#first').html(`${i++}`);
        if(i == 860) {
          i = 0;
          clearInterval(count);
        }
        break;
      case 759:
        $('#second').html(`${i++}`);
        if(i == 760) {
          i = 0;
          clearInterval(count);
        }
        break;
      case 737:
        $('#third').html(`${i++}`);
        if(i == 738) {
          i = 0;
          clearInterval(count);
        }
        break;
      case 430:
        $('#fourth').html(`${i++}`);
        if(i ==  431) {
          i = 0;
          clearInterval(count);
        }
        break;
    }
  }, 5);
}