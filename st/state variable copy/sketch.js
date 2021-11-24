// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tLeft, tRight,bRight,bLeft;   //Boolean state variables 
let TleftFade = 0;
let TrightFade = 0;
let BleftFade = 0;
let BrightFade = 0;
const FADE_SPEED = 10;
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
  print(" top Left: " + tLeft + "\t top Right: " + tRight + " bottom Left: " + bLeft + "\t bottom Right: " + bRight);
  //renderRectangles();
}


function updateCurrentSide(){
  //update the state variables to represent which side of the canvas
  //the mouse is presently on.
  if(mouseX < height/2 && mouseY < width/2){
    //mouse is on the TOP LEFT

    tLeft = true;
    tRight = false;
    bLeft = false;
    bRight = false;
    rect(0,0,width/2,height/2);
    fill(0);
    topLeftFade();
  }
  else if(mouseX > height/2 && mouseY < width/2){
    // mouse is on the Top RIGHT
    rect(width/2,0,width/2,height/2);
    tLeft = false;
    tRight = true;
    bLeft = false;
    bRight = false;
    fill(0);
  }
  else if ( mouseX < height/2 && mouseY > width/2){ 
    // mouse is on the bottom left
    rect(0,height/2,width/2,height/2);
    bLeft = true;
    bRight = false;
    tLeft = false;
    tRight = false;
    fill(0);
  
  }     

  else{
    //mouse is on the  Bottom RIGHT
    rect(width/2,height/2,width/2,height/2);
    tLeft = false;
    tRight = false;
    bRight = true;
    bLeft = false;
    fill(0);
  }
}

function topLeftFade(){
  if(mouseX < height/2 && mouseY < width/2){   
    fill(0,0,0,TleftFade);
    TleftFade += FADE_SPEED;
  }
  else{
    TleftFade = 0;
  }
  rect(0,0,width/2,height/2);

}

