$(document).ready(function() {
  var controller = new ScrollMagic.Controller();
  var row = '<div class="row"></div>';


  var scene1 = new ScrollMagic.Scene({
                                      triggerElement: "#scene01",
                                      triggerHook: 1,
                                      duration: '100%'
                                    })

                  .setTween(TweenMax.to('#scene01', 1, {y: '0%', autoAlpha: 1, ease:Power1.easeIn}))
                  .addIndicators("scene1") // add indicators (requires plugin)
                  .addTo(controller);


  var scene2 = new ScrollMagic.Scene({
                                    triggerElement: "#scene02",
                                    triggerHook: 1,
                                    reverse: true,
                                    duration: '100%',
                                  })

                  .setTween(TweenMax.to('#scene02', 1, {y: '0%', autoAlpha: 1, ease:Power1.easeIn}))
                  .addIndicators() // add indicators (requires plugin)
                  .addTo(controller);

                  $("#scene02").addClass("scene fluid-container");
                  $("#scene02").append(row);


  var scene3 = new ScrollMagic.Scene({
                                    triggerElement: "#scene03",
                                    triggerHook: 1,
                                    reverse: true,
                                  })

                  .setTween(TweenMax.to('#scene03', 1, {y: '0%', autoAlpha: 1, ease:Linear.easeIn}))
                  .addIndicators() // add indicators (requires plugin)
                  .addTo(controller);

                  $("#scene03").addClass("scene fluid-container");
                  $("#scene03").append(row);

  var scene4 = new ScrollMagic.Scene({
                                    triggerElement: "#scene04",
                                    triggerHook: 1,
                                    reverse: true,
                                  })

                  .setTween(TweenMax.to('#scene04', 1, {y: '0%', autoAlpha: 1, ease:Linear.easeIn}))
                  .addIndicators() // add indicators (requires plugin)
                  .addTo(controller);

                  $("#scene04").addClass("scene fluid-container");
                  $("#scene04").append(row);

  var scene5 = new ScrollMagic.Scene({
                                    triggerElement: "#scene05",
                                    triggerHook: 1,
                                    reverse: true,
                                  })

                  .setTween(TweenMax.to('#scene05', 1, {y: '0%', autoAlpha: 1, ease:Linear.easeIn}))
                  .addIndicators() // add indicators (requires plugin)
                  .addTo(controller);

                  $("#scene05").addClass("scene fluid-container");
                  $("#scene05").append(row);

  var scene6 = new ScrollMagic.Scene({
                                    triggerElement: "#scene06",
                                    triggerHook: 1,
                                    reverse: true,
                                  })

                  .setTween(TweenMax.to('#scene06', 1, {y: '0%', autoAlpha: 1, ease:Linear.easeIn}))
                  .addIndicators() // add indicators (requires plugin)
                  .addTo(controller);

                  $("#scene06").addClass("scene fluid-container");
                  $("#scene06").append(row);

  var scene7 = new ScrollMagic.Scene({
                                    triggerElement: "#scene07",
                                    triggerHook: 1,
                                    reverse: true,
                                  })

                  .setTween(TweenMax.to('#scene07', 1, {y: '0%', autoAlpha: 1, ease:Linear.easeIn}))
                  .addIndicators() // add indicators (requires plugin)
                  .addTo(controller);

                  $("#scene07").addClass("scene fluid-container");
                  $("#scene07").append(row);
});
