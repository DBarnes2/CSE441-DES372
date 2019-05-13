let trees = [];
// using yellow_lines as a queue
var yellow_lines = [];
let timeSinceMarker = 0;
let moving = true;
let speed = 20;
let lines_on_screen = 2;

let x = 0;
let y = 0;
let dim = 80.0;

function setup() {
  createCanvas(1920, 1080);
  colorMode(RGB);

  
  // Grass
  fill(86, 176, 0);
  rect(0, 0, 1920, 1080);
  // Road
  fill(0, 0, 0);
  rect(750, 0, 420, 1080);
  // Yellow Markers
  for (var i = 0; i < lines_on_screen; i++) {
    yellow_lines[i] = new Yellow_Line(950, i * (1080 / lines_on_screen));
  }

  tree = loadImage('tree.png'); // Load the tree image
  // Displays the image at its actual size at point (0,0)
  image(tree, 0, 0);
  // // Displays the image at point (0, height/2) at half size
  image(tree, 0, height / 2, tree.width / 2, tree.height / 2);
}

function draw() {
  // Grass
  fill(86, 176, 0);
  rect(0, 0, 1920, 1080);
  // Road
  fill(0, 0, 0);
  rect(750, 0, 420, 1080);
  yellow_lines.forEach(yellow_line => {
    if (moving) {
      yellow_line.move();
    }
    yellow_line.drawLine();
  });

  // button click
  if (mouseIsPressed) {
    moving = false;
  } else {
    moving = true;
  }
}

class Yellow_Line {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move() {
    this.y = this.y + speed;
    if (this.y > 1080) {
      this.y = 0;
    } else if (this.y < 0) {
      this.y = 1080
    }
  }
  
  drawLine() {
    // Yellow Lines
    fill(255, 204, 0);
    rect(this.x, this.y, 20, 100);
  }
}


function moveDown() {
  // Animate by increasing our x value
  x = x + 0.8;
  // If the shape goes off the canvas, reset the position
  if (x > width + dim) {
    x = -dim;
  }

  // Even though our rect command draws the shape with its
  // center at the origin, translate moves it to the new
  // x and y position
  translate(x, height / 2 - dim / 2);
  // fill(255);
  rect(-dim / 2, -dim / 2, dim, dim);

  // Transforms accumulate. Notice how this rect moves
  // twice as fast as the other, but it has the same
  // parameter for the x-axis value
  translate(x, dim);
  // fill(0);
  rect(-dim / 2, -dim / 2, dim, dim);
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