var box1;
var box2;
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(200, 100, 100, 200, 2, 1);
  box2 = new Box(150, 50, 120, 180, 3, 2);
}

function draw() 
{
  background(220);
  box1.show();
//box1.move();
box1.moveup();
box2.show();
box2.move();

}

