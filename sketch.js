const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImg;
var ground,ground2;
var hero;
var rope;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11;
var enemy;

function preload() {
//preload the images here
backgroundImg = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(1500, 700);
  engine = Engine.create();
    world = engine.world;
  // create sprites here
  ground = new Ground(750,690,1500,10);
  ground2 = new Ground(550,630,150,10);
  hero = new Hero(300,600,60);
  rope = new Fly(hero.body,{x: 300, y: 300});
  block1 = new Box(500,640,50,50);
  block2 = new Box(500,590,50,50);
  block3 = new Box(500,550,50,50);
  block4 = new Box(500,490,50,50);
  block5 = new Box(550,640,50,50);
  block6 = new Box(550,590,50,50);
  block7 = new Box(550,550,50,50);
  block8 = new Box(600,640,50,50);
  block9 = new Box(600,590,50,50);
  block10 = new Box(600,540,50,50);
  block11 = new Box(600,490,50,50);
  enemy = new Enemy(1400,400,80);

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
   ground.display();
   ground2.display();
   hero.display();
   //rope.display();
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   enemy.display();

   
}

function mouseDragged(){
    Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rope.fly();

}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(hero.body, {x: 300 , y: 300});
      rope.attach(hero.body);
  }
}