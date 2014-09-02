'use strict';

(function () {
	var anElement =  document.getElementById('div1'),
		aString = 'hello';
	if(aString=='hello')	{
		anotherString = aString;
	}
	function Person(name,age)	{
		this.name = name;
		this.age = age;
	}
	var aPerson = new Person('Murthy', 40);
}());