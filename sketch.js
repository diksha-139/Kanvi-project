/* 
My own game
******

*/
var bgImg,roboImg, roboCollided,robot;
var bg;
var invisibleGround;
var life= 5;
var score=0;
var obstacles
var obImg,bugImg;
var answer="";
var t;
var number;
const PLAY =1;
const END = 0;
const ASK =2;
var gameState = PLAY;
var ob1, ob2, ob3, ob4, ob5;
var question;
var restart;
var r;
function preload(){
bgImg= loadAnimation("images/bg1.png","images/bg2.png","images/bg3.png","images/bg4.png","images/bg5.png","images/bg6.png","images/bg7.png","images/bg8.png","images/bg9.png","images/bg10.png","images/bg11.png","images/bg12.png","images/bg13.png","images/bg14.png","images/bg15.png","images/bg16.png","images/bg17.png","images/bg18.png","images/bg19.png","images/bg20.png");
roboImg= loadAnimation("images/robo1.png","images/robo2.png","images/robo3.png","images/robo4.png","images/robo5.png","images/robo6.png","images/robo7.png");
roboCollided= loadAnimation("images/col2.png","images/col3.png");
obImg= loadImage("images/drone.png");
bugImg= loadAnimation("images/b1.png","images/b2.png","images/b3.png","images/b4.png")
bugStopImg=loadAnimation("images/b1.png");
number=loadImage("images/back.gif");
robotStopImg= loadAnimation("images/robo1.png");
ob1=loadImage("images/fb.png");
ob2=loadImage("images/whatsapp.png");
ob3=loadImage("images/qrcode.png");
ob4=loadImage("images/tiktok.png");
}


function setup() {
  createCanvas(1300,550);

  bg = createSprite(750,175,7500,7850);
  bg.addAnimation("background",bgImg);
  bg.scale=30;
  bg.velocityX = -3;


  invisibleGround= createSprite(650,540,1500,20);
  invisibleGround.visible = false;


  restart= createSprite(width/2,height/2);
  restart.visible= false;

  robot = createSprite(50,height-100, 50, 50);
  robot.addAnimation("running",roboImg);
  robot.addAnimation("collided",roboCollided);
  robot.addAnimation("stopped",robotStopImg);

  obstacles= new Group();
  displayScore = createElement("h1");
  displayLife= createElement("h1");

 
 
}

function draw() {
   background(0);
   r=Math.round(random(1,5))
  displayScore.html("Score: "+score);
  displayScore.position(500,620);
  displayScore.class("score");
 
  displayLife.html("Life : "+life);
  displayLife.position(300,620);
  displayLife.class("score");
  
  drawSprites();



if(gameState=== PLAY){
  drawSprites();
  //bg.velocityX=-3;
  robot.changeAnimation("running",roboImg);
  robot.visible= true;
  restart.visible= false;

//reset
if(bg.x<width/3){
  bg.x=width/2;
}
//jumping
if(keyWentDown("space")){

  robot.velocityY=-20;
}
//to  add gravity

robot.velocityY = robot.velocityY + 0.8;


spawnObstacles();


if(obstacles.isTouching(robot)){
  robot.visible=false;
  obstacles.destroyEach();
  gameState = ASK;
}

}else if(gameState === ASK){
  // background("yellow");
  bg.velocityX=0;
  obstacles.setVelocityXEach(0);
obstacles.destroyEach();

  drawSprites();
  robot.visible=false;
  if(frameCount % 80 === 0){
    setTimeout(
      ()=>{
  var r=Math.round(random(1,5))
  switch(r){
  case 1: question = new Questions();
  
  question.display();
  break;
  
  case 2:  question = new Questions();
  
  question.display();
  break;
  case 3:  question = new Questions();
  
  question.display();
  break;
  case 4:  question = new Questions();
  
  question.display();
  break;
  case 5:  question = new Questions();
  
  question.display();
  break;
  default: break;
  }
  
  },3000)
  
  }
 


 restart.visible= true;

  if(mousePressedOver(restart)){
   
    question.hide();
  
    gameState= PLAY;

  }

  if(life === 0){
    gameState= END;
  }



}else
 if(gameState === END){
  clear();
  background("red");
  image(number,0,0,width*2,height*2)
  restart.visible= true;
drawSprites();
textSize("460");
fill("yellow")
text("GAme Over !!!!",200,300);
obstacles.setVelocityXEach(0);
bg.velocityX=0;
if(mousePressedOver(restart)){
  clear();
  question.hide();

  gameState= PLAY
}

 
 
}
  




 

  robot.collide(invisibleGround);


  
  




}



function spawnObstacles(){
  if(frameCount% 20 ===0){
    obstacle= createSprite(width,height-100,10,10);
   
    obstacle.y= Math.round(random(height-100,500));
    var rand=Math.round(random(1,5));
    switch(rand){
      case 1: obstacle.addImage(ob1);
      obstacle.scale=0.01
      break; 
      case 2: obstacle.addImage(ob2);
      obstacle.scale=0.4
      break; 
      case 3: obstacle.addImage(ob3);
      obstacle.scale=0.6
      break;
      case 4: obstacle.addImage(ob4);
      obstacle.scale=0.5
      break; 
     
      default:break;

    }
    obstacle.scale=0.5
    obstacle.velocityX=-14

     obstacle.depth = robot.depth
    robot.depth +=1 ;
    obstacle.depth =bg.depth;
    obstacle.depth +=1
obstacles.add(obstacle)
  }
 
}
