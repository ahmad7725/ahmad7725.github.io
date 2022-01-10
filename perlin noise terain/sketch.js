// Pperlin terain
// ahmad fayed
// dec 31 2021
//
// Extra for Experts:
// - using perlin noise function to generate terains

let rectWidth=1;   //width of each rectangle slice
let xOff = 0;
let move = 0.005;
let start = 0;
let tallest = 0;
let place = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);

}

function draw() {
  background(220);
  regularRandomTerrain();
  drawFlag();
  
}

function regularRandomTerrain(){
  //create some random terrain using random()
  fill(0);
  noStroke();
  xOff = start;
  tallest = 0;
  place = 0;
  for(let x = 0; x < width; x += rectWidth){
    let sectionHeight = map(noise(xOff),0,1,0,height);
    xOff += move;
    if(tallest < sectionHeight){
      tallest = sectionHeight;
      place = x;
    }
    
    rect(x,height, x+rectWidth, height - sectionHeight); // generating the terrain
  }
  start +=move+0.01; // screen panning 
  drawFlag(place,height - tallest*1.09);
}

function drawFlag(x,y){
  print(x,y);
  noStroke();
  fill( 255,0,0);
  beginShape();
  vertex(x+0,y+15);
  vertex(x+35,y+0);
  vertex(x+0, y-15);
  vertex(x+1,y+50);
  endShape();


}