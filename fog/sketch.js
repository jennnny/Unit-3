function setup() {
  createCanvas(400, 400);

  background(248);
}

function draw() {

  fill(230);
  if (mouseIsPressed) {
    fill(230-30);
  }
  textFont("Seravek");
  textSize(40);
  textStyle(BOLD);
  textAlign(CENTER);
  background(248);
  text("fog", 400 / 2, 400 / 2);
  
}
