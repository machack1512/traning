var bg, bgImage;
var mario, mario_running;
var ground;
var brickImage, bricksGroup;
var coinImage, coinsGroup;
var coinScore = 0;
var coinSound;
var jumpSound;
var mushObstacleImage, turtleObstacleImage, obstaclesGroup;
var gameState = "PLAY";
var restartImg;
var mario_collided;

function preload() {
    bgImage = loadImage("img/bgnew.jpg");
    mario_running = loadAnimation(
      "img/mar1.png",
      "img/mar2.png",
      "img/mar3.png",
      "img/mar4.png",
      "img/mar5.png",
      "img/mar6.png"
    );
    coinImage = loadAnimation(
        "img/con1.png",
        "img/con2.png",
        "img/con3.png",
        "img/con4.png",
        "img/con5.png",
        "img/con6.png"
      );
    brickImage = loadImage("img/brick.png");
    coinSound = loadSound("sounds/coinSound.mp3");
    jumpSound = loadSound("sounds/sounds_jump.mp3");
    mushObstacleImage = loadAnimation(
        "img/mush1.png",
        "img/mush2.png",
        "img/mush3.png",
        "img/mush4.png",
        "img/mush5.png",
        "img/mush6.png"
      );
      turtleObstacleImage = loadAnimation(
        "img/tur1.png",
        "img/tur2.png",
        "img/tur3.png",
        "img/tur4.png",
        "img/tur5.png"
      );
      mario_collided = loadAnimation("img/dead.png");

      dieSound = loadSound("sounds/dieSound.mp3");

      restartImg = loadImage("img/restart.png");
  }
  function setup() {
    createCanvas(1000, 625);
    bg = createSprite(600, 300, 150, 50);
    mario = createSprite(200, 520, 150, 50);
    bg.addImage(bgImage);
    mario.addAnimation("running", mario_running);
    bg.scale = 0.5;
    mario.scale = 0.2;
    ground = createSprite(200, 580, 400, 10);
    bricksGroup = new Group();
    coinsGroup = new Group();
    obstaclesGroup = new Group();

    mario.addAnimation("collided", mario_collided);
  
    restart = createSprite(500, 300);
    restart.addImage(restartImg);
    restart.visible = false
  }
  function draw() {
    drawSprites();

    if (gameState == "PLAY") {
    bg.velocityX = -5;
    if (bg.x < 100) bg.x = bg.width / 4;
    if (keyDown("space")) mario.velocityY = -10;
    mario.velocityY = mario.velocityY + 0.5;
    mario.collide(ground);
    ground.visible = false;
    generateBricks();

  for (var i = 0; i < bricksGroup.length; i++) {
    var temp = bricksGroup.get(i);
    if (mario.isTouching(temp)) {
      mario.collide(temp);
    }
  }
  if (mario.x < 200) {
    mario.x = 200;
  }
  if (mario.y < 50) {
    mario.y = 50;
  }
  generateCoins();

  for (var i = 0; i < coinsGroup.length; i++) {
    var temp = coinsGroup.get(i);
    if (mario.isTouching(temp)) {
      temp.destroy();
      coinSound.play();
      coinScore++;
      temp = null;
    }
  }
  generateObstacles();
    if (obstaclesGroup.isTouching(mario)) {
      dieSound.play();
      gameState = "END";
    }
  } 
  
  else if (gameState === "END") {
    bg.velocityX = 0;
    mario.velocityY = 0;
    mario.velocityX = 0;

    obstaclesGroup.setVelocityXEach(0);
    coinsGroup.setVelocityXEach(0);
    bricksGroup.setVelocityXEach(0);

    bricksGroup.setLifetimeEach(-1);
    coinsGroup.setLifetimeEach(-1);
    obstaclesGroup.setLifetimeEach(-1);

    mario.changeAnimation("collided", mario_collided);
    mario.y = 570;
    mario.scale = 0.4;

    restart.visible = true;
    if (mousePressedOver(restart)) {
      restartGame();
    }
  }
    textSize(20);
    fill("brown");
    text("Coins Collected: " + coinScore, 500, 50);
}
  function generateBricks() {
    if (frameCount % 80 == 0) {
      console.log(frameCount);
  
      var brick = createSprite(1200, 100, 40, 10);
      brick.y = random(50, 450);
      brick.addImage(brickImage);
      brick.scale = 0.5;
      brick.velocityX = -5;
      brick.lifetime = 250;
      bricksGroup.add(brick);
    }
  }
  function generateCoins() {
    if (frameCount % 50 == 0) {
      var coin = createSprite(1200, 100, 40, 10);
      coin.y = random(50, 450);
      coin.addAnimation("rotate", coinImage);
      coin.scale = 0.1;
      coin.velocityX = -5;
      coin.lifetime = 250;
      coinsGroup.add(coin);
    }
  }
  
function generateObstacles() {
    if (frameCount % 100 === 0) {
      var obstacle = createSprite(1200, 555, 10, 40);
      obstacle.velocityX = -5;
      obstacle.scale = 0.1;
      var rand = Math.round(random(1, 2));
      switch (rand) {
        case 1:
          obstacle.addAnimation("mush", mushObstacleImage);
          break;
        case 2:
          obstacle.addAnimation("turtle", turtleObstacleImage);
          break;
        default:
          break;
      }
      obstacle.lifetime = 300;
      obstaclesGroup.add(obstacle);
    }
  }
  function restartGame() {
    gameState = "PLAY";
  
    obstaclesGroup.destroyEach();
    bricksGroup.destroyEach();
    coinsGroup.destroyEach();
  
    mario.changeAnimation("running", mario_running);
    mario.scale = 0.2;
  
    coinScore = 0;
  
    restart.visible = false;
}