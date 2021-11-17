// state variable demo      
// ahmad
// nov 16
//
// Extra for Experts:
// - looking at state variable and fading effect





let onLeft,onRight;
let leftFade = 0;
let rightFade = 0; 
const FADE_SPEED = 10;


function setup() {
  createCanvas(windowWidth, windowHeight);
  onLeft = true;
  onRight = false;
}

function draw() {
  background(220);
  line(width/2,0, width/2,height);
  updateCurrentSide();
  print("Left: "+ onLeft +"\tRight: "+ onRight);
  renderRectangle();
}

function renderRectangle(){
  // draw two rectangles of varying fill values on the screen
  // Left rectangle 
  if (onLeft){
    fill(200,47,49,leftFade);
    leftFade += FADE_SPEED;
}
else{
  fill(255);
  leftFade = 0;
}
// rigth rectangle
if(onRight){
  fill(0,255,166);
}
else{
  fill(255);
}
rect(width/2,0,width/2,height);






function updateCurrentSide(){
  // mouse is on the left
  if(mouseX < width/2){
    onLeft = true;
    onRight = false;
  }
  else{
    // mouse is on the right

    onLeft= false;
    onRight = true;
  }
}