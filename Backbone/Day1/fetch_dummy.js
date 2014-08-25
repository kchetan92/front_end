var TodosCollection = Backbone.Collection.extend({
	model:Todo,
	url:'/todos'
});

var todos = new TodosCollection();
todos.fetch();//sends Http get to /todos,, gets a collection

var todo2 = todos.get(2);
todo2.set('title','go fishing');
todo2.save();//send HTTP put to /todos/2
//if new record it is POST

todos.create({title:'try out code samples'});
//send HTTP POST to /todos and adds to Collection