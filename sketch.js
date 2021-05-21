const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var particle 
var plinkos = [];
var Divisions=[];
var divisionHeight=300;
var score =0;
var Ground
var score=0
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  Ground = new ground(width/2,height,width,20);


   for (var k = 0; k <=800; k = k + 80) {
     Divisions.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  
  textSize(20)
  fill ("yellow")
   line (50,50,500,500)
 text("Score : "+score,20,30);
 text(50,30,500);
 text(50,120,500);
 text(50,200,500);
 text(50,270,500);
 text(50,350,500);
 text(100,420,500);
 text(100,500,500);
 text(100,570,500);
 text(100,650,500);
 text(100,750,500);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
  
   for (var k = 0; k < Divisions.length; k++) {
     
     Divisions[k].display();
   }
   if(particle!=null){
    particle.display()
  if(particle.body.position.y>700){
    console.log(particle.body.position.y)
    console.log(particle.body.position.x)
      if (particle.body.position.x < 400){
        score=score+50
    particle=null
      }
  else{
    score=score+100
    particle=null
  }
    
  }
   
  }
}
function mousePressed(){
  Engine.update(engine);
particle=new Particle(mouseX,10,10,10)
//particle.display()


}