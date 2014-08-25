var data;
var xml_req = new XMLHttpRequest();
var all_data = [];
xml_req.onreadystatechange = function() {
	if(xml_req.readyState == 4 && xml_req.status==200)    {
		data = xml_req.responseText;
		var pattern_views = /[0-9]+ +views/g;
		var pattern_votes = /[0-9]+ +votes/g;
		var hits_views = data.match(pattern_views);
		var hits_votes = data.match(pattern_votes);
		for(var i = 0;i<hits_views.length;i++)	{
			var ques = {};
			ques.views = parseInt(hits_views[i]);
			ques.votes = parseInt(hits_votes[i]);
			console.log(ques);
			all_data.push(ques);
		}
	}
}

xml_req.open("GET",'soverflow.htm',true);
xml_req.send();
