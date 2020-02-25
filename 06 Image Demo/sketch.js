// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let lionL, lionR;
let movingLeft = true;
let movingRight = true;

function preload(){
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
  //pin00 = loadImage("assets/pin-00.png");
  //pin01 = loadImage("assets/pin-01.png");
  //pin02 = loadImage("assets/pin-02.png");
  //pin03 = loadImage("assets/pin-03.png");
  //pin04 = loadImage("assets/pin-04.png");
  //pin05 = loadImage("assets/pin-05.png");
  //pin06 = loadImage("assets/pin-06.png");
  //pin07 = loadImage("assets/pin-07.png");
  //pin08 = loadImage("assets/pin-08.png");

}

function determineDirection(){
  if(pmouseX < mouseX){
    //moving right
    movingLeft = false;
  }
  else if (pmouseX > mouseX){
    //moving left
    movingRight = false;
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
  //image(lionR, mouseX, mouseY);
  //image(pin01, mouseX, mouseY);
  determineDirection();
  if (keyIsPressed){
    
  }
  if(movingLeft){
    image(lionL, mouseX, mouseY, 130, 90);
  }
  else{
    image(lionR, mouseX, mouseY, 130, 90);
  }
}
