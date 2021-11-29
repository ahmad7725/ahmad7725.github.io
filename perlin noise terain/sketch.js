// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 30; // width of each rectangle slice 

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  regularRandomTerrain();
}

function draw() {
  background(220);

  
}

function regularRandomTerrain(){
// create some random terrain using random()

for(let x = 0; x < width; x+= rectWidth){
  let sectionHeight = random(0,height),
  rect(x,height,x+rectWidth,height - sectionHeight);
  }


}