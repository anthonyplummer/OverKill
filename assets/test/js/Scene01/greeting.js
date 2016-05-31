var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: "#trigger"})
                .setVelocity("nav", {opacity: 0}, {duration:400})
                .addIndicators() // add indicators (requires plugin)
                .addTo(controller);
