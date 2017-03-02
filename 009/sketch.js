/*  Original Code by Jaap de Maat & Sion Fletcher - CSM GCD BA Y1 Unit 3 - Jan 2017
    edited by Jenny Tse - ADD DATA
*/


function setup() {

  createCanvas(windowWidth, windowWidth);


  background(248);

  
  textSize(48);
  textFont("Seravek");
  textStyle(BOLD);
  textAlign(CENTER);
  strokeWeight(2);
  rect(windowWidth/9,windowWidth/9,windowWidth/1.3,windowWidth/1.3);

     

  fill(70);
  text("Yahoo Weather",windowWidth / 2,windowHeight / 2);
  

  button1 = createButton('London');
  button1.position(windowWidth/8.5, windowHeight - 50);
  
  //London
  button1.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22London%2C%20uk%22)and%20u%20%3D%20'C'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });


  //New York
  button2 = createButton('New York');
  button2.position(windowWidth/3.9, windowHeight - 50);

  button2.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22new%20york%2C%20us%22)and%20u%20%3D%20'C'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  
  //San Francisco
  button3 = createButton('San Francisco');
  button3.position(windowWidth/2.38, windowHeight - 50);

  button3.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22San%20Francisco%2C%20us%22)and%20u%20%3D%20'C'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  //Tokyo
  button4 = createButton('Tokyo');
  button4.position(windowWidth/1.635, windowHeight - 50);

  button4.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22tokyo%2C%20japan%22)and%20u%20%3D%20'C'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });

  
  //Hong Kong
  button5 = createButton('Hong Kong');
  button5.position(windowWidth/1.35, windowHeight - 50);


  button5.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22hong%20kong%2C%20hong%20kong%22)and%20u%20%3D%20'C'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
}

var codes;
var weather;
var city;
var temp;
var date;


function weatherLoaded(data) {
 
  //var windSpeed = data.query.results.channel.wind.speed;
  //var windDirection = data.query.results.channel.wind.direction;
   city = data.query.results.channel.location.city;
   temp = data.query.results.channel.item.condition.temp;
   date = data.query.results.channel.item.condition.date;
  
  weather = data.query.results.channel.item.condition.text;
  codes = data.query.results.channel.item.condition.code;

  background(248);
  
  textSize(16);
  textFont("Seravek");
  textAlign(CENTER);
  textStyle(NORMAL);
  fill(0);
  text("Temperature in "+city+" : "+temp+"°C", windowWidth / 2, windowHeight - 180);
  text("Date : "+date,windowWidth / 2, windowHeight - 220);
  
  
  

}

function draw() {
  
  
  textFont("Seravek");
  textSize(40);
  textStyle(BOLD);
  textAlign(CENTER);
  
  
  //thunder
  if (codes ===0||codes==1||codes==2||codes==3||codes==4||codes==37||codes==38||codes==39||codes==45||codes==47){
  background(248);
  fill(110+sin(frameCount*0.09)*110);
  if (mouseIsPressed) {
    stroke(205,205,0);
    strokeWeight(2);
  }
  else {
    noStroke();
  }
  text(weather,windowWidth / 2, windowHeight / 2);
  noStroke();
  textSize(16);
  textStyle(NORMAL);
  fill(0);
  text("Temperature in "+city+" : "+temp+"°C", windowWidth / 2, windowHeight - 180);
  text("Date : "+date,windowWidth / 2, windowHeight - 220);
  }
  
  
  
  //cloudy 
  if (codes ==26){
  fill(130)
  text(weather,windowWidth / 2, windowHeight / 3); 
  }
   
  if (codes ==27){
  fill(80)
  text(weather,windowWidth / 2, windowHeight / 3); 
  }   
  
  if (codes ==28){
  fill(80)
  text(weather,windowWidth / 2, windowHeight / 3); 
  }  
  
  if (codes ==29){
  fill(170)
  text(weather,windowWidth / 2, windowHeight / 3); 
  }  
  
  if (codes ==30){
  fill(170)
  text(weather,windowWidth / 2, windowHeight / 3); 
  }  
  
  if (codes ==44){
  fill(170)
  text(weather,windowWidth / 2, windowHeight / 3); 
  }  
  
  
   
  //rainy
  if (codes ==5||codes==6||codes==7||codes==8||codes==9||codes==10||codes==11||codes==12||codes==35||codes==40){
  fill(173,245,235);  
  text(weather,windowWidth / 2, windowHeight / 3); 
  }
   
   
  
  //snowy
  if (codes==13||codes==14||codes==15||codes==16||codes==17||codes==18||codes==41||codes==42||codes==43||codes==46){
  background(248);
  fill(150,150,150,105);
  text(weather,windowWidth / 2, windowHeight / 3);
  fill(255);
  text(weather,windowWidth / 1.985, windowHeight /2.985);
  textSize(16);
  textStyle(NORMAL);
  fill(0);
  text("Temperature in "+city+" : "+temp+"°C", windowWidth / 2, windowHeight - 180);
  text("Date : "+date,windowWidth / 2, windowHeight - 220);  
  }
   
   
  //fog 
  if (codes==19||codes==20||codes==21||codes==22){
  background(248);
  
  fill(235);
  if (mouseIsPressed) {
    fill(235-30);
  }
  text(weather,windowWidth / 2, windowHeight / 3);
  }
   
   
  //cold 
  if (codes==24||codes==25||codes==23){

  background(248);
  
  fill(105,225,250,180)
  text(weather,windowWidth / 2 +sin(frameCount*0.9), windowHeight / 3);
  textSize(16);
  textStyle(NORMAL);
  fill(0);
  text("Temperature in "+city+" : "+temp+"°C", windowWidth / 2, windowHeight - 180);
  text("Date : "+date,windowWidth / 2, windowHeight - 220);
  } 
  
  
  //hot
  if (codes==32||codes==36){
  background(248);    
  textSize(41.5);
  fill(245,225,0)
  text(weather,windowWidth / 2 , windowHeight / 3.03 +sin(frameCount*0.2));
  textSize(40);
  fill(235,55,0)  
  text(weather,windowWidth / 2 , windowHeight / 3);
  textSize(16);
  textStyle(NORMAL);
  fill(0);
  text("Temperature in "+city+" : "+temp+"°C", windowWidth / 2, windowHeight - 180);
  text("Date : "+date,windowWidth / 2, windowHeight - 220);      
  }
  
  
  //clear
  if (codes==31||codes==33||codes==34){
  fill(240,225,0*0.9);
  text(weather,windowWidth / 2, windowHeight / 3);  
  }
  
}

