// Perlin Noise Project
// David Rempel
// 3/6/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

rectSpacing = 25

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  randtangle();
}

function randtangle(){
  rectMode(CORNERS);
  rect(25, 25, 0, height);
}

rectScreen(){
  for (let x = 0; x < width; x += rectSpacing){
    rect(x, y, random(height, height), gridspacing)
  }
}