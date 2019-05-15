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

  // Animation function
  function move_to(x = "-44%", y = "-697%", s = 5000) {
    $("#map").animate({left: x, top: y}, 3000);
    // alert("works" + x + " " + y);
  }

  function get_keypress(e) {
    var keyCode = e.keyCode || e.which,
    arrow = {left: 37, up: 38, right: 39, down: 40 };
    switch (keyCode) {
        case arrow.left: 
          console.log("LEFT");
          $('#map').animate({"left": "-=1px"}, "slow");
        break;
        case arrow.right: 
          console.log("RIGHT");
          $('#map').animate({"left": "+=1px"}, "slow");
        break;
    }
  }

  function wait_press() {
    $(document).keydown(function(e) {
      switch(e.which) {
          case 37: // left
          break;
  
          case 38: // up
          break;
  
          case 39: // right
          break;
  
          case 40: // down
          break;
  
          default: return; // exit this handler for other keys
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
  });
  }
    


  // Start

  move_to("-600px", "-4000px", 2000, function() {
    $(document).keydown(function (e) {get_keypress(e);});
  });
  wait_press();
  console.log("1");
  move_to("-600px", "-3000px", 2000);
  console.log("2");

  move_to("-600px", "-2000px", 2000);
  console.log("3");


  // $("#map").animate({top: "-599%"}, 3000, function() {
  //   console.log("finished move up");


  //   $(document).keydown(function (e) {
  //     var keyCode = e.keyCode || e.which;
  //     switch (keyCode) {
  //       case arrow.right:
  //         console.log("RIGHT");
  //         $("#map").animate({left: "-333%"}, 3000);
  //       break;
  //       case arrow.left:
  //         console.log("LEFT");
  //         // $("#map").animate({left: "48%", top: ""}, 3000);
  //         $("#map").animate({left: "34%", top: "-352%"}, 3000);
  //       break;
  //     }
  //   });

  //   $(document).keydown(function (e) {
  //     var keyCode = e.keyCode || e.which;
  //     switch (keyCode) {
  //       case arrow.right:
  //         console.log("RIGHT");
  //         $("#map").animate({left: "-333%"}, 3000);
  //       break;
  //       case arrow.left:
  //         console.log("LEFT");
  //         // $("#map").animate({left: "48%", top: ""}, 3000);
  //         $("#map").animate({left: "110%", top: "88%"}, 3000);
  //       break;
  //     }
  //   });

  //   // $(document).keydown(function (e) {
  //   //   var keyCode = e.keyCode || e.which;
  //   //   switch (keyCode) {
  //   //     case arrow.right:
  //   //       console.log("RIGHT");
  //   //       $("#map").animate({left: "45%", top:"221%"}, 3000);
  //   //     break;
  //   //     case arrow.left:
  //   //       console.log("LEFT");
  //   //       // $("#map").animate({left: "48%", top: ""}, 3000);
  //   //       $("#map").animate({left: "45%", top:"221%"}, 3000);
  //   //     break;
  //   //   }
  //   // });

  //   // $('#map').prepend('<img id="theImg" src="theImg.png" />')
  //   $("#map").attr("src", img.attr("src").replace("trans2.png", "screen1.jpg"));
  //   alert("end screen!");
    
  // });

  // $("#map").animate({top: "-100px", left: "100px"}, 3000, function() {
  //   console.log("finished moving up!");
  //   $('#map').animateRotate(90, 2000, "swing");
  // });
});


