/*global $, window , document, setInterval, clearInterval, console */

$(".navbar").css({
      backgroundColor: "transparent",
      boxShadow: "none"
    });
// Change Coloring Properties of Navbar On Scrolling
$(window).scroll(function () {

  if ($(this).scrollTop() >= 40) {
    $(".navbar").css({
      backgroundColor: "#FFF",
      boxShadow: "0px 6px 9px 0px rgba(0,0,0,.1)",
      top:'0'
    });
    $(".navbar-toggler span").css('backgroundColor','#333');
    $(".navbar-brand img").attr("src", "images/logo-dark.png");
    $(".navbar-brand,.navbar-collapse ul li a").css("color", "#333");
    $('.navbar .navbar-nav li').css('paddingTop','.6rem');
    $('.navbar .navbar-nav li').css('paddingBottom','.6rem');
    $('.navbar .navbar-nav:last-child').css('border-left-color','rgba(0, 0, 0, 0.4)');
  } else {
    $(".navbar").css({
      backgroundColor: "transparent",
      boxShadow: "none"
    });
    $(".navbar-toggler span").css('backgroundColor','#FFF');
    $(".navbar-brand img").attr("src", "images/logo-light.png");
    $(".navbar-brand,.navbar-collapse ul li a").css("color", "#FFF");
    $('.navbar .navbar-nav:last-child').css('border-left-color','rgba(255, 255, 255, 0.2)');
  }
})
$(".navbar-toggler").click(function (){
  $(".navbar").css({
    "backgroundColor": "#fff",
    "color": "#333"
  });
  $(".navbar-brand img").attr("src", "images/logo-dark.png");
  $(".navbar-brand,.navbar-collapse ul li a").css("color", "#333");
  $(".navbar-toggler span").css('backgroundColor','#333');
})
// Scroll To Top button
var scrollToTop = $("#back-to-top");
var offsetTopAbout = $('#about').offset().top;
$(window).scroll(function() {
  if ($(window).scrollTop() >= offsetTopAbout) {
    if (scrollToTop.is(":hidden")) {
      scrollToTop.css("display", "block");
    }
  } else {
    scrollToTop.css("display", "none");
  }
});
// Click On scrollToTop To Go Up (Don't Work)
// scrollToTop.click(function(event) {
//   event.preventDefault();
//   $("html , body").animate(
//     {
//       scrollTop: 0
//     },
//     1000
//   );
// });
$("#back-to-top").click( function () {

  $('html, body').animate({scrollTop: 0}, 1000);
})