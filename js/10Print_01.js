let x = 0;
let y = 0;
let spacing = 18;
let randomValue = 0.8;
let ellipseRate = 0.5;
let rectRatio = 5;
let strokeW = 6;
let rainbowColors;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(255,255,255);
  rainbowColors = [
    color(237,205,153),  
    color(225,150,114),  
    color(167,206,205), 
    color(238,181,188),   
    color(207,165,102),   
    color(199,201,156)  
  ];
}

function draw() {
  linePattern();
}

function linePattern(){
  strokeWeight(strokeW);
  strokeCap(ROUND);
  let randomIndex = floor(random(rainbowColors.length));
  stroke(rainbowColors[randomIndex]);

  if(random(1) < randomValue){
    line(x, y, x + spacing, y + spacing);
  } else {
    line(x, y + spacing, x + spacing, y);
  }
  x += spacing;
  if(x > width){
    x = 0;
    y += spacing;
  }
}
