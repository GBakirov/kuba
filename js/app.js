$(document).ready(function(){
	$('.loading').css("display" , "none")
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
		$(".site-menu").toggleClass('sitenav--open');
		$(".site-menu").toggleClass('sitenav--close');

	});

});