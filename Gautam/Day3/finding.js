function Query(){};

Query.prototype.find  = function(){
	arguments[0].findByName(arguments[1]);
	arguments[0].findByPlace(arguments[2]);
};

function peopleManager(){};

peopleManager.prototype.findByName = function(nam){
	console.log('finding by name :' + nam);
};

peopleManager.prototype.findByPlace = function(place){
	console.log('finding by place :' + place);
};

var obj = new peopleManager();

q = new Query();

q.find(obj,'chetan','bangalore');


/*query.prototype.find =function(field,value){
	this['findBy'+field[0].toUpperCase()+field.slice(1)](value)


	instead of q.find.call

	p.find('name','chetan')
}*/