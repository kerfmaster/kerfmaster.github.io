// Random Colour Grid
// David Rempel
// 2/27/2020
//
// Extra for Experts:
// Perfectly Fit The Squares Within The Window

let gridSpacing = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  rkeyTyped();
  
}

function keyTyped(){
  rectGrid();
}

function rectGrid() {
  for (let x = gridSpacing / 2; x < height; x += gridSpacing) {
    for (let y = gridSpacing / 2; y < width; y += gridSpacing) {
      fill (random(1, 255),random(1, 255),random(1, 255));
      rect(x, y, gridSpacing, gridSpacing);
    }
  }
}

function draw(){
  //background(220);
  //rectGrid();
}

function mouseClicked(){
  gridSpacing -= 1;
}