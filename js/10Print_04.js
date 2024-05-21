let x = 0;
let y = 0;
let spacing = 16;
let randomValue = 0.20;
let strokeW =5;

function setup() {
  createCanvas(windowWidth, windowHeight);  
  background(199,201,156);
}

function draw() {
  linePattern();
}

function linePattern(){

  strokeWeight(strokeW);
  strokeCap(ROUND);
  
    stroke(250,	235, 215); // Colore bianco antico


  if(random(5)<randomValue){
    
    
    line(x,y,x+spacing,y+spacing);
  }else{
    line(x,y+spacing,x+spacing,y);
  }
  x += spacing;
  if(x > width){
    x = 0;
    y = y + spacing;
  }
}