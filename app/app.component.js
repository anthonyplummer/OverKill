(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'overwatch',
      template: '<div id="intro" class="col-md-6 col-md-offset-3 centered"><h1><u>Anthony T. Plummer</u></h1><h2>Full stack Web Developer.</h2></div>',
      templateURL: '../index.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
