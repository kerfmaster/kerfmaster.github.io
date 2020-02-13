// Rollover
// David Rempel
// Feb 12th
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x , y;
let onLeft, onRight, onBottom, onTop;
let leftFade = 0;
let rightFade = 0;
let topFade = 0;
let bottomFade = 0;
const FADE_SPEED = 3;

x = mouseX;
y = mouseY;


function setup() {
  createCanvas(windowWidth, windowHeight);
  onLeft = true;
  onRight = false;
  onBottom = false;
  onTop = true;
}

function draw() {
  background(220);
  rect ( 0 , 0 , width /2, height / 2 );
  rect ( 0 , height / 2 , width / 2, height / 2);
  rect ( width / 2 , height / 2 , width / 2, height / 2);
  rect ( width / 2 , 0 , width / 2, height / 2);
  
}



function updateCorner(){
  if (mouseX < width / 2.0 && mouseY < height / 2.0){
    onLeft = true;
    onTop = true;
  }
  else if (mouseX < width && mouseY > height / 2.0){
    onLeft = true;
    onTop = false;
  }
  else if (mouseX > width / 2.0 && mouseY > height / 2.0){
    onLeft = false;
    onTop = false;
  }

}