app.views = app.views || {};


app.views.AppView = Backbone.View.extend({

  tagName: 'div',

  className: 'container',

  appTemplate: _.template($("#appTemplate").html()),

  initialize: function() {
    this.todoListView = new app.views.TodoListView();
    this.render();
  },

  render: function () {
    if (!!$('.container')) {
      console.log('app render');
      this.$el.html(this.appTemplate);
      $("body").html(this.$el);
    }
    $('.container').append(this.todoListView.el);
  }

});