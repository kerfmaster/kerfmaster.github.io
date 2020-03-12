// Diaganal Line Art
const RECT_WIDTH = 10;
const RECT_HEIGHT = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(220);
  randomSeed(0);
  drawRowRGB(height*0.2);
  drawRowHSB(height / 2);
}

function drawRowRGB(yPos) {
  colorMode(RGB, 255);
  for (let x = 0; x < width; x += RECT_WIDTH) {
    fill(random(255), random(255), random(255));
    rect(x, yPos, RECT_WIDTH, RECT_HEIGHT);
  }
}

function drawRowHSB(yPos) {
  colorMode(HSB, 255);
  for (let x = 0; x < width; x += RECT_WIDTH) {
    fill(x / 3 % 360, 300, 300);
    rect(x, yPos, RECT_WIDTH, RECT_HEIGHT);
  }
}

function border() {
  strokeWeight(15);
  rect(width / 2, height / 2, width, height);
  strokeWeight(2);
}