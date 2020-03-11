// Perlin Noise Project
// David Rempel
// 3/6/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y;
//terrain
let rectWidth = 1;
let yTime = 10;
// flag
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
  fill(random(1,255),random(1,255),random(1,255))
  for (let x = 0; x < width; x) {
    //terrain
    rectMode(CORNERS);
    let y = map(noise(yTime), 0, 1, 50, height);     
    rect(x, y, x += rectWidth, height);
    //flag
    if (y < tallY){
      tallY = y;
      tallX = x;
    }
    yTime += 0.0099;
      
  } 
  drawFlag(tallX,tallY);
}

function drawFlag(x,y){
  strokeWeight(2);
  triangle(x,y -20,x,y - 37.75, x + 12.5 ,y - 29);
  strokeWeight(2);
  line(x, y, x, y - 37.75);
}