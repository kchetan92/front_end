function PageController() {
    this.cManager = new ContactManager;
    this.cView = new ContactsView;
	var that=this;
	
	this.cView.addObserver('contactAdded', function(name,place) {
		that.cManager.addContact(new Contact(that.cView.getContactsFromForm(name,place),that.cManager));
		that.cView.render(that.cManager.contacts);
		that.cView.clearForm(name,place);
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

}

function ContactsView() {
	var addcontact=$('#addcontact')
	var name=$('#name');
	var place=$('#place');
	var that=this;
	this.eventListeners={};
	$(addcontact).submit(function(event){
	event.preventDefault();
	that.eventListeners.contactAdded.forEach(function(callback) {
	callback(name,place);
	});
	});
}

ContactsView.prototype.addObserver= function(eventType, callback) {
if(!this.eventListeners[eventType])
 this.eventListeners[eventType]=[];
 this.eventListeners[eventType].push(callback);

}

ContactsView.prototype.getContactsFromForm=function(name,place){
	return { name : $(name).val(), place: $(place).val()};
}

ContactsView.prototype.render = function(contacts) {
	var that=this;
    var table = $('#contactstable');
	table.html('');
	contacts.forEach(function(contact) {
		var btn_edit=$("<button>");
		btn_edit.html("Edit");
		var btn_delete=$("<button>");
		btn_delete.html("Delete");
		$('<tr>')
			.append($('<td>').text(contact.name))
			.append($('<td>').text(contact.place))
			.append($('<td>').append(btn_edit))
			.append($('<td>').append(btn_delete))
			.appendTo(table);
			$(btn_delete).click(function(event){
			that.eventListeners.contactDelete.forEach(function(callback) {
			callback(contact.id);
	});
	});
    });
}

ContactsView.prototype.clearForm= function(name,place) {
	name.val('');
	place.val('');
	name.focus();
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
    if(this.contacts.length===1) {
		this.contacts.pop();
	}
	else {
		this.contacts.splice(contactID,1);
		for(var i=0;i<this.contacts.length;i++) {
			this.contacts[i].id=i;
    }
	}
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