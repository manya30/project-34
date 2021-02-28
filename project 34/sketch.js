var ball;
var paddle;

function preload() {
  ball=loadImage("ball.png")
  paddle=loadImage("paddle.png")
  /* preload your images here of the ball and the paddle */
}
function setup() {
  createCanvas(400, 400);
  
  ball1=createSprite(200,200,9,9)
  ball1.addAnimation("ball.png",ball)
  ball1.scale=0.67
  ball1.velocityX=9;
  
  paddle1=createSprite(385,200,9,80)
  paddle1.addAnimation("paddle.png",paddle)
  
  
  
  /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  

  
}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges=createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball1.bounceOff(edges[0]);
  ball1.bounceOff(edges[2]);
  ball1.bounceOff(edges[3])
  

  /* Allow the ball to bounceoff from the paddle */
  ball1.bounceOff(paddle1)
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
   if(ball1.isTouching(paddle1)){
  ball1.velocityY=9
 }
   
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW)){
    paddle1.y=paddle1.y-20
    
    
  
     /* what should happen when you press the UP Arrow Key */
  
  
  }
  
  if(keyDown(DOWN_ARROW))
  {paddle1.y=paddle1.y+20
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  
}

function randomVelocity(){
/* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}




  