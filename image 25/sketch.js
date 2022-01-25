// images review
// ahmad fayed
// jan 25
//
// Extra for Experts:
// - some practice wiht images 

let gorillaIdle = [];
let gorillaSwipe = [];
let spriralImages = [];
let gorillaX, gorillaY;
let gorillaIndex =0;
let swipeInex = 0;
let spiralInex = 0;
let spirals = [];
let particles = [];

function preload(){
  // load some images 
  for(let i = 1; i < 7;i++){
    gorillaIdle.push(loadImage("assets/Gorilla/idle"+i+".png"));
    gorillaSwipe.push(loadImage("assets/Gorilla/swipe"+i+".png"));
  }
  // load circle images 
  for(let i = 0; i< 16; i++){
    if(i < 10){
      spriralImages.push(loadImage("assets/Circle/Circle Animation0"+i+".png"));
    }
    else{ // 2 digit i value 
      spriralImages.push(loadImage("assets/Circle/Circle Animation"+i+".png"));

    }
  }

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  gorillaX = width/2;
  gorillaY = height/2;
}

function mousePressed(){
  // to simulate a target being hit 
  spirals.push(new Spiral(mouseX,mouseY));
  for (let i = 0; i < 100; i++){
    particles.push(new Particles(mouseX,mouseY));
  }
  for(let i = 0; i < spirals.length; i++){
    let s = spirals[i];
    s.display();
    if(s.active === false){
      spirals.splice(i,1);
    }
  }

}

function draw() {
  background(0);

  // draw gorilla 
  if (keyIsPressed && key ===" "){
    // swipe
    image(gorillaSwipe[swipeInex],gorillaX,gorillaY);
    if(frameCount % 12 === 0){
      swipeInex++;
      if(swipeInex > 5) swipeInex = 0;
    }
    gorillaIndex = 0;
  }
  else{
    //idle
    image(gorillaIdle[gorillaIndex],gorillaX,gorillaY);
    if(frameCount % 12 ===0){
      gorillaIndex++;
      if(gorillaIndex > 5) gorillaIndex = 0;

    }

  }

}

// particles
  particles.push(new Particles());
  for(let p of particles){
    p.move();
    p.display();
  }

class Spiral{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.currentFrame = 0; // 0 - 15
    this.active = true; // to help us know when to delete 

  }
  display(){
    if(this.currentFrame > 15){
      this.active = false; 
    }
    else{
      image(spriralImages[this.currentFrame],this.pos.x,this.pos.y);
      if (frameCount % 4 === 0 ){
        this.currentFrame++;
      }
      
    }
  }

}


class Particles{
  constructor(){
    this.pos = createVector(100,height);
    this.vel = createVector(random(-3,3),random(-10,-6)); //upwards
    this.grav = createVector(0,0.15);
  }
  display(){
    fill(255);
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y,10,10);
  }
  move(){
    this.pos.add(this.vel);
    this.vel.add(this.grav);
  }
}