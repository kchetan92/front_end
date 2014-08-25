//printer function which works with key value pairs of any type and
//prints it

function Person(nam)	{
	this.nam = nam;
}

function printer(){
	console.log('details:');
	for(i in this)	{
		console.log(i+" : "+this[i]);
	}
}


var k = new Person('chetan2','utfr');
printer.call({name:"chetan",addess:"Bangalore"});
printer.call(k);