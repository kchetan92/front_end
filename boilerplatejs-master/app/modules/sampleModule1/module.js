define(function(require) {

    //dependencies
    var Boiler = require('Boiler'), 
    settings = require('./settings'), 
    HelloComponent = require('./helloApp/component'),	//this is to register like import
    LoginFormComponent = require('./loginForm/component'),
    DepartmentComponent = require('./departments/component'), 
    ClickCounterComponent = require('./clickCounter/component');

    return {
        initialize : function(parentContext) {
            //create a new context which is associated with the parent Context
            var context = new Boiler.Context(parentContext);
            context.addSettings(settings);

            var controller = new Boiler.UrlController($(".appcontent"));
            controller.addRoutes({
            	'loginForm': new LoginFormComponent(context),
            	'helloApp': new HelloComponent(context),
                'departments/:name:' : new DepartmentComponent(context),
                'clickcounter' : new ClickCounterComponent(context)
            });
            controller.start();
        }
    };

});
