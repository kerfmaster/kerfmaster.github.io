// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x = 0;
let y = 0;
let state = [""];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(220);
  rect(x,y,40,40);
  if ( x < width - 40){
    x += 10;
  }
  
  else if (y < height - 40){
    y += 10;
  }

  else if (x === width - 40){
    x -= 10;
  }

 
  
}
