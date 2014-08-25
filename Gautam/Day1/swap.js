var x=5;
var y=10;
var ary=[x,y];

function swap(ary)	{
	var z = ary[0];
	ary[0] = ary[1];
	ary[1] = z;
}

swap(ary);

console.log('x='+ary[0]);
console.log('y='+ary[1]);