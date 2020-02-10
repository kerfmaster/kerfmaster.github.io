// Interactive Scene  
// David Rempel
// 2/6/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x , y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth;
}

function draw() {
  background(0, 150, 255);
  hill();
  dinosaur(x);
  sun();
  textSize(32);
  text("David Rempel", 10, windowHeight - 10);
  
}

function hill(){
  
  fill(100 ,200, 0);
  rectMode(CENTER);
  rect(width / 2, height / 1, windowWidth, windowHeight / 1);
  rectMode(CORNER);
  
}

function dinosaur(){
  
  fill(235, 117, 77);
  rect(x / 2, windowHeight / 2.3, 10, 40); // neck
  rect(x / 2.02, windowHeight / 2.1, 7, 25); //leg 1
  rect(x / 1.97, windowHeight / 2.1, 7, 25); //leg 2
  rect(x / 1.92, windowHeight / 2.1, 7, 25); //leg 3
  rect(x / 1.87, windowHeight / 2.1, 7, 25); //leg 4
  ellipse(x / 2.01, windowHeight / 2.3, 30, 25); //head
  ellipse(x / 1.923, windowHeight / 2.09, windowWidth * 0.05  , windowHeight * 0.03); //torso

}






function keyPressed() {
  if (keyCode === LEFT_ARROW){
    x -=25;
  }
  else if (keyCode === RIGHT_ARROW){
    x += 25;
  }
}



function sun(){
  fill(240, 240, 40);
  ellipse(windowWidth / 1.25, windowHeight / 10, 200);
}























