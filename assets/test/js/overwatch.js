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
