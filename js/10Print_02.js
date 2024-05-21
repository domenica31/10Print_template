let x = 0;
let y = 0;
let spacing = 30;
let triangleSize = 20;
let strokeW = 6;

function setup() {
  createCanvas(windowWidth, windowHeight);  
  background(243,226,221);
  noFill();
}

function draw() {
  trianglePattern();
}

function trianglePattern(){
  fill(228,175,149)
  strokeWeight(strokeW);
  strokeCap(ROUND);

  for(let i = 0; i < width; i += spacing){
    for(let j = 0; j < height; j += spacing){
      stroke(228,175,149); 
      triangle(i, j, i + triangleSize, j + triangleSize, i, j + triangleSize);
    }
  }
}