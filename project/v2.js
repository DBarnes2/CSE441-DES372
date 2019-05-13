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