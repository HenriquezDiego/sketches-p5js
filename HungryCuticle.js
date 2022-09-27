// drawCircle function for easier readability
function drawBigCircle(x, y, d) {
  // push() opens a new translation and rotation matrix
  push();
  translate(x, y);
  strokeWeight(2);
  circle(x,y,100*2)
  circle(x,y,85*2)
  circle(x,y,70*2)
  circle(x,y,55*2)
  circle(x,y,40*2)
  circle(x,y,10*2)
  // pop() closes the most recently opened matrix
  pop();
}
function drawCircle(x, y, d) {
  // push() opens a new translation and rotation matrix
  push();
  translate(x, y);
  strokeWeight(2);
  circle(x,y,100)
  circle(x,y,85)
  circle(x,y,70)
  circle(x,y,55)
  circle(x,y,40)
  circle(x,y,10)
  // pop() closes the most recently opened matrix
  pop();
}

function setup() {
  createCanvas(780, 800);
  background(255);
  
}

function draw() {
  for (let i = 0; i < width; i += 100) {
    for (let j = 0; j < height; j += 100) {
      drawBigCircle(i, j, PI / 4);
    }
  }
  for (let i = 50; i < width; i += 100) {
    for (let j = 55; j < height; j += 100) {
      drawCircle(i, j);
    }
  }
}
