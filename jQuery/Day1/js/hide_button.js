$(document).ready(function(){
	/*$('#hide').click(function(){
		$('#disclaimer').hide();
	});
	$('#show').click(function(){
		$('#disclaimer').show();
	});*/
	$('#toggle').click(function(){
		$('#disclaimer').toggle();

		if($('#disclaimer').is(':visible'))	{
			$(this).val('Hide');
		}
		else	{
			$(this).val('Show');
		}
	});
});