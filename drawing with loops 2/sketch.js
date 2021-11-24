// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let spacing = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //noLoop();
}

function draw() {
  background(255);
  nestedLoops();

  
}

function nestedLoops(){
  for (let x = 0; x < width; x += spacing){
    for( let y = 0; y < height; y+= spacing){
      print(x + ", " + y);
      circle(x,y,2);
      let r = map(mouseX,0, width, 0 ,255);
      let g = map(mouseY, 0, height, 255,0 );
      let b = map(mouseX, 0,  width, 255, 0 );
      stroke(r,g,b);
      line(x,y,mouseX, mouseY);
    }


  }



}