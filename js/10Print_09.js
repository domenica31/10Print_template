let x = 0;
let y = 0;
let spacing = 18;
let randomValue = 0.5; // Aumentato il valore per maggiore varietà
let shapeRate = 0.5; // Cambiato a 0.5 per maggiore equilibrio tra le forme
let strokeW = 3; 
let rainbowColors;

function setup() {
  createCanvas(windowWidth, windowHeight);  
  background(255);
  rainbowColors = [
    color(238,191, 188),    
    color(167,206,205),  
    color(240, 226, 199), 
    color(199, 218, 215),    
    color(233, 236, 201),  
    color(249,229, 236)  
  ];
}

function draw() {
  pattern();
}

function pattern(){
  strokeWeight(strokeW);
  strokeCap(SQUARE);

  let randomIndex = floor(random(rainbowColors.length));
  stroke(rainbowColors[randomIndex]);
  fill(rainbowColors[randomIndex]);

  let randomShape = random(1);
  let size = spacing * random(0.5, 1.5); // Dimensioni variabili delle forme

  if (randomShape < randomValue) {
    if (random(1) < shapeRate) {
      ellipse(x, y, size, size);
    } else {
      rect(x, y, size, size); 
    }
  } else {
    if (random(1) < shapeRate) {
      line(x, y, x + size, y + size);
    } else {
      line(x + size, y, x, y + size); 
    }
  }
  
  x += spacing;
  if (x > width) {
    x = 0;
    y += spacing;
  }
}