// Interactive Scene  
// David Rempel
// 2/6/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x , y;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 150, 255);
  hill();
  dinosaur();
  sun();
}

function hill(){
  fill( 100 ,200, 0);
  rectMode(CENTER);
  rect(width / 2, width / 1, windowWidth, windowHeight / .95);
  rectMode(CORNER);
  
}

function dinosaur(){
  fill(235, 117, 77);
  rect(windowWidth / 2, windowHeight / 2.3, windowWidth * 0.011, 40); // neck
  rect(windowWidth / 2.02, windowHeight / 2.1, windowWidth * 0.009, 25); //leg 1
  rect(windowWidth / 1.97, windowHeight / 2.1, windowWidth * 0.009, 25); //leg 2
  rect(windowWidth / 1.92, windowHeight / 2.1, windowWidth * 0.009, 25); //leg 3
  rect(windowWidth / 1.87, windowHeight / 2.1, windowWidth * 0.009, 25); //leg 4
  ellipse(windowWidth / 2, windowHeight / 2.3, windowWidth * 0.03, windowHeight * 0.025); //head
  ellipse(windowWidth / 1.923, windowHeight / 2.09, windowWidth * 0.05  , windowHeight * 0.03); //torso
}

function sun(){
  fill(240, 240, 40);
  ellipse(windowWidth / 1.25, windowHeight / 10, 200);
}























