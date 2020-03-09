// Perlin Noise Project
// David Rempel
// 3/6/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x, y;

let rectWidth = 1;

let yTime = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  strokeWeight(0);
  keyPressed();
}

function generateTerrain() {
  yTime = 10;
  for (let x = 0; x < width; x) {
    fill(0); 
    y = map(noise(yTime), 100, 1, 34, height - 100);
    rect(x, height, x += 1, random(0,height));
   
  }
}

function keyPressed() {
  background(220);
  generateTerrain();
}

