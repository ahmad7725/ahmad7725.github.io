// Perlin noise demo
// ahmad fayed
// nov 29 2021
//
// Extra for Experts:
// - compare the random funtion whit the noise function

let dia, t,x,y ;
let xTime, YTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  t = random(100); // noise seed 
  x = width/2;
  y = height/2;
  xTime = 5;
  YTime = 25;
  background(0);
  noStroke();
}

function draw() {
  //background(255);
  fill(0,30);
  rect(0,0,width,height);
  drawCricle();
  movecss();

  function drawCricle(){
    dia = noise(t); // 0-1
    dia = map(dia,0,1,10,90);
    fill(255,33,230);
    circle(x,y,dia);
    t+= 0.02;

  }


  function movecss(){
    x+= map(noise(xTime),0,1,-5,5);
    y+= map(noise(YTime),0,1,-5,5);
    xTime += 0.02;
    YTime += 0.05;



  }
}