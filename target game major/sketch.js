// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let backImage, backImageReport,barrelImage;
let baseImage, cannonballImage,targetImage;
let expolsionImage = [];
let shotsRemainingImages = [];
let targetsHitImages = [];

let currentGame;






function setup() {
  createCanvas(1068,600);
  currentGame = new Game();
}

function draw() {
  currentGame.play();
 
}
 
function quickInout(){
  if(keyIsDown(LEFT_ARROW)){
    currentGame.changeAngle(true);
  }
  else if(keyIsDown(RIGHT_ARROW)){
    currentGame.changeAngle(false);
  }

}