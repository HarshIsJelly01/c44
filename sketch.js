var bg;
var apple,appleImage;
var banana,bananaImage;
var melon,melonImage;
var orange,orangeImage;

function preload(){
  bg=loadImage("jungle.jpg");
appleImage=loadImage("apple2.png");
bananaImage=loadImage("banana2.png");
melonImage=loadImage("melon2.png");
orangeImage=loadImage("orange2.png");
}



function setup() {
  createCanvas(1900, 900);
}




function draw() {
image(bg,0,0,width,height);
spawnApple();
spawnBanana();
spawnMelon();
spawnOrange();
drawSprites();
}

function spawnApple(){
if(frameCount%60===0){
  apple=createSprite(random(0,475),20,10,10);
  apple.addImage(appleImage);
apple.velocityY=2;

}
}

function spawnBanana(){
  if(frameCount%60===0){
banana=createSprite(random(0,475),20,10,10);
banana.addImage(bananaImage);
banana.velocityY=2;
  }
}



function spawnMelon(){
    if(frameCount%60===0){
  melon=createSprite(random(0,475),20,10,10);
  melon.addImage(melonImage);
  melon.velocityY=2;

    }
  }

  function spawnOrange(){
    if(frameCount%60===0){
  orange=createSprite(random(0,475),20,10,10);
  orange.addImage(orangeImage);
  orange.velocityY=2;
    }
  }
