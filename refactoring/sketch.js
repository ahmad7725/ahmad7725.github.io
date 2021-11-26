// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let a,b,c,d;
function setup() {
  createCanvas(windowWidth, windowHeight);
  a=200; 
  b=300; 
  c=random(3,8); 
  d=random(3,8);
}
function draw() {
  movement();
  background(80,80,80);
  rect(a,b,250,75);
}
function movement(){
  a+=c; b+=d;// random movement of the rectangle 
  if (b>=height-75||b<=0){ // verticle movement of the rectangle 
    d=d*-1;
  }
  if (a>=width-250||a<=0){ // horizontal movemnet of the rectangle 
    c=c*-1;
  }
}