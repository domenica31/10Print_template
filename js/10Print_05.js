let x = 5;
let y = 5;
let spacing = 80;
let randomValue = 5;
let ellipseRate = 2;
let rectRatio = 10;
let strokeW = 1.5;

function setup() {
  createCanvas(windowWidth, windowHeight);  
  background(241,236,223);
}

function draw() {
  concentricCircles();
}

function concentricCircles() {
  noFill();
  strokeWeight(strokeW);
  strokeCap(ROUND);
  stroke(225,150,114);

  let centerX = x + spacing / 2;
  let centerY = y + spacing / 2;
  let maxRadius = spacing / 2;

  for (let radius = maxRadius; radius > 0; radius -= spacing / 5) {
    ellipse(centerX, centerY, radius * 5);
  }

  x += spacing;
  if(x > width){
    x = 0;
    y = y + spacing;
  }
}