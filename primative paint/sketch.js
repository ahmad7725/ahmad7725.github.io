// primitive paint
// ahmad fayed
// dec 1
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //background(220); 
}


function keyPressed(){
  if(keyCode === 65){
    rect(mouseX,mouseY,width/6, height/6);
    fill(random(255),random(255),random(255));
  }
  if(keyCode === 83){
    ellipse(mouseX,mouseY,width/6, height/6);
    fill(random(255),random(255),random(255));
  }
  if(keyCode === 68){
    diamond(mouseX,mouseY,width/6, height/6);
    fill(random(255),random(255),random(255));
  }
  
}
function diamond(){
  noStroke();
  beginShape();
  vertex(mouseX+0, mouseY +35);
  vertex(mouseX+35, mouseY +0);
  vertex(mouseX+0, mouseY -35);
  vertex(mouseX-35, mouseY +0);
  endShape();
}
