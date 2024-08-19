let pageheader
let showRedCircle = true
function setup() {
  createCanvas(windowWidth, windowHeight);
  pageheader = select("#ahhYes")
    .position(50,150)
    .html ("Joshua er lwo")
    .mouseClicked(() => showRedCircle = !showRedCircle)
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}

function draw() {
  background(220);
  if (showRedCircle == true){
    fill("red")
    ellipse(100,200,100)
  }
}
