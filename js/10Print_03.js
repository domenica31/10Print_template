let x = 0;
let y = 0; 
let spacing = 18; 
let strokeW = 0; 

function setup() {
  createCanvas(windowWidth, windowHeight); //l'area di lavoro
  background(237,205,153);
}

function draw() { 
  linePattern();
}

function linePattern(){
  fill(87,134,137)
  strokeWeight(strokeW); //valore spessore che voglio dare alla linea
  ellipse(x,y,spacing); 

  x += spacing; 
  if(x > width){ 
    x = 0;
    y = y + spacing; 
  }
}