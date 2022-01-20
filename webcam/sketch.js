// video stream and effects 
// ahmad fayed
// jan 19 2022
//
// Extra for Experts:
// can we get the webcam to display the effects ?
let video;
let GRID_SPACING = 100;
function setup() {
  video = createCapture(VIDEO);
  createCanvas(640,480);
  video.hide();
}

function multiVideo(){
  // display several videos in a 2D  grid
  for(let x= 0; x < width; x+= GRID_SPACING){
    for( let y = 0; y < height; y += GRID_SPACING){
      image(video,x,y,GRID_SPACING,GRID_SPACING);
    }
  }

}

function average(pos){
  //return the average value of r/g/b starting at pos 
  let r = pixels[pos];
  let g = pixels[pos+1];
  let b = pixels[pos+2];
  return (r+g+b)/3;
}

function setpixelcolor(pos,r,g,b){
  // helper function for set RGB for particular pixel, index of R given by pos
pixels[pos] = r;
pixels [pos +1] = g;
pixels[pos+2] = b;
}

function draw() {
  background(220);
  //multiVideo();
  video.loadPixels();
  for(let i = 0; i < pixels.length; i += 4){
    let avg = average(i);
    setpixelcolor(i,avg,avg,avg);
  }
image(video,0,0);
}