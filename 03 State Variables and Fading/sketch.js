// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let onLeft , onRight; // Boolean state variables
let leftFade = 0;
let rightFade = 0;
const FADE_SPEED = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  onLeft = true;
  onRight = false;
}

function updateCurrentSide(){
//update the state variables to represent which side
//of the canvas the mouse cursor is presently on 
  if(mouseX < width / 2.0){
    //mouse is on LEFT
    onLeft = true;
    onRight = false;
  }
  else {
    //mouse is on RIGHT
    onLeft = false;
    onRight = true;
  }

}

function draw() {
  background(220);
  updateCurrentSide();
  renderRectangle();
  //print("  Left:" + onLeft + "   Right" + onRight);
  if(mouseX > width*.25 && mouseX < width*.75 && mouseY > height*.25 && mouseY < height*.75){
    fill(80,160,240,120)
  }
  else{
    fill(20,200,20,120);
  }
  fill(80,160,240,120);
  rect(width*.25,height*.25, width / 2, height / 2);

}

function renderRectangle(){
  if (onLeft) {// onLeft === true
    fill (0, leftFade);
    leftFade += FADE_SPEED;
  }
  else{
    fill(255);
    leftFade = 0;
  }
  fill (0,0, width /2,height);
  
  //draw two rectangles on the screen
  if (onRight){
    fill (0, rightFade);
    rightFade += FADE_SPEED;
  }
  else {
    fill(255);
    rightFade = 0;
  fill(width/2,0,width/2,height);}

}