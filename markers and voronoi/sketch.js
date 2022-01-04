// ,ovable markers and voronoi
//ahmad fayed 
// dec 17, 2021
//
// Extra for Experts:
// - business location ????

let markers = [];
let currentlyDragging = false; // global variable flag 


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for(let m of markers){
    m.move();
    m.display();
  }
  
}

function keyPressed(){
  if(key===" "){
    markers.push(new MovableMarker(mouseX,mouseY));
  }
}

class MovableMarker{
  //something like a pin that can be placed/ moved on a map
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.offX = 0;
    this.offY = 0;
    this.baseColor = color(0,255,0);
    this.hoverColor = color(0,200,0);
    this.beingDragged = false;
    this.radius = 15;
    this.diameter = this.radius *2;

  }

  // class methods 
  move(){
    if(this.mouseIsOver() && currentlyDragging === false){
      if(mouseIsPressed && mouseButton === LEFT){
        this.beingDragged = true;
        currentlyDragging = true;
        this.offX = mouseX - this.x;
        this.offY = mouseY - this.y;
    }
    if (!mouseIsPressed){
      this.beingDragged = false;
      currentlyDragging = false;

    }
    if(this.beingDragged){
      this.x = mouseX - this.offX;
      this.y = mouseY - this.offY;
    }

  }

  display(){
    if(this.mouseIsOver()){
      fill(this.hoverColor);
    }

    }
    else{ // no hover
      fill(this.baseColor);
    }
    circle(this.x,this.y,this.diameter);



  }

  mouseIsOver(){

    // retunr true if the mouse is hovering over this shape
    let d = dist(mouseX,mouseY,this.x,this.y);
    if(d <= this.radius){
      return true;
    }
    else{
      return false;
    }

  }
}