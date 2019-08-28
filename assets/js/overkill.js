/*! OverWatch - v0.1 - 2016-07-07
 * https://www.github.com/plummera/OverWatch//
* Copyright (c) 2016 Anthony T. Plummer; Unlicensed for the free! */
app.controller('HomeController', ['$scope', 'photos', function($scope, photos) {
  photos.success(function(data) {
    $scope.photos = data;
  });
}]);

app.controller('SceneController', function() {
  //Collect scenes
  var scene = document.getElementsByClassName("scene");

  var greeting =  '<div id="greeting" class="col-md-12">' +
                '<h1>Anthony T. Plummer</h1>' +
                '<h2>Enterprise Web Architecht</h2>' +
                '</div>';
  var txt1 =  '<div class="col-md-12">' +
              '<p>This is the <u>OverKill</u> program. Simplistic in nature, cell-splitting accuracy, lightweight, portable, and scalable enough to map the entire enterprise column, end-to-end.</p>' +
              '</div>';

  for (i=0;i<scene.length;i++) {
    while (i > 7) {
      console.log("broke just coz");
      break;
    }
    $(scene[i]).attr('id', 'scene'+ i);
    $(scene[i]).addClass("fluid-container");
    console.log("Scene #" + i + " Reporting for duty!");

    if (i == 0) {
    // Adjust Scene 1
      $("html, body").animate({scrollTop: $('#scene0').offset().top }, 900);
      console.log("Awesome job! You've made it here. Enter the PIN Anthony gave you:");
    }
  }

app.factory('photos', ['$http', function($http) {
  return $http.get('assets/JSON/test.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           console.log(data);
           return data;
         });
}]);

app.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
  photos.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}]);



// Initiate ScrollMagic
var controller = new ScrollMagic.Controller();

var wipeAnimation = new TimelineMax()
  .fromTo(scene[1], 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})

// Scene 0
new ScrollMagic.Scene({
  triggerElement: $(scene[0]),
  triggerHook: "onLeave"
})
.setPin(scene[0])
.setTween(wipeAnimation)
.addIndicators()
.addTo(controller);

$('#scene0').append(greeting);
$('div#greeting').append(txt1);

// Scene 1
new ScrollMagic.Scene({
  triggerElement: $(scene[1]),
  duration: "2000",
  triggerHook: "onLeave"
})
.setPin(scene[1])
.setVelocity(".box1", {opacity: 0}, {duration: 100})
.addIndicators()
.addTo(controller);

// Scene 2
new ScrollMagic.Scene({
  triggerElement: $(scene[2]),
  triggerHook: "onLeave"
})
.setPin(scene[2])
.addIndicators()
.addTo(controller);

// Scene 3
new ScrollMagic.Scene({
  triggerElement: $(scene[3]),
  triggerHook: "onLeave"
})
.setPin(scene[3])
.addIndicators()
.addTo(controller);

// Scene 4
new ScrollMagic.Scene({
  triggerElement: $(scene[4]),
  triggerHook: "onLeave"
})
.setPin(scene[4])
.addIndicators()
.addTo(controller);

// Scene 5
new ScrollMagic.Scene({
  triggerElement: $(scene[5]),
  triggerHook: "onLeave"
})
.setPin(scene[5])
.addIndicators()
.addTo(controller);

// Scene 6
new ScrollMagic.Scene({
  triggerElement: $(scene[6]),
  triggerHook: "onLeave"
})
.setPin(scene[6])
.addIndicators()
.addTo(controller);

});

app.factory('photos', ['$http', function($http) {
  return $http.get('assets/JSON/test.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           console.log(data);
           return data;
         });
}]);
