function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(248);
  fill(105,225,250)
  textFont("Seravek");
  textSize(40);
  textStyle(BOLD);
  textAlign(CENTER);
  text("cold",200+sin(frameCount*0.9), 200);

  
} 
