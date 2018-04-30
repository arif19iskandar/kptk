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

   if(!$('body').hasClass('no-parallax')){
    var $el = $('.parallax');
   $el.html('<div class="overlay"></div>' + $el.html());
   $el.css('background-image','url(' + $el.data('image') + ' )');
    $(window).on('scroll', function () {
        var scroll = $(document).scrollTop();
        $el.css('background-position','50% '+(-.17*(scroll-$el.offset().top ))+'px');
    });
   }
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

(function($){
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        lazyLoad:true,
        afterLazyLoad: function(elem){
        $(elem).addClass("border-red");
        },
        dots:false,
        nav:true,
        autoplay:true,
        navText: [
        "<i class='material-icons'>keyboard_arrow_left</i>",
        "<i class='material-icons'>keyboard_arrow_right</i>"
        ],
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
          0:{
            items:1
          },
          600:{
            items:3
          },
          1000:{
            items:4
          }
        }
      });
    })(jQuery);

$(document).ready(function(){
      
      //Check to see if the window is top if not then display button
      $(window).scroll(
        function(){
        if ($(this).scrollTop() > 1000) {
          $('.scrollToTop').fadeIn();
        } else {
          $('.scrollToTop').fadeOut();
        }
      });
      
      //Click event to scroll to top
      $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
      });
      
    });