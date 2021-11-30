// iimage demo static and animated
// ahmad fayed
// nov 26 2021
//
// Extra for Experts:
// - loading and diisplaying images

let lionL, lionR;
let lionDirection = 0;
let pinImages = [];
let currentFrame = 0;
function preload(){
// ensure our images are loaded before  running 
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
  for(let i = 0; i < 9; i++){
    pinImages.push(loadImage("assets/pin-0"+ i +".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  print("Size: " +lionL.width + ", " + lionL.height);
  imageMode(CENTER);
}

function draw() {
  background(255);
  //stepOne();
  
  image(pinImages[currentFrame],width/2,height/2);
  if (frameCount % 7 === 0){
    currentFrame ++;
    if(currentFrame >= pinImages.length){
      currentFrame = 0;
    } 
  }
}


// how big was it originally ???
//image(lionL, mouseX,mouseY, 100, 100); 


function stepOne(){
// lion display. first, determine direction of mouse:
  if(pmouseX> mouseX) lionDirection = 0;
  else if ( pmouseX < mouseX) lionDirection = 1;

  if(lionDirection === 0){
    image(lionL, mouseX,mouseY, lionL.width * 0.5,lionL.height * 0.5);
  }
  else{
    image(lionR, mouseX,mouseY,lionR.width * 0.5, lionR.height*0.5);
  }


}