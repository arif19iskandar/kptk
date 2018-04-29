$(document).ready(function() {
  // navigation scroll
  setInterval(function () {
    if ($(window).scrollTop() > 100) {
      $('.navbar').addClass('fixed');
    } else {
      $('.navbar').removeClass('fixed');
    }
  }, 100);  
});

$('.cd-nav-trigger').click(function(){
	if(!$(this).hasClass('close-nav')){
		$(this).addClass('close-nav');
	} else {
		$(this).removeClass('close-nav');
	}
	return false;
});