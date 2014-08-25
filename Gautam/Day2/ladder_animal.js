var animal_list = [];

function createAnimal (nam,rung,eyes,hands,legs,fly)	{
	this.nam = nam;
	this.rung = rung;
	this.eyes = eyes;
	this.hands = hands;
	this.legs = legs;
	this.fly = fly;
	if(occupied_or_not(rung)==true)	{
		console.log('Animal already present here');
		return 0;
	}
	animal_list.push(this);
}

function occupied_or_not(rung)	{
	for(var i = 0;i<animal_list.length;i++)	{
		if(animal_list[i].rung == rung)
			return true;
	}
	return false;
}

function hop(rung)	{
	for(var i=0;i<animal_list.length;i++)	{
		if (animal_list[i].rung == rung)	{
			if(occupied_or_not(rung+1)==true)	{
				console.log('rung occupied!');
				return false;
			}
			else	{
				animal_list[i].rung = rung+1;
				showAnimalStatus();
				return true;
			}
		}
	}
	console.log('No Animal here!');
	return false;
}

function showAnimalStatus()	{
	for(var i=0;i<animal_list.length;i++)	{
		console.log("name: "+animal_list[i].nam+" rung: "+animal_list[i].rung);
	}
}

new createAnimal('monkey',3,2,2,2,false);
new createAnimal('squirrel',5,2,0,4,false);
new createAnimal('pigeon',8,2,0,0,true);
new createAnimal('eagle',15,2,0,0,true);
new createAnimal('monkey',17,2,2,2,false);

showAnimalStatus();