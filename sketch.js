const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,slingshot;
function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    polygon=new Polygon(200,300,40,40);
    slingshot=new Chain(polygon.body,{x:100,y:200})
    ground1=new Ground(390,300,250,10);
    //base row
    block1=new Block(300,275);
    block2=new Block(330,275);
    block3=new Block(360,275);
    block4=new Block(390,275);
    block5=new Block(420,275);
    block6=new Block(450,275);
    block7=new Block(470,275);
    //first row
    block8=new Block(330,235);
    block9=new Block(360,235);
    block10=new Block(390,235);
    block11=new Block(420,235);
    block12=new Block(450,235);
    //second row
    block13=new Block(360,195);
    block14=new Block(390,195);
    block15=new Block(420,195);
    //top row
    block16=new Block(390,155);
}

    
   

function draw(){
  background("brown");
    Engine.update(engine);
    strokeWeight(4);
    polygon.display();
    ground1.display();
    fill("green")
    slingshot.display();
    fill(rgb(0, 0, 128))
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("blue")
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("cyan")
    block13.display();
    block14.display();
    block15.display();
    fill("white")
    block16.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingshot.detached();
}
