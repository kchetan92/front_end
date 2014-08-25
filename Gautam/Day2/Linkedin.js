function Profile(fullname)	{
	this.fullname = fullname;
	this.exp = [];
}

Profile.prototype.addExperience = function(e){
	if(e instanceof Experience)
	this.exp.push(e);
};

Profile.prototype.showExperience = function()	{
	for(i in this.exp)	{
		console.log(this.exp[i].position + " at "+this.exp[i].company);
	}
};

function Company(name_company)	{
	this.comp_name = name_company;
};

function Experience(position,comp)	{
	this.position = position;
	this.company = comp.comp_name;
};


usr1 = new Profile('chetan');

e1 = new Experience('trainee',new Company('sapient'));
e2 = new Experience('programmer',new Company('Yes'));

usr1.addExperience(e1);
usr1.addExperience(e2);
usr1.showExperience();