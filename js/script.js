$(document).ready(function(){
	
	// Name scroll effect
	$(window).scroll(function(){
		
		var w = $(window).scrollTop();
		var slideLeft = "translateX(" + w*-.5 + "px)";
		var slideRight = "translateX(" + w*.5 + "px)";

		$('#title-top-row, #project-heading').css({
			transform: slideLeft
		})

		$('#title-bottom-row, #project-subhead').css({
			transform: slideRight
		})
           
	});
	// Name scroll effect ends
	
	// Project hero zoom scroll effect
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		$('#project-image').css({
		transform: 'translate3d(0, +'+(scroll/100)+'%, 0) scale('+(100 + scroll*.065)/100+')'
		});
	});
	// Project hero zoom scroll effect ends
	
	// Name opacity effect
    var name = $('.page-title, .project-title'),
		limit = 600;  /* scrolltop value when opacity should be 0 */

		$(window).on('scroll', function() {
		var st = $(this).scrollTop();

		/* avoid unnecessary call to jQuery function */
		if (st <= limit) {
		name.css({ 'opacity' : (1 - st/limit)});
		}
    });
	// Name opacity effect ends
	
	// Appear on scroll effect
	window.addEventListener('scroll', reveal);
	
	function reveal(){
		var reveals = document.querySelectorAll('.reveal');
		
		for (var i = 0; i < reveals.length; i++){
			
			var windowheight = window.innerHeight;
			var revealtop = reveals[i].getBoundingClientRect().top;
			var revealpoint = 100;
			
			if(revealtop < windowheight - revealpoint){
				reveals[i].classList.add('active');
			}
		}
	}
	// Appear on scroll effect ends
	
	// BMW Teaser
	$('.play-teaser:nth-child(1)').mouseover(function(){
		$('.teaser:nth-child(1)').fadeIn(250);
		$('.teaser:nth-child(2), .teaser:nth-child(3), .teaser:nth-child(4), .teaser:nth-child(5)').hide();
	});
	$('.play-teaser:nth-child(1)').mouseout(function(){
		$('.teaser:nth-child(1)').fadeOut(100);
	});
	// BMW Teaser ends
	
	// Canon Teaser
	$('.play-teaser:nth-child(2)').mouseover(function(){
		$('.teaser:nth-child(2)').fadeIn(250);
		$('.teaser:nth-child(1), .teaser:nth-child(3), .teaser:nth-child(4), .teaser:nth-child(5)').hide();
	});
	$('.play-teaser:nth-child(2)').mouseout(function(){
		$('.teaser:nth-child(2)').fadeOut(100);
	});
	// Canon Teaser ends
	
	// Harley-Davidson Teaser
	$('.play-teaser:nth-child(3)').mouseover(function(){
		$('.teaser:nth-child(3)').fadeIn(250);
		$('.teaser:nth-child(1), .teaser:nth-child(2), .teaser:nth-child(4), .teaser:nth-child(5)').hide();
	});
	$('.play-teaser:nth-child(3)').mouseout(function(){
		$('.teaser:nth-child(3)').fadeOut(100);
	});
	// Harley-Davidson Teaser ends
	
	// Sephora Teaser
	$('.play-teaser:nth-child(4)').mouseover(function(){
		$('.teaser:nth-child(4)').fadeIn(250);
		$('.teaser:nth-child(1), .teaser:nth-child(2), .teaser:nth-child(3), .teaser:nth-child(5)').hide();
	});
	$('.play-teaser:nth-child(4)').mouseout(function(){
		$('.teaser:nth-child(4)').fadeOut(100);
	});
	// Sephora Teaser ends
	
	// Lamborghini Teaser
	$('.play-teaser:nth-child(5)').mouseover(function(){
		$('.teaser:nth-child(5)').fadeIn(250);
		$('.teaser:nth-child(1), .teaser:nth-child(2), .teaser:nth-child(3), .teaser:nth-child(4)').hide();
	});
	$('.play-teaser:nth-child(5)').mouseout(function(){
		$('.teaser:nth-child(5)').fadeOut(100);
	});
	// Lamborghini Teaser ends

	// Project block background image zoom effect
	$('.p-block').hover(function(){
		$(this).find('.thumb').toggleClass('hover');
	});
	// Project block background image zoom effect ends
	
	// Project block randomize order effect
	$(function () {
		var parent = $('#p-container');
		var divs = parent.children();
		while (divs.length) {
			parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
		}
	});
	// Project block randomize order effect ends
	
	/*// Name scroll effect
	$(window).scroll(function(){
		
		var w = $(window).scrollTop();
		var slideUp = "translateY(" + w*-.055 + "px)";

		$('.project-element').css({
			transform: slideUp
		})
		
	});
	// Name scroll effect ends*/
	
	if (screen.width >= 768) {
		$('.project-element').enllax();
	}
	
	
	
	// Fade in effect
	$('#blurb-wrapper').fadeInScroll();
	$('#skills h1').fadeInScroll();
	$('#skills p').fadeInScroll();
	$('#skills a').fadeInScroll();
	$('#me-break').fadeInScroll();
	$('.skill-block').fadeInScroll();
	$('.play-teaser').fadeInScroll();
	$('.p-block').fadeInScroll();
	$('#project-blurb').fadeInScroll();
	$('.project-element').fadeInScroll();
	//Fade in effecr ends
	
});