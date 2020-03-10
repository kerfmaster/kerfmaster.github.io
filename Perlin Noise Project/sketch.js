// Perlin Noise Project
// David Rempel
// 3/6/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x, y;
let rectWidth = 1;
let yTime = 10;

let tallX;
let tallY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  strokeWeight(0);
  background(220);
  generateTerrain();
}

function generateTerrain() {
  yTime = 10;
  tallX = 0;
  tallY = height;
  for (let x = 0; x < width; x) {
    //terrain
    rectMode(CORNERS);
    fill(0);
    let y = map(noise(yTime), 0, 1, 50, height);     
    rect(x, y, x += rectWidth, height);
    //flag
    if (y < tallY){
      tallY = y;
      tallX = x;
    }
    yTime += 0.0099;  
  } 
  drawFlag(tallY,tallX);
}

function drawFlag(){
  line(x, y, x, y -30);
}