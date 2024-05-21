let x = 0;
let y = 0;
let spacing = 18;
let randomValue = 0.18;
let shapeRate = 200;
let strokeW = 3; 
let rainbowColors;

function setup() {
  createCanvas(windowWidth, windowHeight);  
  background(241,236,223);
  rainbowColors = [
    color(225,150,114),    // Rosso
    color(237,205,153),  // Arancione
    color(155,192,183),  // Giallo
    color(238,161,188),    // Verde
    color(87,134,137),    // Blu
    color(215,181,166),   // Indaco
    color(174,129,75)   // Viola
  ];
}

function draw() {
  pattern();
}

function pattern(){
  fill(241,236,223);
  strokeWeight(strokeW);
  strokeCap(SQUARE);

  if(random(1) < randomValue){
    let randomIndex = floor(random(rainbowColors.length));
    stroke(rainbowColors[randomIndex]);
    if(random(1) < shapeRate){
      rect(x, y, spacing, spacing);
    } else {
      rect(x, y + spacing, spacing, spacing); 
    }
  } else {
    let randomIndex = floor(random(rainbowColors.length));
    stroke(rainbowColors[randomIndex]);
    if(random(1) < shapeRate){
      rect(x + spacing, y, spacing, spacing); 
    } else {
      rect(x, y, spacing, spacing); 
    }
  }
  x += spacing;
  if(x > width){
    x = 0;
    y += spacing;
  }
}
