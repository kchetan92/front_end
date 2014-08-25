var a = function foo()	{
	console.log('Damn! infinite loop!'); console.log(typeof(a));
	foo();
}

a();