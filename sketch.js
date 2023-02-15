var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var bottomObstable1,bottomObstable2,bottomObstable3
var flyingObstable1,flyingObstable2
var gameOverbutton
var restartbutton
var score = 0

var Play = 0;
var End = 0;
var gamestate = Play;
function preload(){
bgImg = loadImage("assets/bg.png")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
  gameOverbuttonImg = loadImage('assets/gameOver.png')
  restartbuttonImg = loadImage('assets/restart.png')

  flyingObstable1Img= loadImage('assets/obsTop1.png')
  flyingObstable2Img= loadImage('assets/obsTop2.png')

bottomObstable1Img= loadImage('assets/obsBottom1.png')
bottomObstable2Img= loadImage('assets/obsBottom2.png')
bottomObstable3Img= loadImage('assets/obsBottom3.png')
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

flyingObstaclesGroup = new Group()
bottomObstaclesGroup = new Group()

gameOverbutton = createSprite(200,200 )
gameOverbutton.addImage(gameOverbuttonImg);
gameOverbutton.scale = 0.75;
gameOverbutton.visible = false;
restartbutton = createSprite(190,250,50,50)
restartbutton.addImage(restartbuttonImg);
restartbutton.scale = 0.75;
restartbutton.visible = false;

}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = 8 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + -2;
   
        drawSprites();
        
}