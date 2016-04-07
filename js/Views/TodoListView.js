app.views.TodoListView = Backbone.View.extend({

  tagName: 'div',

  className: 'todos-container',

  headerTemplate: _.template($("#todosHeaderTemplate").html()),

  todosListTemplate: _.template($("#todosListTemplate").html()),

  footerTemplate: _.template($("#todosFooterTemplate").html()),

  events: {
    'keypress': 'createTodo'
  },

  initialize: function () {
    this.todoList = new app.models.TodoList;
    this.todoList.bind('add', this.render, this);
    this.todoList.bind('remove', this.render, this);
    this.render();
  },

  render: function () {

    if ($('.todos-header')) {
      this.$el.html(this.headerTemplate);
      this.$el.append(this.todosListTemplate);
    }

   if (this.newTodo) {
      console.log(this.todoList);
      this.list = $(".todos-item-container__list");
      for (var i = 0; i < this.todoList.length; i++) {
        this.newTodoView = new app.views.TodoView({model: this.todoList.models[i]});
        this.list.append(this.newTodoView.el);
      }
      
      this.$el.append(this.footerTemplate);
    }
  },

  createTodo: function(e) {
    if(e.keyCode !== 13) return;
    this.newTodo = new app.models.TodoModel;
    this.newTodo.set({content: e.target.value});
    this.todoList.add(this.newTodo);
  }

});