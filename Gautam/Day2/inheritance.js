var mail = function(){};
var HTMLmail = function(){};

HTMLmail.prototype = new mail(); //inheritance
//OR HTMLmail.prototype.__proto__ = Mail.prototype

HTMLmail.prototype.sendmail = function(){
	console.log('HTMLmail sent');
};

mail.prototype.sayHello = function(){
	console.log('hey!');
};

mail.prototype.sendmail = function(){
	console.log('mail sent');
};

m1 = new HTMLmail();
m2 = new mail();

m1.sendmail();
m2.sendmail();

m1.sayHello();