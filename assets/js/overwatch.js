/*! OverWatch - v0.1 - 2016-06-15
 * https://www.github.com/plummera/OverWatch//
* Copyright (c) 2016 Anthony T. Plummer; Unlicensed for the free! */
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

$(document).ready(function() {

  // adjust Scene #1

  if (!name) {
    var name = "Guest";
  }

  var row = '<div class="row"></div>';
  var greeting =  '<div id="greeting" class="col-md-3 col-md-offset-1">' +
                  '<p>Welcome ' + name + '</p>' +
                  '</div>';
  var txt1 =  '<div class="col-md-8">' +
              '<p>This is the <u>OverWatch</u> program. Simplistic in nature, cell-splitting accuracy, lightweight, portable, and scalable enough to map the entire enterprise column, end-to-end.</p>' +
              '</div>';

  var scene = document.getElementsByClassName("scene");

  $(document).ready(function() {
    for (i=0;i<scene.length;i++) {
      if (i == 0) {
        console.log("Awesome job! You've made it here. Enter the PIN Anthony gave you:");
      }
      while (i > 7) {
        console.log("broke just coz");
        break;
      }
      $(scene[i]).attr('id', 'scene'+ i);
      $(scene[i]).addClass("container");
      console.log("Scene #" + i + " Reporting for duty!");
    }
  });
});

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  // get all slides
	var slides = document.querySelectorAll(".scene");

	// create scene for every slide
	for (i=0; i<slides.length; i++) {
		new ScrollMagic.Scene({
		    triggerElement: slides[i]        
			})
			.setPin(slides[i])
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	}
});

app.factory('photos', ['$http', function($http) {
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           console.log(data);
           return data;
         });
}]);
