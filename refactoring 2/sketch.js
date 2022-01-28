// refactoring pt 2
// ahmad fayed
// jan 27,2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Black and White Target
let i = 0;
function setup() {
createCanvas(400, 400);
  noFill(); // dont fill the shape
  stroke(0); // shape the outline black
}
function draw() {
  while (i < 10){
    ellipse(width/2,height/2,i*10,i*20); // draw the shape 
    i++;
  }
}


//Chess Board
let rows = 0;
let black = 0;
let white = 255;
function setup() {
  createCanvas(900,500);
  }
  function draw() {
    while(rows < 8 ){ // draws the rows 
      if(rows % 2 ===0){ // check if its even
        black = 255;
        white = 0; 
      }
      else{
        black = 0;
        white = 255;
      }
      let cols = 0;
      while(cols < 8){ // draws the cloumns
        if(cols % 2 === 0){ // check if its even
          fill(black); // fill the rows and columns
        }
        else{
          fill(white);  // fill the rows and columns
        }
        rect( cols *50,rows *50,50,50); // draw the grid 
        cols = cols +1 ;      
        }
      rows = rows + 1;
    }
  
  
  }