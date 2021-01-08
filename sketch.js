var fixedRect, movingRect, gameObject1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(400, 200,70,30);
  gameObject1.shapeColor = "green";
  gameObject1.debug = true;


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  gameObject1.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  console.log;
  
bounceOff(movingRect, gameObject1);

  drawSprites();
}

