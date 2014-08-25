var app =  angular.module('contacts',[]);
app.controller('ContactsController',['$scope',function($scope){
	$scope.contacts = [{
		name :'Chetan',
		email:'k.chetan92@gmail.com'
	},{
		name :'Harish',
		email:'harish@gmail.com'
	}]

	$scope.addContact = function()	{
		$scope.contacts.push(angular.copy($scope.newContact));
		$scope.newContact = [];
	}

	$scope.acform = false;
	$scope.ec=[];
	$scope.contactBeingEdited = [];

	$scope.deleteContact = function(contact)	{
		$scope.contacts.forEach(function(c,index)	{
			if(c===contact)
				$scope.contacts.splice(index,1);
		});
	}

	$scope.editContact = function(contact,index){
		$scope.contactBeingEdited = angular.copy(contact);
		$scope.ec[index] = true;
	};

	$scope.updateContact = function(index)	{
		$scope.ec[index] = false;
		$scope.contacts[index] = angular.copy($scope.contactBeingEdited[index]);
		$scope.contactBeingEdited.splice(index,1);
	}
}]);

app.directive('contactsdisplay',function(){
	return	{
		restrict: 'E',
		templateUrl: 'templates/contactsdisplay.html'
	}
});

app.directive('addcontacts',function(){
	return	{
		restrict: 'E',
		templateUrl: 'templates/addcontact.html'
	}
});