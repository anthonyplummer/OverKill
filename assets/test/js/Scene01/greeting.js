$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var scene1 = new ScrollMagic.Scene({container: "#scene01"})
                  .addIndicators() // add indicators (requires plugin)
                  .addTo(controller);
});
