let x = 0;
let y = 0;
let spacing = 18;
let randomValue = 0.5;
let shapeRate = 0.5;
let strokeW = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);  
  background(236,208,188);
}

function draw() {
  pattern();
}

function pattern(){
  strokeWeight(strokeW);

  if(random(1) < randomValue){
    fill(186,188,168); 
    if(random(1) < shapeRate){
      ellipse(x, y, spacing, spacing); // Ellipse shape
    } else {
      ellipse(x, y, spacing, spacing); // Rectangle shape
    }
  } 
  x += spacing;
  if(x > width){
    x = 0;
    y += spacing;
  }
}
