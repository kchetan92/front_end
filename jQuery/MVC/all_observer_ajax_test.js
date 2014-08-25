function PageController() {
    this.cManager = new ContactManager;
    this.cView = new ContactsView;
	var that=this;
	this.cView.addObserver('contactAdded', function() {
		that.cManager.addContact(new Contact(that.cView.getContactsFromForm(),that));
		that.cView.render(that.cManager.contacts);
		that.cView.clearForm();
	});
	
	this.cView.addObserver('contactDelete', function(contactID) {
	that.cManager.deleteContact(contactID);
	that.cView.render(that.cManager.contacts);
	});
	
	this.fetchContactsFromServer(function (contactsJSON) {
        that.cManager.addContactsFromJSON(contactsJSON);
        that.cView.render(that.cManager.contacts);
    });
	
}

PageController.prototype.fetchContactsFromServer = function(callback) {
    // Make the call to server
    // After fetching the data, call the callback provided with the data
    // as its argument
    callback('[{"name": "Gautham", "place": "Bangalore"}, {"name": "Raghav", "place": "Mumbai"}]');
	/*var req= new XMLHttpRequest();
	req.onload=function() { // onload is a different handler than onreadystatechange , you can use this, since that is req is the object on which the function is called
	callback(this.responseText);
	};
	req.open("get","getpeople.json",false);
	req.send();*/
}


function ContactsView() {
	this.addcontact=document.getElementById('addcontact');
	this.name=document.getElementById('name');
	this.place=document.getElementById('place');
	var that=this;
	this.eventListeners={};
	this.addcontact.addEventListener('submit',function(event){
	event.preventDefault();
	that.eventListeners.contactAdded.forEach(function(callback) {
	callback();
	});
	});
}

ContactsView.prototype.addObserver= function(eventType, callback) {
if(!this.eventListeners[eventType])
 this.eventListeners[eventType]=[];
 this.eventListeners[eventType].push(callback);

}

ContactsView.prototype.getContactsFromForm=function(){
	return { name : this.name.value, place: this.place.value};
}

ContactsView.prototype.render = function(contacts) {
	var that=this;
    var table = document.getElementById('contactstable');
	table.innerHTML='';
    contacts.forEach(function(contact) {
        var row = table.insertRow(-1);
        row.insertCell(0).innerHTML = contact.name;
        row.insertCell(1).innerHTML = contact.place;
		var btn_edit=document.createElement("button");
		btn_edit.innerHTML="Edit";
		var btn_delete=document.createElement("button");
		btn_delete.innerHTML="Delete";
		btn_delete.id="delete"+contact.name;
		row.insertCell(2).appendChild(btn_edit);
		row.insertCell(3).appendChild(btn_delete);
		btn_delete.addEventListener('click',function(event){
	    that.eventListeners.contactDelete.forEach(function(callback) {
	    callback(contact.id);
	});
	});

    });
}

ContactsView.prototype.clearForm= function() {
	this.name.value='';
	this.place.value='';
	this.name.focus();
}

function ContactManager() {
    this.contacts = [];
	this.id=0;
}

ContactManager.prototype.addContactsFromJSON = function(jsonString) {
    var contactsObj = JSON.parse(jsonString);
    var that = this;
    contactsObj.forEach(function(contact) {
        that.addContact(new Contact(contact, that));
    });
}

ContactManager.prototype.addContact = function(contact) {
    this.contacts.push(contact);
	this.id++;
}


ContactManager.prototype.deleteContact = function(contactID) {
    this.contacts.splice(contactID,1);
}


function Contact(contact,cMg) {
    for(var key in contact) {
        this[key] = contact[key];
		this["id"]=cMg.id;
    }
}

window.addEventListener('load', function() { // We have hidden PageController, not global
    new PageController();
});