$(document).ready(function(){
	$('tbody > tr').mouseenter(function(){
		$(this).css('backgroundColor','yellow');
	});

	$('tbody > tr').mouseleave(function(){
		$(this).css('backgroundColor','white');
	});


	$('p').animate({padding:"50px"},{duration:4000});
	$('table').animate({'margin-left':"1000px"},{duration:4000});
});