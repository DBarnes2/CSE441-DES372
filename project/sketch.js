// Where is the circle
let x, y;
let person = [];
let direction = 'up';

function setup() {
  createCanvas(720, 400);
  // Starts in the middle
  x = width / 2;
  y = height * (0.8);
  // body
  person[0] = new Circle(x, y, 24);
  // left leg
  person[1] = new Circle(x-10, y - 8, 12);
  // right leg
  person[2] = new Circle(x+10, y - 8, 12);
}

function draw() {
  background(200);
  
  // Draw a circle
  person.forEach(circle => {
  	circle.drawCircle();
  });
  
  // Jiggling randomly on the horizontal axis
  change = random(-1, 1);
  // Moving up at a constant speed
  //y = y - 1;

  person.forEach(circle => {
  	circle.setX(change);
  });
  x = person[0].x;
  y = person[0].y;
  person[1].setLeg("left");
  person[2].setLeg("right");
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}

class Circle {
	constructor(xin, yin, size) {
		this.x = xin;
		this.y = yin;
		this.size = size;
	}

	setX(change) {
		this.x = this.x + change;
	}

	setLeg(leg) {
		if (leg == 'left') {
			if (direction == 'left') {
	  			this.x = x - 8;
	  			this.y = y + 10;
	  		} else if (direction == 'right') {
	  			this.x = x + 8;
	  			this.y = y - 10;
	  		} else if (direction == 'up') {
	  			this.x = x - 10;
	  			this.y = y - 8;
	  		} else if (direction == 'down') {
	  			this.x = x + 10;
	  			this.y = y + 8;
	  		}
		} else if (leg == 'right') {
			if (direction == 'left') {
	  			this.x = x - 8;
	  			this.y = y - 10;
	  		} else if (direction == 'right') {
	  			this.x = x + 8;
	  			this.y = y + 10;
	  		} else if (direction == 'up') {
	  			this.x = x + 10;
	  			this.y = y - 8;
	  		} else if (direction == 'down') {
	  			this.x = x - 10;
	  			this.y = y + 8;
	  		}
		}
	}

	drawCircle() {
		stroke(50);
  		fill(100);
  		if (direction == 'left') {
  			this.x = this.x - 1
  		} else if (direction == 'right') {
  			this.x = this.x + 1
  		} else if (direction == 'up') {
  			this.y = this.y - 1
  		} else if (direction == 'down') {
  			this.y = this.y + 1
  		}
  		ellipse(this.x, this.y, this.size, this.size);
	}
}

function keyPressed() {
  switch (keyCode) {
    case 74:
      if (direction !== 'right') {
        direction = 'left';
      }
      break;
    case 76:
      if (direction !== 'left') {
        direction = 'right';
      }
      break;
    case 73:
      if (direction !== 'down') {
        direction = 'up';
      }
      break;
    case 75:
      if (direction !== 'up') {
        direction = 'down';
      }
      break;
  }
}