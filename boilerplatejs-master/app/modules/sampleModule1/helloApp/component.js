define(['Boiler', './viewmodel', 'text!./view.html'], function(Boiler, ViewModel, template) {

	var Component = function(moduleContext) {

		var vm, panel = null;

		this.activate = function(parent, params) {
			panel = new Boiler.ViewTemplate(parent,template);	
			
			vm=new ViewModel(); // for view binding
			ko.applyBindings(vm,panel.getDomElement())
		};

		this.deactivate = function() {
			/*if (panel){
				panel.hide();
			}*/
		};

	};

	return Component;

}); 