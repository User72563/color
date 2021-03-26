var a
var b
function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  b=createSprite(400,300,50,50)
  a.shapeColor = "lime"
  b.shapeColor= "lime"
}

function draw() {
  background(255,255,255);  
  b.x = World.mouseX;
  b.y = World.mouseY
  if(b.x-a.x<a.width/2+b.width/2
    && a.x-b.x<a.width/2+b.width/2&&a.y-b.y<a.height/2+b.height/2
    &&b.y-a.y<b.height/2+a.height/2){
    a.shapeColor = "red"
    b.shapeColor= "red"
  }
  else{
    a.shapeColor = "lime"
    b.shapeColor= "lime"
  }
  drawSprites();
}