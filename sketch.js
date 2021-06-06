var bg1i,bg1,bg2i,bg2;
var launcherImg,launcher,rocketImg,rocket,score = 0;
var odGroup, od, od1, od2, od3, od4, od5;
var clouds;
var gameState = 1;
var play =1;
var end = 0;
 function preload(){
  bg1i = loadImage("bg.jpg");
  bg2i = loadImage("spacebg.jpg");
  od1 = loadImage("ob1.png");
  od2 = loadImage("ob2.png");
  od3 = loadImage("ob3.png");
  od4 = loadImage("ob4.png");
  od5 = loadImage("ob5.png");
  clouds = loadImage("cloud.gif");
  launcherImg = loadImage("spaceStuttel.png");
  rocketImg = loadImage("rocket.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  odGroup = new Group()

  bg1 = createSprite(300,300,600,600);
  bg1.addImage(bg1i)
  bg1.scale = 1
  
  bg2 = createSprite(300,1,600,600);
  bg2.addImage(bg2i)
  bg2.scale = 1
  bg2.visible = false;
  
  launcher = createSprite(300,240,600,600);
  launcher.addImage(launcherImg)
  launcher.scale = 0.7
  
  rocket = createSprite(800,400,20,20);
  rocket.addImage(rocketImg)
  rocket.scale = 1
  rocket.visible = false;


}

function draw() {
  background(0);

  if (gameState === 1){

  if(keyIsDown(RIGHT_ARROW)){
    rocket.velocityX = 5;
  }
  if(keyIsDown(LEFT_ARROW)){
    rocket.velocityX = -5;
  }
  if(keyDown(UP_ARROW)){
    score++

    if ( frameCount % 50 ===0){
      od = createSprite(random(0,1000),0,100,100);
      od.scale = 0.3
      od.velocityY = 8;
      od.lifetime = 65;
      var ran = Math.round(random(1,5))
      switch(ran){
        case 1: od.addImage("ob11",od1);
        break
        case 2: od.addImage("ob11",od2);
        break
        case 3: od.addImage("ob11",od3);
        break
        case 4: od.addImage("ob11",od4);
        break
        case 5: od.addImage("ob11",od5);
        break
    }
    odGroup.add(od);
  }

  }
  if(score < 500 && score > 0){
  background(clouds);
  rocket.visible = true;
  rocket.addImage(rocketImg)  
  bg1.visible = false;
  launcher.visible = false;
  }

  if(score < 1000 && score > 500){
  background(clouds);
  score = score + 2
  rocket.visible = true;
  rocket.addImage(rocketImg)  
  bg1.visible = false;
  launcher.visible = false;
  }

  if(score < 1500 && score > 1000){
    background(clouds);
    score = score + 3
    rocket.visible = true;
    rocket.addImage(rocketImg)  
    rocket.scale = 0.5
    bg1.visible = false;
    launcher.visible = false;
    }

  if(score < 3100 && score > 1500){
    background(clouds);
    score = score + 4
    rocket.visible = true;
    rocket.addImage(rocketImg)  
    rocket.scale = 0.5
    bg1.visible = false;
    launcher.visible = false;
    }

  if(score < 3700 && score > 3100){
    background(clouds);
    score = score + 5
    rocket.visible = true;
    rocket.addImage(rocketImg)  
    bg1.visible = false;
    launcher.visible = false;
    }

    if (odGroup.isTouching(rocket))
    {
    gameState = 0
    }

  fill(255,255,255)
  textSize(33)
  text(score,200,200)
  drawSprites();

  if(score > 3700){
  background(clouds);
  text("You Won",200,300)
  rocket.visible = true;
  rocket.addImage(rocketImg)  
  bg1.visible = false;
  launcher.visible = false;
  }
}
  if (gameState === 0){
  fill(255)
  textSize(33)
  text("You lost"+"your score was :"+score,200,200);
  text("Press down arrow to restart",200,300)
  if (keyDown(DOWN_ARROW)){
    score = 0
    gameState = 1;
  }
  }
}