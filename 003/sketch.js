function setup() {
  createCanvas (700,700);
  drawalllines(0);

}

function drawalllines(colorChange) {
  var c = 
  color (209+colorChange,223+colorChange,232+colorChange);
  drawline(c,0);
  drawline(c,3);
  c = color(246+colorChange,232+colorChange,207+colorChange);
  drawline(c,1);
  drawline(c,4);
  c= color(253+colorChange,249+colorChange,219+colorChange);
  drawline(c,2);
  drawline(c,5);
}

function drawline(color,position){
   fill(color);
   noStroke();
  rect(0, 100*position, 700, 100);
  
}

var value = 0;
var iod = 0;

function draw(){
  drawalllines(value);
}

function mouseMoved(){
  if (iod == 0) {
     value = value-5 ;
}
  if (iod == 1) {
     value = value+5 ;
}
  if (value < -200) {
   iod = 1;
}
    
  if (value > 50) {
   iod = 0;
}
  
}