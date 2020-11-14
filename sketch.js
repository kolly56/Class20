var fixedrect,movingrect;


function setup() {
  createCanvas(800,400);

fixedrect=createSprite(150, 80, 100, 50);    
fixedrect.shapeColor="skyblue";
movingrect=createSprite(250,70,50,100);
movingrect.shapeColor="pink";
}

function draw() {
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  console.log(movingrect.x-fixedrect.x);
  background(0);  

if((fixedrect.x-movingrect.x<=fixedrect.width/2+movingrect.width/2)&&
    (movingrect.x-fixedrect.x<=fixedrect.width/2+movingrect.width/2)&&
    (fixedrect.y-movingrect.y<=fixedrect.height/2+movingrect.height/2)&&
    (movingrect.y-fixedrect.y<=fixedrect.height/2+movingrect.height/2))

{
  fixedrect.shapeColor="red";
  movingrect.shapeColor="red";
}
else
{
  fixedrect.shapeColor="skyblue";
  movingrect.shapeColor="pink";
}

  drawSprites();
}

// fixedrect.x=150
//movingrect.x=250
//fixedrect.width=100
//movingrect.width=50
//fixedrect.width/2+movingrect.width/2=75

//movingrect.x-fixedrect.x=100