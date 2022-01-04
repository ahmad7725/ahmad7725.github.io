// Fish Aquarium Project
// -- complete rest of comment header! --
// --                                  --
// --                                  --

let objects = [];

function setup() {
  createCanvas(800, 500);
  for(let i = 0; i<1; i++){
    objects.push(new FayedAFish(random(width),random(height)));
  }
}

function draw() {
  drawTank();
  for(let o of objects){
    o.move();
    o.display();
  }
}

//Function to render the background of the tank
function drawTank() {
  background(100, 154, 245);  //solid background color
  noStroke();
  fill(220, 195, 100);
  rect(0, height * 0.8, width, height);  //sand bottom
}


/** A super class for animated objects 
    Make sure to implement your class AFTER this one */
class AnimatedObject {

  /** Location fields inherited by all subclass */
  constructor() {
    /* Constructor
     *  Note that your constructor should accept a single float specifying the size,
     *  which will overwrite the inherited default value 50. In addition, your 
     * constructor should initialize x and y to a starting location where your creature 
     * will appear (either a random location or a predetermined fixed location)
     */

    //you can either use this.x and this.y   or  a vector(pos) to manage location
    this.x = random(width * 0.15, width * 0.85);
    this.y = random(height * 0.35, height * 0.75);
    this.pos = createVector(this.x, this.y);

    //As well, you can either use an xSpeed and ySpeed variable or a vel vector
    //to track movement velocity.
    this.xSpeed;
    this.ySpeed;
    this.vel;

    /** Size parameter inherited by subclass */
    this.size = 50;
  }

  /** Displays the object  */
  display() { }

  /** Advances the object's animation by one frame  */
  move() { }

  /** Optional Function:
   *  Parameter will store the array of all fish objects, which can be used
   *  for comparison if your fish's behavior should depend on proximity to
   *  other fish.
    */
  compare(objArr) { }

  /* Methods that provide access to class data fields 
     If you choose to use vectors, be sure to override
     the position and velocity functions to return this.pos.x and similar.
  */
  getX() { return this.x; }
  getY() { return this.y; }
  getSize() { return this.size; }
  getxSpeed() { return this.xSpeed; }
  getySpeed() { return this.ySpeed; }
}




/*****************************************
Define your Fish class below
please name according to this convention:
Lastname Firstinitial Fish
i.e  for Sebastion Tate:  class TateSFish
******************************************/
class FayedAFish {
  objects = [];

  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = 1;


  }
  move(){
    this.x += (random(-2,5),random(-2,5));
    this.y += (random(-2,5),random(-2,5));
    if(this.x > width){
      this.x = 0;
    }
    if(this.y > height){
      this.y = 0;
    }
  }
  display(){
    strokeWeight(4);
    rect(this.x,this.y,100);
  }
  
}