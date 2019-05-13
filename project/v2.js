let map;

function setup() {
  createCanvas(1600, 900);
  colorMode(RGB);

  // Grass
  fill(86, 176, 0);
  rect(0, 0, 1920, 1080);

  map = loadImage('map.jpg'); // Load the tree image
  // Displays the image at its actual size at point (0,0)
  image(map, 0, 0, 100, 100);
  // // Displays the image at point (0, height/2) at half size
  image(map, 0, height / 2, map.width / 2, map.height / 2);
}

function draw() {
  image(map, 0, 0, 100, 100);
}

// Change speed with 'i' and 'k' keys
function keyPressed() {
  switch (keyCode) {
    case 73:
      speed += 5;
      break;
    case 75:
      speed -= 5;
      break;
  }
}

// Rotate plugin
$.fn.animateRotate = function(angle, duration, easing, complete) {
  return this.each(function() {
    var $elem = $(this);

    $({deg: 0}).animate({deg: angle}, {
      duration: duration,
      easing: easing,
      step: function(now) {
        $elem.css({
           transform: 'rotate(' + now + 'deg)'
         });
      },
      complete: complete || $.noop
    });
  });
};

// // Get keypress
// $(document).keydown(function (e) {
//   var keyCode = e.keyCode || e.which,
//   arrow = {left: 37, up: 38, right: 39, down: 40 };

//   switch (keyCode) {

//       case arrow.left: 
//         console.log("LEFT");
//         $('#map').animate({"left": "-=1px"}, "slow");
//       break;

//       case arrow.right: 
//         console.log("RIGHT");
//         // $('#map').animate({"left": "+=1px"}, "slow");
//       break;
//   }
// });

// All custom jQuery will go here
$(document).ready(function() {
  var arrow = {left: 37, up: 38, right: 39, down: 40 };

  $("#map").animate({top: "-599%"}, 3000, function() {
    console.log("finished move up");

    $(document).keydown(function (e) {
      var keyCode = e.keyCode || e.which;
      switch (keyCode) {
        case arrow.right:
          console.log("RIGHT");
          $("#map").animate({left: "-333%"}, 3000);
        break;
        case arrow.left:
          console.log("LEFT");
          // $("#map").animate({left: "48%", top: ""}, 3000);
          $("#map").animate({left: "34%", top: "-352%"}, 3000);
        break;
      }
    });

    
    
  });
  // $("#map").animate({top: "-100px", left: "100px"}, 3000, function() {
  //   console.log("finished moving up!");
  //   $('#map').animateRotate(90, 2000, "swing");
  // });
});


