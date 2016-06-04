$(document).ready(function() {

  // adjust Scene #1

  $("html, body").animate({scrollTop: $('#scene01').offset().top }, 100);
  $('body').addClass('no_overflow');

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

  if (scene01) {
      console.log("Awesome job! You've made it here. Enter the PIN Anthony gave you:");
  }
  $("#scene01").addClass("scene fluid-container");
  $("#scene01").append(row);
  $("#scene01 .row").append(greeting);


  $(function () { // wait for document ready
  		// init
  		var controller = new ScrollMagic.Controller({
  			globalSceneOptions: {
  				triggerHook: 'onLeave'
  			}
  		});

  		// get all slides
  		var slides = document.querySelectorAll("div.scene");

  		// create scene for every slide
  		for (var i=0; i<slides.length; i++) {
  			new ScrollMagic.Scene({
  					triggerElement: slides[i]
  				})
  				.setPin(slides[i])
  				.addIndicators() // add indicators (requires plugin)
  				.addTo(controller);
  		}
  	});

});
