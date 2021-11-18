// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tLeft, tRight,bRight,bLeft;   //Boolean state variables 

function setup() {
  createCanvas(windowWidth, windowHeight);
  tLeft = true;
  tRight = false;
}

function draw() {
  background(255);
  line(width/2, 0, width/2,height);
  line(0,height/2,width,height/2);
  updateCurrentSide();
  print("Left: " + tLeft + "\tRight: " + tRight + "Left: " + bLeft + "\tRight: " + bRight);
  //renderRectangles();
}


function updateCurrentSide(){
  //update the state variables to represent which side of the canvas
  //the mouse is presently on.
  if(mouseX < height/2){
    //mouse is on the LEFT
    tLeft = true;
    tRight = false;
  }
  else{
    //mouse is on the RIGHT
    tLeft = false;
    tRight = true;
  }
}


