Todos.Router.map(function () {
  this.resource('todos', { path: '/' });
});

Todos.TodosRoute = Ember.Route.extend({
  model: function () {
    return Todos.Todo.find();
  }
});

// console.log('router.js');
// more