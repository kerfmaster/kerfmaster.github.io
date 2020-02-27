// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Image Demo
let lionL, lionR;
let movingLeft = true;
let pinImages = [];

function preload() {
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
  for (let i = 0; i < 9; i++);
  pinImages.push(loadImage("assets/pin-0") + i + ".png");

}

function determineDirection() {
  if (pmouseX < mouseX) {
    //Moving right
    movingLeft = false;
  }
  else if (pmouseX > mouseX) {
    //moving left
    movingLeft = true;
  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  noCursor();
}

function draw() {
  print(movingLeft);
  background(220);
  determineDirection();
  if (keyIsPressed) {
    tint(50, 100, 100);
  }
  else {
    noTint();
  }

  if (movingLeft) {
    image(lionL, mouseX, mouseY, 130, 90);
  }
  else {
    image(lionR, mouseX, mouseY, 130, 90);
  }


}

