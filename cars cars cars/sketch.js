// CARS CARS CARS
// AHMAD FAYED
// JAN 26 
//
// Extra for Experts:
// - SIMULATE VEHICLE MOVING ON TNE ROAD

let westbound = [];
let eastbound = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(60)\
  for(let i = 0; i < 20; i++){
    westbound.push(new Vehicle(random(width),random(height/2.5),0));} // PUSH 20 VEHICLES ON THE SCREEN
 for(let i = 0; i < 20; i++){
    eastbound.push(new Vehicle(random(width),random(height/2,height),1));} // PUSH 20 VEHICLES ON THE SCREEN
}

function draw() {
  strokeWeight(4);
  stroke(255);
  background(0);
  drawRoad();
  for(let i = 0; i <westbound.length; i++){ // CALLS THE FUCNTION "ACTION FROM THE CLASS"
    westbound[i].action();
  }
  for(let i = 0; i <eastbound.length; i++){ // CALLS THE FUCNTION "ACTION FROM THE CLASS"
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
  if(keyIsDown(SHIFT)){
    eastbound.push(new Vehicle(random(width),random(height/2,height),1)); // PUSH THE VEHICLE EASTBOUND
  }
  else{
    westbound.push(new Vehicle(random(width),random(height/2.5),0)); // PUSH THE VEHCILE TO MOVE WESTBOUND
  }

}
class Vehicle{s
  constructor(x,y,dir){
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.c = color(random(255),random(255),random(255));
    this.type = int(random(2));
    this.pos = createVector(x,y);
    this.speed =random(0,15);
    //this.acc = createVector(random(-1,1),random(-1,1));
  }
  action(){
    this.display(); // PUSH THE DRAWING OF THE VEHICLES TO THE SCREEN 
    this.move(); // MOVE THE VEHICLE 
    this.speedUp(); // SPEED UP THE VEHICLE 
    this.speedDown(); // SLOW DOWN THE VEHICLE
  }
  speedUp(){
    if(this.dir === 0){// moves west bound 
      this.speed -1; // SPEED UP THE VEHICLE
    }
    if(this.dir === 1){// moves east bound 
      this.speed +1; // SPEED UP THE VEHICLE
    
    }
  }

  speedDown(){
    if(this.dir === 0){// moves west bound 
      this.speed +1; // SLOW DOWN THE VEHICLE 
    }
    if(this.dir === 1){// moves east bound 
      this.speed -1; // SLOW DOWN THE VEHICLE
    
    }
  }
  move(){
    if(this.dir === 0){// moves west bound 
      this.pos.x -= this.speed;// IF THE DIR IS 0 MOVE WESTBOUND 
      if(this.pos.x < 0){ // WRAP THE VEHICLE AROUND
        this.pos.x = width;
      }
      //this.acc.add(this.acc);
    }
    if(this.dir === 1){// moves eastbound 
      this.pos.x += this.speed;// IF THE DIR IS 1 MOVE EASTBOUND
      if(this.pos.x > width){// WRAP THE VEHICLE AROUND 
        this.pos.x = 0;
      }
        
    }
  }
  display(){

    if(this.type ===0){ // IF THE TYPE IS 0 DRAW A CAR
      this.drawCar();

    }
    else if (this.type === 1){ // IF THE TYPE IS 1 DRAW A TRUCK
      this.drawTruck();

    }
  }
  drawCar(dir){
    fill(this.c); // DRAWS THE CAR
    rect(this.pos.x,this.pos.y,100,40);// DRAWS THE BODY OF THE CAR
    rect(this.pos.x+10,this.pos.y+45,10,4);//
    rect(this.pos.x+85,this.pos.y+45,10,4);//
    rect(this.pos.x+85,this.pos.y-10,10,4);//DRAWS THE WHEELS
    rect(this.pos.x+10,this.pos.y-10,10,4);//
  }
  drawTruck(dir){ // DRAWS THE TRUCK
    fill(this.c);
    ellipse(this.pos.x,this.pos.y,100,40);// DRAWS THE BODY OF THE TRUCK
    ellipse(this.pos.x+35,this.pos.y+20,10,4);// 
    ellipse(this.pos.x+35,this.pos.y-20,10,4);//DRAWS THE WHEELS
    ellipse(this.pos.x-35,this.pos.y-20,10,4);//
    ellipse(this.pos.x-35,this.pos.y+20,10,4);//
  }

}