function person(name,place){
	var send ="Hi I am "+name+".";
	if(place !== undefined)	{
		send+=" And I am from "+place+".";
	}

	console.log(send);
};

var meh = new person('chetan');
var mehe = new person('harish','Mangalore');