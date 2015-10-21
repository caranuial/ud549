function AddressBook  () {
	this.contact = [];
	this.initialComplete = false;
}

AddressBook.prototype.getInitialContacts = function(cb){
	var self = this;

	setTimeout(function(){
		self.initialComplete = true;
		if (cb) { 
			return cb();
		}
	}, 3);
}


AddressBook.prototype.addContact = function(contact){
	this.contact.push(contact);
}

AddressBook.prototype.getContact = function(init){
	return this.contact[init];
}

AddressBook.prototype.deleteContact = function(init){
	this.contact.splice(init, 1);
}

