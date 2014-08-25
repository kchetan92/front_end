var l = [1,2,3,4,5];

function emptyList(x)	{
	var y = x.length;
	for(var i=0;i<y;i++)	{
		//delete l[i]; doesn't work very well
		l.pop();
	}
}

console.log(l);
emptyList(l);
console.log(l);