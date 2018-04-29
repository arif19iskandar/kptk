$(document).ready(function() {
  // navigation scroll
  setInterval(function () {
    if ($(window).scrollTop() > 100) {
      $('.navbar').addClass('fixed');
      $('.cd-nav-trigger').addClass('start');
    } else {
      $('.navbar').removeClass('fixed');
      $('.cd-nav-trigger').removeClass('start');
    }
  }, 100);  

  $("#click a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = hash;
      });
    }  // End if
  });
});
// menu icon
  $('.cd-nav-trigger').click(function(){
	if(!$(this).hasClass('close-nav')){
		$(this).addClass('close-nav');
		$('#mobile-nav').addClass('show');
		$('.body-overlay').addClass('show-nav');
	} else {
		$(this).removeClass('close-nav');
		$('#mobile-nav').removeClass('show');
		$('.body-overlay').removeClass('show-nav');
	}
	return false;
});