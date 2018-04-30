$(document).ready(function() {
  // navigation scroll
  setInterval(function () {
    if ($(window).scrollTop() > 100) {
      $('.navbar').addClass('fixed');
      $('.cd-nav-trigger').addClass('start');
      $('#mobile-nav .form-inline').css('top','17px');

    } else {
      $('.navbar').removeClass('fixed');
      $('.cd-nav-trigger').removeClass('start');
      $('#mobile-nav .form-inline').css('top','22px');
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
        scrollTop: $(hash).offset().top - 70
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = hash;
      });
    }  // End if
  });

   var $el = $('.parallax');
   $el.html('<div class="overlay"></div>' + $el.html());
   $el.css('background-image','url(' + $el.data('image') + ' )');
    $(window).on('scroll', function () {
        var scroll = $(document).scrollTop();
        $el.css('background-position','50% '+(-.17*(scroll-$el.offset().top ))+'px');
    });
});
// menu icon
  $('.cd-nav-trigger').click(function(){
	if(!$(this).hasClass('close-nav')){
		$(this).addClass('close-nav');
		$('#mobile-nav').addClass('show');
		$('.body-overlay').addClass('show-nav');
    $('body').css('overflow','hidden');
	} else {
		$(this).removeClass('close-nav');
		$('#mobile-nav').removeClass('show');
		$('.body-overlay').removeClass('show-nav');
    $('body').css('overflow','unset');
	}
	return false;
});