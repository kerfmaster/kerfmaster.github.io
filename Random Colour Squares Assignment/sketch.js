// Random Colour Grid
// David Rempel
// 2/27/2020
//
// Extra for Experts:
// Perfectly Fit The Squares Within The Window

let gridSpacing = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mouseClicked();
  keyPressed();
}

function mouseClicked() {
  rectGrid();

  if (keyIsDown(SHIFT)) {
    gridSpacing += 1;
  }

  else if (gridSpacing !== 5) {
    gridSpacing -= 1;
  }
}

function keyPressed() {
  rectGrid();
}

function rectGrid() {
  for (let y = 0; y < height; y += gridSpacing) {
    for (let x = 0; x < width; x += gridSpacing) {
      fill(random(1, 255), random(1, 255), random(1, 255));
      rect(x, y, gridSpacing, gridSpacing);
    }
  }
}