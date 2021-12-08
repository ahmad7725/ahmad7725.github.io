// vector demo
// ahmad fayed
// dec 7ht
//
// Extra for Experts:
// -first look at vectors for velocity and acceleration"

let movers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  movers.push(new Mover(mouseX,mouseY));
}

function draw() {
  background(220);
  movers.push(new Mover(mouseX,mouseY));
  // enhanced for loop
  for(let i = 0 ; i < movers.length; i++){
    let m = movers[i];
    m.move();
    m.display();
    // what about removal?
    if(!m.isAlive()){
      movers.splice(i,1);
      i--;
    }



  }
  
}
class Mover{
  constructor(x,y){
    this.size = 20;
    this.position = createVector(x,y);
    this.velocity= createVector(random(-3,3),random(-3,-1));
    this.acceleration = createVector(0,0.02);
    this.c = color(random(200),random(200), random(150));
    this.alive = true;

  }
  move(){
    //update velocity
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.velocity.limit(5); // max vel of 5 px/frame
    if(this.position.y > height){
      this.alive = false;
    }
  }
  display(){
    fill(this.c);
    push();
    translate(this.position.x,this.position.y);
    circle(0,0,this.size); 
    pop();
  }
  isAlive(){
    return this.alive;

  }
}