var myList = new Array();
Array.prototype.emplty_list = function()	{
	while(this.length>0)	{
		console.log(this.length);
		this.pop();
	}
}

myList.push(10);
myList.push(20);
myList.push(30);
myList.push(40);

console.log('array: '+myList);
myList.emplty_list();
console.log('array: '+myList);