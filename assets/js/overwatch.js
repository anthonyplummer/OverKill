/*! OverWatch - v0.1 - 2016-06-03
 * https://www.github.com/plummera/OverWatch//
* Copyright (c) 2016 Anthony T. Plummer; Unlicensed for the free! */
$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var scene1 = new ScrollMagic.Scene()
                  .addIndicators() // add indicators (requires plugin)
                  .addTo(controller);
});

app.controller('HomeController', ['$scope', 'photos', function($scope, photos) {
  photos.success(function(data) {
    $scope.photos = data;
  });
}]);  

app.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
  photos.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}]);

app.controller('SceneOneController', ['$scope', 'sceneOne', '$routeParams', function($scope, sceneOne, $routeParams) {
  sceneOne.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}]);

$(document).ready(function() {
  if (!name) {
    var name = "Guest";
  }

  var row = '<div class="row"></div>';
  var greeting =  '<div id="greeting" class="col-md-4 col-offset-4 col-centered">' +
                  '<p>Welcome ' + name + '</p>'
                  '</div>';
  var txt1 =  '<div class="col-md-8">' +
              '<p>This is the <u>OverWatch</u> program. Simplistic in nature, cell-splitting accuracy, lightweight, portable, and scalable enough to map the entire enterprise column, end-to-end.</p>' +
              '</div>';

  if (scene01) {
      console.log("Awesome job! You've made it here. Enter the PIN Anthony gave you:");
  }
  $("#scene01").addClass("scene");
  $("#scene01").append(row);
  $("#scene01 .row").append(greeting);

});

app.factory('photos', ['$http', function($http) {
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);
