function max()	{
	var max = -200
	for (i in arguments)	{
		if(parseInt(arguments[i])>max)
			max = arguments[i];
	}
	console.log(max);
}

max(1,56,2,100,45,7);

var l=[2,45,12,23,800,76];

max.apply({},l);