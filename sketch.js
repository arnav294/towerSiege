
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var g1,g2;
var box1,box2,box3,box4,box5,box6,box7,
box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,
box18,box19,box20,box21,box22,box23;

var polygon,sticky;
var count = 0

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  g1 = new Ground(1000,200,400,20)
  g2 = new Ground(500,400,400,20);
  box1 = new Box(500,390,60,60)
  box2 = new Box(480,390,60,60);
  box3 = new Box(490,390,60,60);
  box4 = new Box(470,390,60,60);
  box5 = new Box(530,390,60,60);


  box6 = new Box(480,350,60,60);
  box7 = new Box(500,350,60,60);
  box8 = new Box(490,350,60,60);
  box9 = new Box(470,350,60,60);
  box10 = new Box(530,350,60,60);


  box11 = new Box2(530,300,60,60);
  box12 = new Box2(500,300,60,60);
  box13 = new Box2(490,300,60,60);
  box14 = new Box2(480,300,60,60);
  box15 = new Box2(470,300,60,60);


  box16 = new Box2(530,250,60,60);
  box17 = new Box2(500,250,60,60);
  box18 = new Box2(490,250,60,60);
  box19 = new Box2(480,250,60,60);
  box20 = new Box2(470,250,60,60);

  box21 = new Box3(420,200,60,60);
  box22 = new Box3(490,200,60,60);
  box23 = new Box3(580,200,60,60);

 polygon = new Hexagon(200,400,70,70)

sticky = new StickyObj(bodyA = polygon.body,pointb = {x:170,y:360})



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");

  textSize(20)
  text("tries : "+count,200,300)

  
  g1.display();

  g2.display();

  box1.display();
  box2.display();
  box3.display()
  box4.display()
  box5.display();


  box6.display();
  box7.display();
  box8.display()
  box9.display()
  box10.display();

  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();

  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  box21.display();
  box22.display();
  box23.display();


  polygon.display()
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sticky.fly()
}
function keyPressed()
{
  if(keyCode===32)
  {
    
    sticky.attach(polygon.body);
    count = count+1
  }
}

