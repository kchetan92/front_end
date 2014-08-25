var people = 'Gautham,gautham@example.com,A1234\nGaurav,gaurav@example.com,A1235\nRajesh,rajesh@example.com,B8234\nRamesh,ramesh@example.org,C1294';
var person = people.match(/.+/g);
var lists = [];

for(i in person)	{
	var split = person[i].match(/(.*),(.*),(.*)/);
	var guy={};
	guy.nam = split[1];
	guy.mail = split[2];
	guy.id = split[3];
	lists.push(guy);
}

console.log(lists);