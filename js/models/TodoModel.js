var app = app || {};
app.models = app.models || {};

_.templateSettings = {
  interpolate : /\{\{(.+?)\}\}/g
};

app.models.TodoModel = Backbone.Model.extend({
  defaults: function returnDefaults () {
    return {
      content: 'new Todo ' + this.cid,
      state: 'Active',
      selection: false,
      containerState: '',
      editorState: '',
      edition: false
    };
  },

  toggle: function() {
    this.set({selection: !this.get("selection")});
  },


  clear: function removeTodo () {
    this.destroy();
  }

});