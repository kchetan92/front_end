$(document).ready(function(){
	$('ul').hide();
	$('p').mouseover(function(){
		$('ul').slideDown("slow");
	});

	$('p').mouseleave(function(){
		$('ul').slideU("slow");
	});
});