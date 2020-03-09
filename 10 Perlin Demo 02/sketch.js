// Perlin Noise Demo Two
// David Rempel
// 3/9/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x, y;
let redTime = 10;
let redSpeed = 0.01;
let offsetAmount = 0.02;

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawCircles();
}


function drawCircles(){
  for (let x = 0; x < width; x += 25){
    for (y = 0; y < height; y += 25){
      let r = map(noise(redTime), 0, 1, 0, 255);
      fill(r, 0, 0);
      ellipse(x, y, 25, 25);
      redTime += redSpeed;
    }
  }
}

function draw() {
  redTime = 10 + offsetAmount;
  background(220);
  drawCircles(); 
  offsetAmount += 0.02;
}