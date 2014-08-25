$(document).ready(function(){

	$('#hidden').hide();

	$('#default').click(function(){
		alert('hey');
		$(this).css.fontSize='10px'
	});

	$('#bigger').click(function(){
		console.log($('p').css('fontSize'));
		$('p').css('fontSize',(parseFloat($('p').css('fontSize'))+2)+'px');
	});

	$('#smaller').click(function(){
		$('p').css('fontSize',(parseFloat($('p').css('fontSize'))-2)+'px');
	});

	$('a').click(function(){
		console.log('a');
		$('#hidden').show();
		$(this).hide();
	});

});