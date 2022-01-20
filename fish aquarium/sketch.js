// fish aquarium 
// ahmad fayed
// jan 19 2022
// create a sea animal to move in an aquarium 

let objects = [];

function setup() {
  createCanvas(800, 500);
  for(let i = 0; i<1; i++){ // push only one fish
    objects.push(new FayedAFish(random(width),random(height)));
    
  }
}

function draw() {
  drawTank();
  for(let o of objects){ // push the fish and its movements
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
function keyPressed(){
  objects[0].pos.x += 5;
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

  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = 1;
    this.pos = createVector(x,y); 
    this.vel = createVector(random(-1,1),random(-1,1)); // velocity
    this.acc = createVector(random(-1,2),random(-1,2)); // acceleration
    this.fishImages = [];
    this.loadCounter = 0;
    this.loadingComplete = false;
    this.fishImage=(loadImage("assets/fayedAfish.png",this.loadedImage()));

  }

  loadedImage(){
    this.loadCounter++;
    if(this.loadCounter===1){ // ask if the image is loaded, if so return true
      this.loadingComplete = true;
    }
  }
  move(){
    print('1');
    // this.pos.x += (random(-1,1),random(-1,1));
    // this.pos.y += (random(-1,1),random(-1,1));
    if(this.pos.x > width){ // if the fish has gone off on the right of the canvas
      this.pos.x = width;
      this.vel = createVector(random(-1,2),random(-1,1));
    }
    if(this.pos.y > height){ // if the fish has gone off on the top of the canvas
      this.pos.y = height;
      this.vel = createVector(random(-1,2),random(-1,1));
    }
    if(this.pos.x < 0){  // if the fish has gone off on the left of the canvas
      this.pos.x = 0;
      this.vel = createVector(random(-1,2),random(-1,1));
    }
    if(this.pos.y < 0){  // if the fish has gone off on the bottom of the canvas
      this.pos.y = 0;
      this.vel = createVector(random(-1,2),random(-1,1));
    }
    this.acc.add(this.acc);
    this.pos.add(this.vel);
    this.vel.limit(5);  //max vel of 5 px/frame
  }

  display(){
    imageMode(CENTER); // makes the images hitmarker at teh center of the image 
    stroke(255);
    strokeWeight(2);
    fill(255,100);
    ellipse(this.pos.x,this.pos.y,32);
    if(this.loadingComplete){ // if this.loadingComplete is true, then push image
      image(this.fishImage,this.pos.x,this.pos.y,this.fishImage.width*0.2,this.fishImage.height*0.2); //
                                                 // image has been pushed with a height and width of 20%
    }
  } 

}