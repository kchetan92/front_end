
var app = angular.module('main',[]);
/*[] includes the dependency!
{{}} is used to recognize a JS code

*Only one ng-app per page, per html
*Cannot be minified!
*learn dependency injection for minification
*ng-model is used to bind
*/

app.controller('PersonController',['$scope',function($scope){
	$scope.people = [
	{name:{first:'gautam', last:'pai'},place:'Bangalore',dob : new Date(1992,07,08)},
	{name:{first:'chetan', last:'k'},place:'Hydrabad',dob : new Date(1992,07,08)}
	];
	//filters
}]);

app.filter('capitalize',function(){
	return function(word)	{
		console.log(word);
		return word[0].toUpperCase() + word.slice(1).toLowerCase();
	}
});

app.filter('fullName',function(capitalizeFilter){
	return function(name)	{
		return capitalizeFilter(name.first) + ' ' + capitalizeFilter(name.last);
	}
});

app.directive('person',function(){
	return{
		restrict:'E',	//Element directive
		templateUrl:'person.html'
	}
});