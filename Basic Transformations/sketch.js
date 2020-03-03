// Basic Transformations Sandbox


let originalSpacing = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  //drawBasicGrid(220);
  push();
  translate(width / 2, height / 2);
  strokeWeight(5);
  ellipseMode(CENTER);
  ellipse(0, 0, width * 0.4, width * 0.4);
  for (i = 0; i < 60; i++) {
    if (i % 5 === 0) {
      strokeWeight(4);
      line(width * 0.15, 0, width * 0.19, 0);
    }
    else {
      strokeWeight(2);
      line(width * 0.16, 0a, width * 0.19, 0);
    }
    rotate(radians(6));
  }

  push();
  rotate(radians(second()*6));
  stroke(255, 0, 0);
  strokeWeight(2);
  line(0, 0, width * 0.19, 0);
  pop();

  push();
  rotate(radians(minute()*6 +second() / 10));
  stroke(255, 150, 0);
  strokeWeight(5);
  line(0, 0, width * 0.12, 0);
  pop();

  push();
  rotate(radians(hour()*12));
  stroke(150, 150, 0);
  strokeWeight(5);
  line(0, 0, width * 0.1, 0);
  pop();
  
  

  
  pop();



  //transformation one: TRANSLATION

  //push();
  //translate(200, 0);
  //scale(1);
  //drawBasicGrid(150);
  //face(100, 40);
  //pop();

  //push(); 
  //translate(0, 200);
  //translate(40,240);
  //rectMode(CENTER);
  //drawBasicGrid(150);
  //rotate(radians(-frameCount));
  //rectangleBlue(0, 0);
  //pop();

  //add push()  pop()




  //transformation two: SCALE




  //transformation three: ROTATION
  //reminder: rotations are measured in radians, not degrees! Functions can help with the conversion...



  //Combinations of Transformations



}


function face(x, y) {
  //draw a face at x,y
  push();
  translate(x, y);
  ellipseMode(CENTER);
  fill(200, 200, 0);
  stroke(0);
  ellipse(0, 0, 80, 80);
  fill(90, 140, 30, 220);
  triangle(-20, 20, 20, 20, 0, 30);
  fill(0);
  ellipse(-25, 0, 10, 10);
  ellipse(25, 0, 10, 10);
  strokeWeight(5);
  line(-30, -10, 30, -10);
  strokeWeight(1);
  pop();

}

function rectangleRed(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(255, 0, 0, 150);
  rect(x, y, 50, 50);

}

function rectangleBlue(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(0, 0, 255, 150);
  rect(x, y, 50, 50);

}

function drawBasicGrid(shade) {
  //draw the normal cartesian Coordinate Grid, in a light color. Spaced at 20 px by default
  stroke(shade);
  for (let x = 0; x < width; x += originalSpacing) {
    line(x, 0, x, height);
  }
  for (let y = 0; y < height; y += originalSpacing) {
    line(0, y, width, y);
  }

  //Draw "X" at the origin
  strokeWeight(3);
  stroke(0);
  line(-5, 0, 5, 0);
  line(0, 5, 0, -5);
  strokeWeight(1);
}