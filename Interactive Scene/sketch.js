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
}

function hill(){
  ellipse(windowWidth / 2, windowHeight / 1 , windowWidth * 2, windowHeight * 1);
  fill( 100 ,200, 0);
}

function dinosaur(){
  ellipse(windowWidth / 2, windowHeight / 2.3, 30, 20);
  rect()
}





















