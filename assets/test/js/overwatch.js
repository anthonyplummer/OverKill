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
