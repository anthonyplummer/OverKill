var app = angular.module('overwatch', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "HomeController",
      templateUrl: "views/home.html"
    })
    .when('/photos/:id', {
      controller: 'PhotoController',
      templateUrl: 'views/photo.html'
    })
    .when('/sceneOne', {
      controller: 'SceneOneController',
      templateIrl: "views/home.html"
    })
    .otherwise({
      redirectTo: '/'
    });
});
