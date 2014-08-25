var id = 0;

function PageController() {
    this.cManager = new ContactManager;
    this.cView = new ContactsView;
	var that=this;
	this.cView.addObserver('contactAdded', function() {
		that.cManager.addContact(new Contact(that.cView.getContactsFromForm()));
		that.cView.render(that.cManager.contacts);
		that.cView.clearForm();
	});

    this.cView.addObserver('contact',function(){
        that.cManager.deleteContact()
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

    var data;
    var xml_req = new XMLHttpRequest();
    xml_req.onreadystatechange = function() {
        if(xml_req.readyState == 4 && xml_req.status==200)    {
            callback(xml_req.responseText);
        }
    }

    xml_req.open("GET","data.json",true);
    xml_req.send();
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
    var table = document.getElementById('contactstable');
	table.innerHTML='';
    contacts.forEach(function(contact) {
        var row = table.insertRow(-1);
        row.insertCell(0).innerHTML = contact.name;
        row.insertCell(1).innerHTML = contact.place;
        var btn_delete = document.createElement('button');
        btn_delete.innerText = 'Delete'
        btn_delete.id = 'delete'+name+place;
        row.insertCell(2).appendChild(btn_delete);
        btn_delete.addEventListener('click',function(){
            console.log(contact);
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
}

function Contact(contact) {
    for(var key in contact) {
        this[key] = contact[key];
    }
}

ContactManager.prototype.addContact = function(contact) {
    this.contacts.push(contact);
}
ContactManager.prototype.deleteContact = function(ctact)  {
    for(i in contacts)  {
        if (contacts[i]===ctact)    {
            console.log(i);
            return 0;
        }
    }
    console.log('not found');
};

ContactManager.prototype.addContactsFromJSON = function(jsonString) {
    var contactsObj = JSON.parse(jsonString);
    var that = this;
    contactsObj.forEach(function(contact) {
        that.addContact(new Contact(contact));
    });
}


window.addEventListener('load', function() { // We have hidden PageController, not global
    new PageController();
});
