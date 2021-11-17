// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(600, 500);
x=100
y=100
outline=55
inline=50
}

function draw() {
  background(173,216,230);
  mountain();
  if ((mouseX > 20) && (mouseX < 150) && (mouseY > 20) && (mouseY < 150)){
    fill(128,128,128);
    nextScene()
    moon(mouseX,mouseY)
    mountain()
  }
  else {
    fill(255,255,0);
  }
  ellipse(mouseX, mouseY, 60, 60);
}

function mountain(){
  fill(40);
  noStroke();
  beginShape();
  vertex(0, height);
  vertex(width * 0.2, height * 0.4);
  vertex(width * 0.35, height * 0.6);
  vertex(width * 0.50, height * 0.2);
  vertex(width * 0.70, height * 0.5);
  vertex(width * 0.85, height * 0.3);
  vertex(width, height);
  endShape();
}
function nextScene(){
  background(0,0,129)
  
}

function moon(){
  fill(255);
  ellipse(x+100,y,inline,inline);
  fill(0,0,129);
  noStroke();
  rect(175,75,outline/2,outline)
  stroke(255);
  fill(0,0,129);
  noStroke();
  ellipse(x+100,y,inline/2,inline);
}