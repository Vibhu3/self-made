/*there is a boy that is trying to get to the boss two times with two different levels. He can only follow one path and the boss summons rocks falling from the 
sky. To switch to level two he will get to the boss once and click on the level one image. You move with the arrow keys.
The difficulty level is hard in level two. The rocks fall faster. The lines the player can pass through is also small. When level 1 completes
the user has to click on the image that shows to proceed to level 2.*/

var boss,bossImg,caveImg
var ballGroup;
var gameState="play"
var Youwin
var win
var Gameover
var dangerzone
var dangerGroup
var count=0;
var flag=0;
function preload(){
  caveImg=loadImage("HGSS_Dark_Cave-Route_45-Day.png")
  bossImg=loadImage("front_20-_20on_1_1.png")
  lev1Img=loadImage("l1.jpg");
  level2Img=loadImage("level2.png")
  gameoverImg=loadImage("10.jpg")
  ballImg=loadImage("ball.png")
  boyImg=loadImage("boy.png")
  winImg=loadImage("win.jpg")
}
function setup() {
//createCanvas(800,400);
createCanvas(windowWidth,windowHeight)
 boss=createSprite(400,20,20,20);
 boss.addImage(bossImg)
 boss.scale=0.1
 line=createSprite(400,330,550,30)
 line1=createSprite(400,270,550,30)
 line2=createSprite(400,210,550,30)
 line3=createSprite(400,150,550,30)
 line4=createSprite(400,90,550,30)
 line5=createSprite(420,78,10,30)
 line6=createSprite(390,78,10,30)
 line7=createSprite(400,300,10,60)
 line8=createSprite(670,240,10,60)
 line9=createSprite(220,120,10,60)
 line10=createSprite(300,180,10,60)
 Youwin=createSprite(400,200,800,400)
 uwin=createSprite(400,200,800,400)
 uwin.visible=false
dangerGroup=new Group();
 
 Youwin.visible=false;
 boy=createSprite(150,330,10,10)
 boy.shapeColor="red"
 boy.addImage(boyImg)
 boy.scale=0.1
 Gameover=createSprite(400,200,800,400)
 Gameover.visible=false;
 ballGroup=new Group()
}

function draw() {
  background(caveImg);  
  fill("white")
  textSize(18)
  console.log(flag)
  console.log(gameState)

  count=count+Math.round(frameRate()/30)
  text("score:"+count,430,50)
  //console.log(frameRate()/30)
    if(dangerGroup.isTouching(boy)){
    Gameover.addImage(gameoverImg) 
    Gameover.visible=true
    gameState="end"
    console.log("touchingdangerzone")
  }
  if(gameState==="end"){
    dangerGroup.destroyEach();
    ballGroup.destroyEach();
  }
  if(boy.isTouching(boss)&&gameState==="level2"&&flag===0){
    uwin.addImage(winImg)
    uwin.visible=true
  }
  if(boy.isTouching(line)||boy.isTouching(line1)||boy.isTouching(line2)||boy.isTouching(line3) 
  ||boy.isTouching(line4)||boy.isTouching(line5)||boy.isTouching(line6)||boy.isTouching(line7)||boy.isTouching(line8)||boy.isTouching(line9)||boy.isTouching(line10))
  {
    
    if(keyDown(UP_ARROW)){
boy.y=boy.y-5
    
    }
    if(keyDown(DOWN_ARROW)){
      boy.y=boy.y+5
    }
    if(keyDown(LEFT_ARROW)){
      boy.x=boy.x-5
    }
    if(keyDown(RIGHT_ARROW)){
      boy.x=boy.x+5
    }
  }  
  if(ballGroup.isTouching(boy)){
  Gameover.addImage(gameoverImg) 
  Gameover.visible=true
  gameState="end"
  
  //ballGroup.setVelocityYEach(0)
  //ballGroup.destroyEach();
  }
  win();
  if(gameState!=="end"){
    spawnball();
  }
  
  drawSprites();
}
function spawnball(){
  if(frameCount%40===0){
    var ball=createSprite(random(20,600),0,20,20)
    ball.velocityY=3.5
    ball.addImage(ballImg)
    ball.scale=0.085
    ballGroup.add(ball)
  }
}
function win(){
  console.log(gameState)
  if(boy.isTouching(ballGroup)&&gameState==="win"){
    Youwin.addImage(winImg)
    Youwin.visible=true
  }
  if(boy.isTouching(boss)&&gameState==="play"){
    Youwin.visible=true;
Youwin.addImage(lev1Img)
gameState="win"
flag=1;
  }
  if(mousePressedOver(Youwin)&&gameState==="win")
  {
    level2function();
    
  }

}
function level2function(){
Youwin.destroy();
gameState="level2"
boy.x=150
boy.y=330
flag=0
var dangerzone=createSprite(690,330,10,10)
  dangerzone.shapeColor="red"
  dangerGroup.add(dangerzone)
var dangerzone1=createSprite(420,270,10,10)
dangerzone1.shapeColor="red"
dangerGroup.add(dangerzone1)

var dangerzone2=createSprite(470,220,10,10)
dangerzone2.shapeColor="red"
dangerGroup.add(dangerzone2)
var dangerzone3=createSprite(360,160,10,10)
dangerzone3.shapeColor="blue"
dangerGroup.add(dangerzone3)
var dangerzone4=createSprite(470,90,10,10)
dangerGroup.add(dangerzone4)
dangerzone4.shapeColor="green"
var dangerzone5=createSprite(400,340,10,10)
dangerGroup.add(dangerzone5)
dangerzone.shapeColor="purple"
}
