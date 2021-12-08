// array warmup and oop demo
// ahmad fayed 
// dec 2
//
// Extra for Experts:
// - find the minimum items index and a - 
//first look at object-oriented programin


let numbers = [94,32,4,33,99,102,1];
let sorted = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  draw(220); 
}


function sortOurArray(){
  while(numbers.legth > 0){
    findMinIndex();
  }

}


function findMinIndex(){
// search through an array, fiind the fsmallest item,
// return its index
  let smallestValue = numbers [0];
  let smallestIndex = 0;
  for (let i = 0; i < numbers.length; i ++){
    let current = numbers [i];
    if (current < smallestValue){
      smallestValue = current;
      smallestIndex = i;
    }
  }
  sorted.push(smallestValue);
  numbers.splice(smallestIndex,1);
}
