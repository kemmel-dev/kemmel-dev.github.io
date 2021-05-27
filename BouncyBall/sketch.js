let ballX, ballY;
let ballSize = 50;

let ballSpeed = 5;

let ballColor = 0;

function setup() {
  createCanvas(400, 400);
  ballX = width / 2;
  ballY = height / 2;
}

function draw() {
  background(220);
  fill(ballColor);
  ellipse(ballX, ballY, ballSize);
  
  ballY += ballSpeed;
  
  if (ballY > height - ballSize / 2) {
    ballSpeed = -ballSpeed;
    ballColor = color(random(255), random(255), random(255));
  }
  
  if (ballY < ballSize / 2) {
    ballSpeed = -ballSpeed;
    ballColor = color(random(255), random(255), random(255));
  }
  
}