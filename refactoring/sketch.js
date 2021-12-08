// refactoring factor 
// ahmad fayed
// dec 2 
//
// Extra for Experts:
// - refactoring code

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


// part two 

// This example is adapted from Learning Processing Example 5-3 by Daniel Shiffman
// http://www.learningprocessing.com
// Refactor the following code. Be sure the refactored version:
//  - is readable
//  - is able to work easily with any canvas size

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(255);
  line(width/2, 0, width/2,height); // verticle line
  line(0,height/2,width,height/2); // horzontal line 
  rectangle();
}

function rectangle (){
  if (mouseY < height/2 && mouseX < width/2){ // IF THE MOUSE IS ONN  THE TOP LEFT
    fill(0);
    rect(0,0,width/2,height/2);
  }
  else if (mouseY < height/2 && mouseX > width/2){  // IF THE MOUSE IS ON THE TOP RIGHT
    fill(0);
    rect(width/2,0,width/2,height/2);
  }
  else if (mouseY > height/2 && mouseX < width/2){ // IF THE MOUSE IS ON THE BOTTTOM RIGHT
    fill(0);
    rect(0,height/2,width/2,height/2);
  }

  else {
    fill(0);
    rect(width/2,height/2,width/2,height/2); // IF THE MOUSE IS ON THE BOTTOOM LEFT
  } 
}
