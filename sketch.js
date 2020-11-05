// name spacing
const Engine=Matter.Engine; //universe
const World=Matter.World; //planet
const Bodies=Matter.Bodies; //objects

var engine1,world1,ground,ball,ball2,ball3;

function setup() {
  createCanvas(800,400);
  engine1 = Engine.create(); //creating engine1
  world1 = engine1.world; //creating world1 inside engine 1
  var ground_options = { //properties for ground
    isStatic: true //not moving
  }
  ground = Bodies.rectangle(400,400,800,20,ground_options); //creating ground using bodies
  World.add(world1, ground); //adding the ground into world1
  var ball_options = {
    restitution: 0.8, //a time at which the body should come to rest
    density: 1.5 //how dense the object is 
  }
  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world1, ball);
  var ball2_options = {
    restitution: 0.8,
    density: 0.5
  }
  ball2 = Bodies.circle(300,200,20,ball2_options);
  World.add(world1, ball2);
  var ball3_options = {
    restitution: 0.8,
    density: 2
  }
  ball3 = Bodies.circle(500,200,20,ball3_options);
  World.add(world1, ball3);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine1); //starting the engine
  rectMode(CENTER); //changing the mode of rectangle so it takes the center point
  fill("purple");
  rect(ground.position.x,ground.position.y,800,20); 
  fill("blue");
  circle(ball.position.x, ball.position.y, 20);
  fill("green");
  circle(ball2.position.x, ball2.position.y, 20);
  fill("pink");
  circle(ball3.position.x, ball3.position.y, 20);
  drawSprites();
}