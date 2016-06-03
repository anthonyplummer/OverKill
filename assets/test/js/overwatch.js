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
