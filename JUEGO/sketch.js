var a,b,c;
var pc;

var casita;
var mc;

function preload(){
  casita = loadImage ("casita.jpeg");
  mc = loadImage ("mc.png");
}

function setup(){
createCanvas (600,600);
a = createSprite(250,250,20,100);
b = createSprite(250,200,100,20);
c = createSprite(250,50,20,100);

pc = createSprite(100,100,10,10);
pc.addImage(mc);
pc.scale = 0.3;

}

function draw(){
background("white");
image(casita,0,0,2000,1000);

if(keyDown(RIGHT_ARROW)){
  pc.x+=2;
}
if(keyDown(LEFT_ARROW)){
  pc.x-=2;
}
if(keyDown(UP_ARROW)){
  pc.y-=2;
}
if(keyDown(DOWN_ARROW)){
  pc.y+=2;
}
camera.position.x = pc.x;
camera.position.y = pc.y;
drawSprites();
}