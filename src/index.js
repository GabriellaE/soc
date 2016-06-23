var template = require('./index.hbs');
var Backbone = require('backbone');

var AppView = Backbone.View.extend({
  el: 'body',
  template: template,

  render: function () {
    //Vi kan sende inn objekter til template funksjonen
    var templateObject = {
        title: 'Hello world'
    };
    var htmlOutput = template(templateObject);

    //oppdaterer this.$el (som i dette tilfellet er body) med html'en som template funksjonen spytter ut.
    this.$el.html(htmlOutput);
  }
});

var appView = new AppView();
appView.render();
