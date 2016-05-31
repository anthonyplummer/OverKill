/*! OverWatch - v0.1 - 2016-05-31
 * https://www.github.com/plummera/OverWatch//
* Copyright (c) 2016 Anthony T. Plummer; Unlicensed for the free! */
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: "#trigger"})
                .setVelocity("nav", {opacity: 0}, {duration:400})
                .addIndicators() // add indicators (requires plugin)
                .addTo(controller);

$(document).ready(function () {
  $('p').append("Welcome Leeroy");
  $('#scene01').addClass("scene");
});
