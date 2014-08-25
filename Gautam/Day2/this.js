var obj = {};
obj.printName = function(){
	console.log(this.name);
};

obj.name = 'chetan';

obj.printName();