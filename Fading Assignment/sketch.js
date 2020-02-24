// Rollover
// David Rempel
// Feb 12th
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x , y;
let onLeft, onRight, onBottom, onTop;
let leftTopFade = 0;
let rightBottomFade = 0;
let rightTopFade = 0;
let leftBottomFade = 0;
const FADE_SPEED = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  onLeft = true;
  onRight = false;
  onBottom = false;
  onTop = true;
}

function draw() {
  background(220);
  updateCurrentCorner();
  renderRectangle();
}

function renderRectangle(){
  if (onLeft && onTop){
    fill (255,0,0, leftTopFade);
    leftTopFade += FADE_SPEED; 
   
  }
  else{
    fill(255);
    leftTopFade = 0;
  }
  rect ( 0 , 0 , width /2, height / 2 );
  if (onLeft && onBottom){
    fill (255,0,0, leftBottomFade);
    leftBottomFade += FADE_SPEED; 
   
  }
  else{
    fill(255);
    leftBottomFade = 0;
  }
  rect (2 , height / 2 , width / 2, height / 2);
  if (onRight && onBottom){
    fill (255,0,0, rightBottomFade);
    rightBottomFade += FADE_SPEED; 
  }
  else{
    fill(255);
    rightBottomFade -= 0;
  }
  rect (width / 2 , height / 2 , width / 2, height / 2);
  if (onRight && onTop){
    fill (255,0,0, rightTopFade);
    rightTopFade += FADE_SPEED; 
   
  }
  else{
    fill(255);
    rightTopFade -= 0;
  }
  rect ( width / 2 , 0 , width / 2, height / 2);
}

function updateCurrentCorner(){
  //mouse if on top left
  if (mouseX < width / 2.0 && mouseY < height / 2.0){
    onLeft = true;
    onTop = true;
    onBottom = false;
    onRight = false;
  }
  //mouse if on bottom left
  else if (mouseX < width && mouseY > height / 2.0){
    onLeft = true;
    onTop = false;
    onBottom = true;
    onRight = false;
  }
  //mouse if on bottom right
  else if (mouseX > width / 2.0 && mouseY > height / 2.0){

    onLeft = false;
    onTop = false;
    onBottom = true;
    onRight = true;
  }
  //mouse if on top right
  else {
    onLeft = false;
    onTop = true;
    onBottom = false;
    onRight = true;
  }

}