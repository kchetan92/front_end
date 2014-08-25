function addNumbers(x,y)	{
	return x+y;
}

function mulNumbers(x,y)	{
	return x*y
}

//this = workers objects here whihc listen to event onmessages
this.onmessage = function(event)	{
	var data = event.data;
	switch(data.op)	{
		case 'mult':
			postMessage(mulNumbers(data.x,data.y));
			break;
		case 'add':
			postMessage(addNumbers(data.x,data.y));
			break;
		default:
			postMessage("wrong opt");
	}
}