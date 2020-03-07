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
  //randtangle();
  randtangleTwo();
  rectScreen();
}

// function randtangle() {
//   rectMode(CORNERS);
//   rect(0, height, rectSpacing, random([height], [0]));
// }

function randtangleTwo() {
  rectMode(CORNERS);
  rect(rectSpacing, height, rectSpacing + rectSpacing, random([height], [0]));
}


function rectScreen() {
  for (let x = 0; x < width; x += rectSpacing) {
    randtangle(randtangle, height, rectSpacing += rectSpacing, random(height, [0]));
  }
}
