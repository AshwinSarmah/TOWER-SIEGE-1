const Engine = Matter.Engine;
const World = Matter.World;
const Bodies  = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var hexagon, slingShot;
var ground;

//function preload{
   // hexagonImg = loadImage("hexagon.png");
//}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    hexagon = new Box2(100, 300, 70, 20);

    slingshot = new SlingShot(hexagon.body,{x:200, y:100});
   
    ground = new Ground(600,300,1200,20);
    
    box1 = new Box(330+200,235,30,40);
    box2 = new Box(360+200,235,30,40);
    box3 = new Box(390+200,235,30,40);
    box4 = new Box(420+200,235,30,40);
    box5 = new Box(450+200,235,30,40);

    box6 = new Box(360+200,195,30,40);
    box7 = new Box(390+200,195,30,40);
    box8 = new Box(420+200,195,30,40);

    box9 = new Box(390+200,155,30,40);

    
}

function draw(){
    background("black");
    Engine.update(engine);
    
    
    ground.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();

    box9.display();

    hexagon.display();
    slingshot.display();
    
}


function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot = new SlingShot(this.hexagon,{x:200, y:50});
    }
}