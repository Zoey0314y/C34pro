const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;


var engine,world;


function setup() {
	createCanvas(1000,700);
    

	engine = Engine.create();
	world = engine.world;

	/*var canvasMouse = Mouse.create(canvas.elt);
	canvasMouse.pixelRatio = pixelDensidy();
	var options ={
		mouse : canvasMouse

	} 

	mConstraint = MouseConstraint.create(engine, options);
	World.add(world, mConstraint);*/


	pendulum1 = new Pendulum(340,450,120,120);
	pendulum2 = new Pendulum(400,450,120,120);
	pendulum3 = new Pendulum(460,450,120,120);
	pendulum4 = new Pendulum(520,450,120,120);
	pendulum5 = new Pendulum(550,450,120,120);


	sling1 = new Sling(pendulum1.body,{x : 340, y : 200});
	sling2 = new Sling(pendulum2.body,{x : 400, y : 200});
	sling3 = new Sling(pendulum3.body,{x : 460, y : 200});
	sling4 = new Sling(pendulum4.body,{x : 520, y : 200});
	sling5 = new Sling(pendulum5.body,{x : 550, y : 200});


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(pendulum1.body,{x : mouseX, y : mouseY});

}



