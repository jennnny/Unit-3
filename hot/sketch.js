function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(248);
  textFont("Seravek");
  textStyle(BOLD);
  textAlign(CENTER);
  
  fill(245,235,0)
  textSize(42);
  text("hot",400 / 2 , 400 / 2.05+sin(frameCount*0.2));
  textSize(40);
  fill(235,55,0)  
  text("hot",400 / 2 , 400 / 2);
  
} 
