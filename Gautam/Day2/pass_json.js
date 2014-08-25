function person(maps){
	for(i in maps)	{
		this[i] = maps[i];//this is important,[]
	}
};

var me = new person({
	names:"Chetan",
	email:"k.chetan92@gmail.com",
	place:"Bangalore"
});

console.log(me.names);
console.log(me.email);
console.log(me.place);