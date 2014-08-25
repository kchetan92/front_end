/*------MODAL----------*/

function PageController(){};

PageController.prototype.fetchContactasFromServer = function(callback)	{
	callback('[{"name" : "Harish", "place" : "Bangalore"},{"name" : "Chetan", "place" : "Pune"}]');

};

function ContactManager(){
	this.contacts=[];
};

function Contact(contact){
	for(var key in contact)	{
		this[key]=contact[key];
	}
};

ContactManager.prototype.addContact = function(contact)	{
	this.contacts.push(contact);
};

ContactManager.prototype.addContactsFromJSON = function(jsonString)	{
	var contactsObj = JSON.parse(jsonString);
	var that = this;
	contactsObj.forEach(function(contact){
		that.addContact(new Contact(contact));
	});
}

var ctrl = new PageController();
var cManager = new ContactManager;
ctrl.fetchContactasFromServer(function(contactsJSON){
	cManager.addContactsFromJSON(contactsJSON);
});

console.log(cManager.contacts);