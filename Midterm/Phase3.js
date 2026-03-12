function setup() {
  createCanvas(400, 400); 
  noStroke(); 
}
function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  fill (75);
  rect(7.5, 5, 65, 125, 5); 
  fill(50)
  rect(11, 10,  30, 30, 5);
  fill(0)
  ellipse(20, 19, 10.5, 10.5); 
  ellipse(20, 31, 10.5, 10.5);
  ellipse(31, 25, 10.5, 10.5);
  fill (75)
  ellipse(32, 35, 6, 6);
  fill (200)
  ellipse(32, 15, 6, 6);
  fill (255)
  rect(37.5, 90, 6, 22, 4);
  ellipse(40, 65, 42.5, 42.5);
  fill(75)
  ellipse(40, 65, 32.5, 32.5);
  pop();
}

function draw() {
  drawObject(0, 0, 1);
  drawObject(0, 200, 1);
}
