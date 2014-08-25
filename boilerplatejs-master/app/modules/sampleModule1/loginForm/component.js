define(['Boiler', 'text!./view.html'], function(Boiler, template) {

	var Component = function(moduleContext) {

		var vm, panel = null;
		this.activate = function(parent, params) {
			panel = new Boiler.ViewTemplate(parent,template);
			$('#submit').click(function(){
				if($('#username2').val()=='chetan' && $('#password2').val()=='sapient')	{
					$('#login_form').hide();
					$('#success').show();
				}
			});
			
		};

		this.deactivate = function() {
		};

	};

	return Component;

}); 