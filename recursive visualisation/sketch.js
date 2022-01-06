// recursive visulaization
// ahmad fayed
// jan 7th 2022
//
// Extra for Experts:
// - "some simple recursive visualizations"

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220); 
  // drawCircle(width/2,height/2,width);
  //strokeWeight(3);
  darwCantor(width *0.05,height/2,width*0.9);
}

function darwCantor(x,y,len){
  line(x,y,x+len,y);
  if(len>3){
    darwCantor(x, y+20, len/3);
    darwCantor(x+2*len/3, y+20,len/3);
  }
}





// function drawCircle(x,y,s){
//   // draw a circle recursively
//   //(x,y) position
//   // s diameter


//   // base case 
//   if(s > 2 ){
//     circle(x,y,x);
//     drawCircle(x,y,s-10);
//   }
//}