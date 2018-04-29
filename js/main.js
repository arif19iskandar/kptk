setInterval(function () {
    if ($(window).scrollTop() > 100) {
      $('.navbar').addClass('fixed');
    } else {
      $('.navbar').removeClass('fixed');
    }
}, 100);

$('.btn-scroll').click(function(){
  $('html, body').animate({scrollTop : 0},800);
  return false;
});