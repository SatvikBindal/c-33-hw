const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
//arrayss
var plinkos = [];
var particles = [];
var divisions = [];


function setup() {

createCanvas(480,800);
engine = Engine.create();
world = engine.world;

ground = new Ground(400,800,900,10);
///loops for partical
for(var d =0;d<=width;d = d+80){
  divisions.push(new DIV(d,700,10,200));
  
}  

for(var p = 0;p<=width;p=p+40){
  plinkos.push(new Plinko(p,100));
}
for(var p = 0;p<=width;p=p+60){
  plinkos.push(new Plinko(p,200));
}
for(var p = 0;p<=width;p=p+40){
  plinkos.push(new Plinko(p,300));
}
for(var p = 0;p<=width;p=p+60){
  plinkos.push(new Plinko(p,400));
}
console.log(frameCount);


Engine.run(engine);
}

function draw() {
  background("green");
  ground.display();
  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),5,5));
  }
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();

  }
  for(var j=0;j<divisions.length;j++){
    divisions[j].display();

  }
  for(var j=0;j<particles.length;j++){
    particles[j].display();
    textSize(23)
    text(" 500 ",  5, 550);
    text(" 500 ", 80, 550);
    text(" 500 ", 160, 550);
    text(" 500 ", 240, 550);
    text(" 100 ", 320, 550);
    text(" 100 ", 400, 550);
    text(" 100 ", 480, 550);
    text(" 200 ", 560, 550);
    text(" 200 ", 640, 550);
    text(" 200 ", 720, 550);
    Engine.update(engine);
    ground.display();
    
    if ( gameState =="end") {
      
      textSize(90);
      text("GameOver", 150, 300);
      //return
    }
  
    
  
    
  
    for (var i = 0; i < plinkos.length; i++) {
       plinkos[i].display();  
    }
   
      if(particle!=null)
      {
         particle.display();
          
          if (particle.body.position.y>760)
          {
                if (particle.body.position.x < 300) 
                {
                    score=score+500;      
                    particle=null;
                    if ( count>= 5) gameState ="end";                          
                }
  
  
                else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
                {
                      score = score + 100;
                      particle=null;
                      if ( count>= 5) gameState ="end";
  
                }
                else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
                {
                      score = score + 200;
                      particle=null;
                      if ( count>= 5)  gameState ="end";
  
                }      
                
          }
    
        }
  
     for (var k = 0; k < divisions.length; k++) 
     {
       divisions[k].display();
     }

  }
  

  
  drawSprites();
                                                                        
}


function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}