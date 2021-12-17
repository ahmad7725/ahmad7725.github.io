// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let particles = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(220); 
  particles.push(new Particle(width/2, height/2));
  // for(let i = 0; i< particles.length; i++){
  //   particles[i].move();
  //   particles[i].display();
  // }
  for(p of particles){
    p.move();
    p.display();
  }
  
}

class Particle{
  // constructor
  constructor(x,y,s=20){
    this.pos = createVector(x,y);
    this.vel = createCanvas(random(-1,1), random(-1,1));
    this.s = s;

  }
  move(){
    this.pos.add(this.vel);

  }

  display(){
    rect(this.pos.x, this.pos.y, this.s, this.s);
    
  }



}