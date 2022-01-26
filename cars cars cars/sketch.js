// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let westbound = [];
let eastbound = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(60)\
  for(let i = 0; i < 20; i++){
    westbound.push(new Vehicle(random(width),random(height/2.5),0));}
 for(let i = 0; i < 20; i++){
    eastbound.push(new Vehicle(random(width),random(height/2,height),1));}
}

function draw() {
  strokeWeight(4);
  stroke(255);
  background(0);
  drawRoad();
  for(let i = 0; i <westbound.length; i++){
    westbound[i].action();
  }
  for(let i = 0; i <eastbound.length; i++){
    eastbound[i].action();
  }



}

function drawRoad(){
  let x = 0;
  while( x <= width){
    rect(x, height/2, 25, 5);
    x = x + 50;
  }
}

function mouseClicked(){
  if(keyCode === 16){
    eastbound.push(new Vehicle(random(width),random(height/2,height),1));

<<<<<<< HEAD
  }else{
    westbound.push(new Vehicle(random(width),random(height/2.5),0));
  }

=======
  }
  else{
    westbound.push(new Vehicle(random(width),random(height/2.5),0));
  }
>>>>>>> 719247f2876ceb839410340de405bba7bb25572b
}
class Vehicle{s
  constructor(x,y,dir){
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.c = color(random(255),random(255),random(255));
    this.type = int(random(2));
    this.pos = createVector(x,y);
    this.vel = createVector(-1,1);
    this.acc = createVector(random(-1,1),random(-1,1));
  }
  action(){
    this.display();
    this.move();
    this.speedUp();
    this.speedDown();
  }
  speedUp(){
    if(this.dir === 0){// moves west bound 
      this.pos.x += (random(-15,0),random(-15,0));
      this.acc.add(this.acc);
    }
    if(this.dir === 1){// moves eastbound 
      this.pos.x -= (random(-15,0),random(-15,0));
        
      this.acc.add(this.acc);
    }
  }
  speedDown(){
    if(this.dir === 0){// moves west bound 
      //this.pos.x -= (random(-15,0),random(-15,0));
      this.acc.add(this.acc);
    }
    if(this.dir === 1){// moves east bound 
      //this.pos.x += (random(-15,0),random(-15,0));
      this.acc.add(this.acc);
    }
  }
  move(){
    //this.pos.x += (random(-1,1),random(-1,1));
    this.acc.add(this.acc);
  }
  display(){
    if(this.dir === 0){// moves west bound 
      //this.pos.x += (random(-15,1),random(-15,1));
      this.acc.add(this.acc);
    }
    if(this.dir === 1){// moves eastbound
      //this.pos.x -= (random(-15,1),random(-15,1));
      //this.pos.y = height/2;
      this.acc.add(this.acc);
    }
    if(this.type ===0){
      this.drawCar();

    }
    else if (this.type === 1){
      this.drawTruck();

    }
  }
  drawCar(dir){
    fill(this.c);
    rect(this.pos.x,this.pos.y,100,40);
  }
  drawTruck(dir){
    fill(this.c);
    ellipse(this.pos.x,this.pos.y,100,40);
  }

}