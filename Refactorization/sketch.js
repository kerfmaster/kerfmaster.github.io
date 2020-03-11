// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let a,b,c,d;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   a=200;
//   b=300;
//   c=random(3,8);
//   d=random(3,8);
// }
// function draw() {
//   m();
//   background(80,80,80);
//   rect(a,b,250,75);
// }
// function m(){
//   a+=c; b+=d;
//   if (b>=height-75||b<=0){
//     d=d*-1;
//   }
//   if (a>=width-250||a<=0){
//     c=c*-1;
//   }
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(255);
  stroke(0);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  noStroke();
  fill(0);
  if (mouseX<width / 2 &&mouseY<height / 2){
    rect(0,0,windowWidth / 2, windowHeight / 2);
  }
  else if (mouseX> width / 2 &&mouseY<height / 2){
    rect(width / 2,0,width / 2,height / 2);
  }
  else if (mouseX< width / 2 &&mouseY> height / 2){
    rect(0,height / 2 ,width / 2, height / 2);
  }
  else if (mouseX>240&&mouseY>135){
    rect(width / 2, height / 2, width / 2, height / 2);
  }
}

// let targetSize;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(240);
//   target();
  
// }

// function target(){
//   targetSize = 400;
//   for (let i = 0; i < 10; i++){
//     ellipse (width / 2, height / 2, targetSize, targetSize);
//     targetSize -= 40;
//   }
// }

// const SQUARE_SIZE = 75;

// function setup() {
//   createCanvas(600, 600);
//   board();
// }

// function board(){
//   for (let x = 0; x < 600; x += SQUARE_SIZE){
//     for (let y = 0; y < 600; y += SQUARE_SIZE){
//       rect(x, y, SQUARE_SIZE, SQUARE_SIZE);
//       if (x < 600)
//     }
//   }
// }

// function draw() {
  // 
// }