
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dusbin1, dusbin2, dusbin3;
var paper1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dusbin1= new Dusbin(600,600,200,20);

	paper1=new Paper(300,350);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  
  dusbin1.display();
  paper1.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(Paper.body,Paper.body.position, {x:85,y:-85})
	}
}






