// basics of objects oriented programing
// ahmad fayed
// December 2
//
// Extra for Experts:
// - some random walkers defined as objects 

let walkers=[];
const NUM_WALKERS = 4000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(0);
  for (let i = 0; i < NUM_WALKERS ; i++){
    let tempColor = color(random(255),random(255),random(255));
    walkers.push(new Walker(random(width), random(height), tempColor));
  }


}

function draw() {
  background(0);
  for(let i = 0; i < walkers.length; i++){
    walkers[i].move();
    walkers[i].display();

  }

}

class Walker{

  // class constructor and properties 

  constructor(x,y,c){
    this.x = x;
    this.y = y;
    this.c = c;
    this.speed = 10;
    this.size = 5;
  }

  move(){
    let myChoice = Math.floor(random(4));
    if(myChoice === 0) this.x -= this.speed;
    else if (myChoice === 1) this.x += this.speed
    else if (myChoice === 2) this.y -= this.speed
    else this.y += this.speed;


  }

  display(){
    rectMode(CENTER);
    fill(this.c);
    rect(this.x,this.y,this.size,this.size);
  }



}


