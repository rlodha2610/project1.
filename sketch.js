var square;
var edges;

function setup() {
createCanvas(400,400);
square=createSprite(200,200,40,40); 

edges=createEdgeSprites();
}

 function draw() {

background('yellow');

if (keyDown("right")){
  square.x = square.x+2;
}

if (keyDown("left")){
  square.x = square.x-2;
}

if (keyDown("up")){
    square.y = square.y-2;
}

if (keyDown("down")){
  square.y = square.y+2;
}

 if(keyIsDown(DOWN_ARROW))
    {
      background('red');
    }

    if(keyIsDown(UP_ARROW))
    {
      background('red');
    }



drawSprites;
}




