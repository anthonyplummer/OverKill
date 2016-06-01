(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'overwatch',
      template: '<h1><u>OverWatch</u></h1><h2>In case of coincidence.</h2>',
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
