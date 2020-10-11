//1.Declaration of Physics Engine.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


//2.Local objects creation.
var engine, world, ground;
var ball;

function setup() {
  var canvas = createCanvas(400,400);

  //2.Giving values / duties to local objects.
  engine = Engine.create();
  world = engine.world;
  
  //3.Defining the properties of components. 
  


  //4.Creating ground component from the Bodies.
  ground = new Ground(200,390,200,20);

  
  

  //ball:bodies
  ball = new Ball(200,100,20,20);


}

function draw() {
  background(0);

  //2.Updating the physics engine as per local object.
  Engine.update(engine);
  
  //6.Writing the display command.
  ground.display();
  //ball:display.
  ball.display();
}