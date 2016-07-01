var app = angular.module('overwatch', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "SceneController as scene",
      templateUrl: "views/home.html"
    })
    .when('/photos/:id', {
      controller: 'PhotoController as photo',
      templateUrl: 'views/photo.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});

(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic.bootstrap(app.AppComponent);
  });
})(window.app || (window.app = {}));
