function foo(x)	{
	var tmp = 10;
	function bar(y)	{
		console.log(x+tmp+y);
	}
	return bar;
}

var x = foo(10);

x(20);