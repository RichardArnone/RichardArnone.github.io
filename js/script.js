$(document).ready(function(){
	
//Every time the window is scrolled
$(window).scroll( function(){

	/* Check the location of each desired element */
	$('.hideme').each( function(i){

		var bottom_of_object = $(this).offset().top + $(this).outerHeight();
		var bottom_of_window = $(window).scrollTop() + $(window).height();

		/* If the object is completely visible in the window, fade it it */
		if( bottom_of_window > bottom_of_object ){

			$(this).animate({'opacity':'1'},500);

		}

	});    
});
	
// Work gallery randomizer
var galleryRandom = $(".galleryItem");
for(var i = 0; i < galleryRandom.length; i++){
    var target = Math.floor(Math.random() * galleryRandom.length -1) + 1;
    var target2 = Math.floor(Math.random() * galleryRandom.length -1) +1;
    galleryRandom.eq(target).before(galleryRandom.eq(target2));
}
	
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && 
      location.hostname === this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });
	
// Image comparison slider
//https://www.jqueryscript.net/other/Image-Comparison-Slider-BeerSlider.html
  $.fn.BeerSlider = function( options ) {
    options = options || {};
    return this.each( function () {
      new BeerSlider( this, options );
    });
  };
  $( ".beer-slider" ).each( function( index, el ) {
    $( el ).BeerSlider( {start: $( el ).data( "start" ) } )
  });
	
});