// primitive paint
// ahmad fayed
// jan 2, 2022
//
// Extra for Experts:
// - using keypressed function to draw shapes and create an animation

let s = 'Ahmad Fayed';
let angle = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //background(220);
  animation()
  textFont('Helvetica');
  textFont(BOLD);
  textStyle(ITALIC);
  fill(50);
  text(s,580, 500);
}


function keyPressed(){
  if(keyCode === 65){
    rect(mouseX,mouseY,width/6, height/6); // draws a square
    fill(random(255),random(255),random(255));
  }
  if(keyCode === 83){
    ellipse(mouseX,mouseY,width/6, height/6); // darws an ellipse
    fill(random(255),random(255),random(255));
  }
  if(keyCode === 68){
    diamond(mouseX,mouseY,width/6, height/6); // draws a daimond
    fill(random(255),random(255),random(255));
  }
  if(keyCode === 32){ // erases the screen 
      background(255);
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

function animation(){
  push();
  translate(width/2,height/2);// places square in the center 
  rotate(angle); //rotates the square 
  fill(random(255),random(255),random(255));
  noStroke();
  rectMode(CENTER);// draws square from the center rather than the edges 
  square(0,0,150); 
  pop();
  angle+= radians(1);
    
}
