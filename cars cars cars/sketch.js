// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  strokeWeight(4);
  stroke(255);
  background(0);
  drawRoad();

}

function drawRoad(){
  let x = 0;
  while( x <= width){
    rect(x, height/2, 25, 5);
    x = x + 50;
  }
}