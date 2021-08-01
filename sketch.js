var img,bg,space1,space2,space3,space4;

var iss,spacecraft,hasDocked;
var hasDocked = false;

function preload(){
  img = loadImage("images/iss.png");
  bg = loadImage("images/spacebg.jpg");
  space1 = loadImage("images/spacecraft1.png");
  space2 = loadImage("images/spacecraft2.png");
  space3 = loadImage("images/spacecraft3.png");
  space4 = loadImage("images/spacecraft4.png");

}

function setup() {
  createCanvas(800,400);

  iss = createSprite(330,130);
  iss.addImage(img);
  iss.scale = 0.25;

  spacecraft = createSprite(285,240);
  spacecraft.addImage(space1);
  spacecraft.scale = 0.15;

}

function draw(bg) {
  background(255,255,255); 
  
  if(!hasDocked){
    spacecraft.x = spacecraft.x +RandomSource(-1,1);
    text("Docking Succesfull",100,50);
    hasDocked = true;

  if(keyDown("UP_ARROW")){
    spacecraft.addImage(space2);
    spacecraft.y = spacecraft.y - 2;
  }
  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(space2);
    spacecraft.y = spacecraft.y + 2;
  }
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(space3);
    spacecraft.x = spacecraft.x - 2;
  }
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(space3);
    spacecraft.x = spacecraft.x + 2;
  }
  }
  
  drawSprites();
}