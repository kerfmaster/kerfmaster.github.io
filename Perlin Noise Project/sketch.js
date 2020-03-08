// Perlin Noise Project
// David Rempel
// 3/6/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
  keyPressed();
  
}

function generateTerrain() {
  for (let x = 0; x < width; x += 1) {
    rectMode(CORNERS);
    rect(x, height, x += 2, random(0, height));
  }
}

function keyPressed() {
  background(220);
  generateTerrain();
}