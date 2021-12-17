// particles and wind forces 
// ahmad fayed
// dec 15 2021
//
// Extra for Experts:
// - more practice for objects, vectors, etc...."

let myWind;
let particles = [];
let grav;
function setup() {
  createCanvas(windowWidth, windowHeight);
  let windForce = createVector(0,-0.1);
  myWind = new WindZone(width * 0.3, width * 0.5, windForce);
  grav = createVector(0,0.06);
}

function draw() {
  background(220);
  myWind.runWind();
  for (let p of particles){
    p.applyForces(grav);
    if(p.isInsideWind(myWind)){
      p.applyForces(myWind.force);
    }

    p.move();
    p.display();
  }
}

function mousePressed(){
  particles.push(new Partricle(mouseX, mouseY));
}
class WindZone{
  
  
  //constructor
  constructor(startX, endX, f){ //f -> force vector (wind str)
    this.startX = startX;
    this.endX = endX;
    this.force = f; 
    this.windLines = [];
    this.NUM_LINES = 100;
    this.initWind();
  }


  //class methods
  initWind(){  //create a bunch of windline Objects
    for(let i = 0; i < this.NUM_LINES; i++){
      this.windLines.push(new WindLine(random(this.startX,this.endX)));  
    }
  }

  runWind(){
    for(let w of this.windLines){
      w.move();
      w.display();
    }
  }

}

class WindLine{
  //the lines used to illustrate areas where a find force is
  constructor(x){
    this.pos = createVector(x, random(height));
    this.vel = createVector(0, random(-2, -0.5));
    this.len = random(4,15);
  }

  //class methods
  move(){
    this.pos.add(this.vel);
    if((this.pos.y) < 0){
      //gone off top of screen, time to wrap around
      this.pos.y = height;
    }
  }

  display(){
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y - this.len);
  }


}

class Partricle{
  // constructor 
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(random(3,5),0);
    this.accel = createVector(0,0);

  }



  // class methods
  applyForces(f){
    // f -> vector of a force to be applied on the current frame 
    this.accel.add(f);
  }
  move(){
    this.vel.add(this.accel);
    this.pos.add(this.vel);
    this.accel.mult(0);
    
  }
  display(){
    circle(this.pos.x, this.pos.y, 30);
  }
  isInsideWind(w){
    // w-> windzone object
    if(this.pos.x > w.startX && this.pos.x < w.endX){
      return true;
    }
    else {
      return false;
    }
  }
}