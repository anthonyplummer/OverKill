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
