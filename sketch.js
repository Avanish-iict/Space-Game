function preload(){
baground = loadImage("DogBg/6-outer-space-background-cartoon-clipart.jpg");
spaceShuttleIMG = loadImage("DogBg/689ae0f75501e3edb6f5804edab14510.png");
minsideIMG = loadImage("DogBg/inside_mars.jpg")
SinsideIMG = loadImage("DogBg/c1bf5b00-0021-4feb-966d-ba48202e378d.jpg")
JinsideIMG = loadImage("DogBg/ff7609b8efa4aa8e8d15d4effa0913fa.png")
}

function setup() {
    createCanvas(4900, 2900);
    
   //Creating spaceShuttle sprite:-
   spaceShuttle = createSprite(200,0,50,50);
     spaceShuttle.velocityY = 5;
     spaceShuttle.velocityX = 5;
     spaceShuttle.addImage(spaceShuttleIMG);

  
    //Creating blocks:-
    block1 = createSprite(700,990,590,590);
    block2 = createSprite(4300,1090,590,590);
    block3 = createSprite(3300,1700,590,590);
}

function draw() {
  rectMode(CENTER);
  background(baground);

  //'if' conditions:-

  //'if' condition-1:
  if(keyDown("UP_ARROW")){
     spaceShuttle.velocityY = -5;
  }

  //'if' condition-2:
  if(keyDown("DOWN_ARROW")){
    spaceShuttle.velocityY = 5;
 }

 //'if' condition-3:
 if(keyCode === RIGHT_ARROW){
  spaceShuttle.velocityX = 5;
}

//'if' condition-4:
if(keyDown("LEFT_ARROW")){
  spaceShuttle.velocityX = -5;
}

//'if' condition-5:
if(spaceShuttle.isTouching(block1)){
minside = createSprite(1990,1300,60,60);
minside.addImage(minsideIMG)
spaceShuttle.destroy();
minside.scale = 16
}

//'if' condition-6:
if(spaceShuttle.isTouching(block2)){
  Jinside = createSprite(1990,1300,60,60);
  Jinside.addImage(JinsideIMG)
  spaceShuttle.destroy();
  Jinside.scale = 16
  }

  //'if' condition-7:
if(spaceShuttle.isTouching(block3)){
  Sinside = createSprite(1990,1300,60,60);
  Sinside.addImage(SinsideIMG)
  spaceShuttle.destroy();
  Sinside.scale = 16
  }

//Giving the invisible function for the blocks:-
block1.visible = false;
block2.visible = false;
block3.visible = false;
drawSprites();
}