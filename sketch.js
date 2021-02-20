var string="62a%"
console.log(string);
var num=73
console.log(num);
var bool=true;
console.log(bool);
var object
console.log(object);
object=null;
console.log(object);
var array=[1,2,3,4,5];
console.log(array[2]);
var arr2=["name",34,false,null];
console.log(arr2[0]);
var arr3=[[1,2],[2,3],["sdf"]];
console.log(arr3[1][1]);
array.push(98)
console.log(array);
arr2.pop()
console.log(arr2);  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block20,block11,block12,block13,block14,block15,block16,block17,
block18,block19,block20,block21,block22,block23,block24,block25,ground,stand1,stand2,polygon,polygon_image,block26,block27,block28,block29,block30;

var block31,block32,block33,sling;

function preload(){
  polygon_image=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,1400);
    engine = Engine.create();
    world = engine.world;
    stand1=new Ground(900,200,210,20);
    stand1.shapeColor="brown";
    stand2=new Ground(640,500,210,20);
    stand2.shapeColor="brown";

    block8=new BlueBlock(620,350,30,40);
    //block8.shapeColor="blue";
    block1=new BlueBlock(550,470,30,40);
    //block1.shapeColor="blue";
    block2=new BlueBlock(580,470,30,40);
    //block1.shapeColor="blue";
    block3=new BlueBlock(610,470,30,40);
   // block1.shapeColor="blue";
    block4=new BlueBlock(640,470,30,40);
  //  block1.shapeColor="blue";
    block5=new BlueBlock(670,470,30,40);
//    block1.shapeColor="blue";
    block6=new BlueBlock(700,470,30,40);
  //  block1.shapeColor="blue";
    block7=new BlueBlock(730,470,30,40);
    //block1.shapeColor="blue";
    block9=new PinkBlock(590,430,30,40);
    block9.shapeColor="pink";

    block10=new PinkBlock(620,430,30,40);

    block11=new PinkBlock(560,430,30,40);

    block12=new PinkBlock(650,430,30,40);

    block13=new PinkBlock(680,430,30,40);

    block14=new PinkBlock(710,430,30,40);

    block15=new YellowBlock(570,390,30,40);

    block16=new YellowBlock(600,390,30,40);

    block17=new YellowBlock(630,390,30,40);

    block18=new YellowBlock(660,390,30,40);

    block19=new YellowBlock(690,390,30,40);

    block20=new BlueBlock(590,350,30,40);

    block21=new BlueBlock(650,350,30,40);

    block22=new BlueBlock(680,350,30,40);

    block23=new BlackBlock(630,310,30,40);

    block24=new PinkBlock(840,170,30,40);

    block25=new PinkBlock(870,170,30,40);

    block26=new PinkBlock(900,170,30,40);

    block27=new PinkBlock(930,170,30,40);

    block28=new GreenBlock(855,130,30,40);

    block29=new GreenBlock(885,130,30,40);

    block30=new GreenBlock(913,130,30,40);

    block31=new BlueBlock(870,90,30,40);

    block32=new BlueBlock(900,90,30,40);

    block33=new YellowBlock(885,50,30,40);

    //polygon=new Hexagon(200,300,60,60);

    polygon = Bodies.circle(50,200,20); 
    World.add(world,polygon);

    sling=new SlingShot(this.polygon,{x:200,y:250});
   
}

function draw(){
    Engine.update(engine);
background("white");
stand1.display();
block8.display();
block9.display();
block7.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
stand2.display();
block26.display();
block27.display();
block28.display();
block29.display();
block30.display();
block31.display();
block32.display();
block33.display();
sling.display();


fill("gold");
imageMode(CENTER);
image(polygon_image ,polygon.position.x,polygon.position.y,40,40);

    drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
 
  sling.fly();
}

function detectCollision(lblock8, lblock9){
block8Bodyposition=lblock8.body.position;
block9Bodyposition=lblock9.body.posiiton;

var distance=dist(block8Bodyposition.x,block8Bodyposition.y,block9Bodyposition.x,block9Bodyposition.y);

if(distance<=lblock8.r+lblock9.r){
  Matter.Body.setStatic=(lblock8.body,false);
}
}


