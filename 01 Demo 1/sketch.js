// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x,y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = width/2;
}

function draw() {
  background(150);
  charactor(x, y);
}


function keyPressed(){
  if (keyCode === LEFT_ARROW){
    x -= 10;
  }
  else if (keyCode === RIGHT_ARROW){
    x += 10;
  }
}






function charactor( x ,y ) {
  fill(100);
  strokeWeight(1);
  ellipse(x,y,50,50); //head
  fill(0,200,0);
  ellipse( x - 10,y - 10, 10, 10); // left eye
  ellipse(x + 10,y - 10, 10, 10); // right eye
  if (mouseIsPressed){
    fill(0)
    ellipse(x, y-10, 10, 10)
}
  strokeWeight(1);
  line(x - 15, y + 10, x + 15, y + 10); // mouth
}