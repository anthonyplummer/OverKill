$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  // get all slides
	var slides = document.querySelectorAll(".scene");

	// create scene for every slide
	for (i=0; i<slides.length; i++) {
  	new ScrollMagic.Scene({
  	    triggerElement: slides[i],
        triggerHook: "onLeave"
  		})
  		.setPin(slides[i])
  		.addIndicators() // add indicators (requires plugin)
  		.addTo(controller);
  }
});
