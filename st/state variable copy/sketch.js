// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

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
  bRight = false;
  bLeft = false;
}

function draw() {
  background(255);
  line(width/2, 0, width/2,height);
  line(0,height/2,width,height/2);
  updateCurrentSide();
  print(" top Left: " + tLeft + "\t top Right: " + tRight + " bottom Left: " + bLeft + "\t bottom Right: " + bRight);
  Fade();
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
  }
  else if(mouseX > height/2 && mouseY < width/2){
    // mouse is on the Top RIGHT
    tLeft = false;
    tRight = true;
    bLeft = false;
    bRight = false;
  }
  else if ( mouseX < height/2 && mouseY > width/2){ 
    // mouse is on the bottom left
    bLeft = true;
    bRight = false;
    tLeft = false;
    tRight = false;
  
  }     

  else{
    //mouse is on the  Bottom RIGHT
    tLeft = false;
    tRight = false;
    bRight = true;
    bLeft = false;
  }
}

function Fade(){
  if(tLeft){   // the rectangle on top left fades in 
    TleftFade = 255;
    
  }
  else{
    TleftFade -= FADE_SPEED;
  }
  fill(0,0,0,TleftFade);
  rect(0,0,width/2,height/2);

  if(bLeft){   
    BleftFade = 255; // rectangle on bottom left fades in
    
  }
  else{
    BleftFade -= FADE_SPEED;
  }
  fill(0,0,0,BleftFade);
  rect(0,height/2,width/2,height/2);

  if(bRight){ 
    BrightFade = 255; // rectangle on botton right fades in
  }
  else{
    BrightFade -= FADE_SPEED;
  }
  fill(0,0,0,BrightFade);
  rect(width/2,height/2,width/2,height/2);
  
  if(tRight){   
    TrightFade = 255; // rectangle on top right fades in
    
  }
  else{
    TrightFade -= FADE_SPEED;
  }
  fill(0,0,0,TrightFade);
  rect(width/2,0,width/2,height/2);
}
