var app = angular.module('contacts', []);
app.controller('ContactsController', ['$scope', function($scope) {
    $scope.contacts = [
        {
            name: 'Gautham',
            email: 'gautham@example.com',
        },
        {
            name: 'Arun',
            email: 'arun@example.com',
        }
    ];
    $scope.acform = false;
    $scope.ec = [];
    $scope.contactBeingEdited = [];
    $scope.addContact = function() {
        $scope.contacts.push(angular.copy($scope.newContact));
        $scope.newContact = {};
    };
    $scope.deleteContact = function(contact) {
        $scope.contacts.forEach(function(c, index) {
            if(c === contact)
                $scope.contacts.splice(index, 1);
        });
        $scope.ec = [];
        $scope.contactBeingEdited = [];
    };
    $scope.editContact = function(contact, index) {
        $scope.contactBeingEdited[index] = angular.copy(contact);
        $scope.ec[index] = true;
    };
    $scope.updateContact = function(index) {
        $scope.ec[index] = false;
        $scope.contacts[index] = angular.copy($scope.contactBeingEdited[index]);
        $scope.contactBeingEdited.splice(index, 1);
    }
}]);
app.directive('contacts', function() {
    return {
        restrict: 'E',
        templateUrl: '/templates/contacts-display.html'
    }
});
app.directive('addcontact', function() {
    return {
        restrict: 'E',
        templateUrl: '/templates/add-contact.html'
    }
});
