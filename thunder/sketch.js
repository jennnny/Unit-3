function setup() {
  createCanvas(400, 400);

  background(248);
}

function draw() {

  fill(110+sin(frameCount*0.09)*110);
  if (mouseIsPressed) {
    stroke(205,205,0);
    strokeWeight(3);
  }
  else {
    noStroke();
  }
  textFont("Seravek");
  textSize(40);
  textStyle(BOLD);
  textAlign(CENTER);
  background(248);
  text("thunderstorms",400 / 2, 400 / 2);
  
}
