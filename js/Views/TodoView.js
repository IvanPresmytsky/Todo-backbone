app.views.TodoView = Backbone.View.extend({

  tagName: 'li',

  className: 'todos-item-container__todos-item',

  todoTemplate: _.template($("#todoTemplate").html()),

  events: {
    "click .todos-item__checkbox": "toggleCompleted",
    "click .del-current-todos-item": "delTodos",
    "dblclick .todos-item__text": "edit"
  },

  initialize: function () {
    this.render();
    this.model.bind('change', this.render, this);
    this.model.bind('destroy', this.remove, this);
  },

  render: function () {
    var checked;
    var containerState;
    var editorState;
    if (this.model.attributes.selection === true) {
      checked = 'checked';
    } else {
      checked = '';
    }
    if (this.model.attributes.edition === true) {
      containerState = 'hidden';
      editorState = 'visible';
    }
    console.log('render todo');
    this.$el.html(this.todoTemplate({id: this.model.cid, containerState, content: this.model.attributes.content, editorState, checked}));
    console.log(this.$el);
  }, 

  toggleCompleted: function () {
    this.model.toggle();
  },

  delTodos: function () {
    this.model.clear();
  },

  edit: function () {
    this.model.set({edition: true});
  }


});