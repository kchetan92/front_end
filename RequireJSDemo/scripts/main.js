/*require(['jquery'],function($){ //$ is pointing to jQuery
	$('#output').html('hello this is my first jQuery Modeule');
});*/
/*
require(['jquery','message'],function($,message){
	$('#output').html(message);
});*/


//another-module is first searched at message, then jQuery and then it
//searched for another-module

require(['jquery','message','anotherModule'],function($,message,anotherModule){
	$('#output').html(anotherModule);
});
