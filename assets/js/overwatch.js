/*! OverWatch - v0.1 - 2016-06-01
 * https://www.github.com/plummera/OverWatch//
* Copyright (c) 2016 Anthony T. Plummer; Unlicensed for the free! */
$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var scene1 = new ScrollMagic.Scene({container: "#scene01"})
                  .addIndicators() // add indicators (requires plugin)
                  .addTo(controller);
});

$(document).ready(function() {
  if (!name) {
    var name = "Guest";
  }
  var geeting = "<p>Welcome " + name + "</p>";
  var txt1 = "<p>This is the 'OverWatch' program. Simplistic in nature, cell-splitting accuracy, lightweight, portable, and scalable enough to map the entire enterprise column, end-to-end.</p>";
  var message1 = document.createElement("div");

  scene01 = document.getElementById("scene01");

  if (scene01) {
      console.log("awesome");
  }
  $(scene01).addClass("scene");
  $(scene01).append(message1);

});
