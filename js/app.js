$(document).ready(function(){

	AOS.init();
	$(window).on('load', function(){
		$('.loading').fadeOut('slow');
	})
	
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
		$(".site-menu").toggleClass('sitenav--open');
		$(".site-menu").toggleClass('sitenav--close');

	});
	$(function(){
		$(".slider-photo").slick({
			autoplay: true,
			autoplaySpeed: 2000,
			prevArrow: '<button type="button" class="slick-prev"><img src="img/icon-left.svg" alt=""></button>',
			nextArrow: '<button type="button" class="slick-next"><img src="img/icon-right.svg" alt=""></button>'
		})
	})

});