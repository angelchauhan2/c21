//namespacing engine, world and bodies
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
// creating variables
let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var btn1, btn2;

function setup() {
  createCanvas(400,400);
  //creating engine and adding world
  engine = Engine.create();
  world = engine.world;
  // creating btn1, setting its postion,size and applying hforce to it
  btn1= createImg("right.png")
btn1.position(220,30)
btn1.size(50,50)
btn1.mouseClicked(hForce)
// creating btn2, setting its positon, size and applying vforce to it
btn2= createImg("up.png")
btn2.position(20,30)
btn2.size(50,50)
btn2.mouseClicked(vForce)
// created four walls
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
// creating ball
  var ball_options={
    restitution:0.95

  }

  ball= Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  // displaying ball body, ground,walls
  ellipse(ball.position.x,ball.position.y,20)
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  // engine is updated
  Engine.update(engine);



}

function hForce(){
 Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})

}

function vForce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})

}

