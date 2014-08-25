$(document).ready(function(){
	$('img').hide();

	var first = $('#images');
	var img = $('#images');

	setInterval(function(){
		img.fadeOut('slow');
		if(!(img.next().length))	{
			console.log('replaced');
			img = img.parent().children(':first');
		}
		img = img.next();
		console.log(img.src);
		img.fadeIn();
	},1000);
});