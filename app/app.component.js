(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1><u>OverKill</u></h1><h2>When too much is not enough</h2>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
