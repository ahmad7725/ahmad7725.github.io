// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  loopOne();

  
}

function loopOne(){
  let spacing = map(mouseX,0,width,10,100);
  for(let x = 0; x < width; x += spacing) {
    let fillValue = map(x,0,width,0,255);
    fill(fillValue);
    circle(x, height/2, spacing);
  
  }

}