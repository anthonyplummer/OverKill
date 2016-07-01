app.controller('HomeController', ['$scope', 'photos', function($scope, photos) {
  photos.success(function(data) {
    $scope.photos = data;
  });
}]);

app.controller('SceneController', function() {
  //Collect scenes
  var scene = document.getElementsByClassName("scene");

  var greeting =  '<div id="greeting" class="col-md-3 col-md-offset-1">' +
                '<p>Welcome</p>' +
                '</div>';
  var txt1 =  '<div class="col-md-8">' +
              '<p>This is the <u>OverWatch</u> program. Simplistic in nature, cell-splitting accuracy, lightweight, portable, and scalable enough to map the entire enterprise column, end-to-end.</p>' +
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

  $('#scene0').append(greeting);

  // Initiate ScrollMagic
  var controller = new ScrollMagic.Controller();

  // create scene for every scene
  for (i=0; i<scene.length; i++) {
  		new ScrollMagic.Scene({
  		    triggerElement: scene[i],
          triggerHook: "onLeave"
  			})
  			.setPin(scene[i])
  			.addIndicators() // add indicators (requires plugin)
  			.addTo(controller);
  };
});
