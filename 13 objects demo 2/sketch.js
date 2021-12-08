// objects demo Two
// ahmad fayed 
// dec 6th, 2021
//
// Extra for Experts:
// -objects and loops working together. maybe some gravity"

let dotCollection = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  initDots(); 

  for(let i = 0; i < dotCollection.length; i ++){
    dotCollection[i].process(); 
  }

}


// function mousePressed(){
//   dotCollection.push(new Dot(mouseX,mouseY,10));
// }

function initDots(){
  let spacing = 25;
  let currentX = spacing /2;
  let currentY = spacing /2;
  while(currentX < width){
    while(currentY< height){
      dotCollection.push(new Dot(currentX, currentY,20));
      currentY += spacing;
    }
    currentX += spacing;
    currentY = spacing/2;
  }


}

class Dot{

  // class constructor 

  constructor(x,y, diameter){
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.c = color(255,255,255);
  }
  
  /// class methods
  display(){
    fill(this.c);
    circle(this.x, this.y, this.diameter);
  
  }
  setColor(){
    // change color based on the proximity of the mose cursor 
    // mouse cursor hovering over object?
    this.currentDistance = dist(this.x,this.y,mouseX,mouseY);
    if(this.currentDistance < this.diameter/2){
      this.c = color(0,0,255); 
    }
    else if (this.currentDistance < this.diameter *2){
      this.c = color(0,0,255,100);

    }
    else if (this.currentDistance < this.diameter * 4){
      this.c = color(0,0,255,30);
    }
    else{
      this.c = color(255,255,255);
    }

  }

  process(){
    this.setColor();
    this.display();

  }




}