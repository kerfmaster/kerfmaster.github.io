// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let a,b,c,d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  a=200;
  b=300;
  c=random(3,8);
  d=random(3,8);
}
function draw() {
  m();
  background(80,80,80);
  rect(a,b,250,75);
}
function m(){
  a+=c; b+=d;
  if (b>=height-75||b<=0){
    d=d*-1;
  }
  if (a>=width-250||a<=0){
    c=c*-1;
  }
}

// function setup() {
//   createCanvas(480, 270);
// }
// function draw() {
//   background(255);
//   stroke(0);
//   line(240, 0, 240, 270);
//   line(0, 135, 480, 135);
//   noStroke();
//   fill(0);
//   if (mouseX<240&&mouseY<135){
//     rect(0,0,240,135);
//   }
//   else if (mouseX>240&&mouseY<135){
//     rect(240,0,240,135);
//   }
//   else if (mouseX<240&&mouseY>135){
//     rect(0,135,240,135);
//   }
//   else if (mouseX>240&&mouseY>135){
//     rect(240,135,240,135);
//   }
// }

