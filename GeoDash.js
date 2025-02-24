/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
// Written by ???
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("");
	cnv = new Canvas(windowWidth, windowHeight);
	RECTANGLE = new Sprite(1000, 450, 50, 50,);
	RECTANGLE.color = 'Blue';
    RECTANGLE.rotationSpeed = 0.5;
    RECTANGLE.moveTowards(mouseX, mouseY, 1);
    if (mouse.presses()) {
        console.log("HELLO")
        RECTANGLE.moveTo(xPos, yPos, 2);
    }


    ball_1 = new Sprite(width/2, height/2, 50, 'd');
ball_1.color = 'cyan';
ball_1.vel.x = 2;
ball_1.bounciness = 1;
ball_1.friction = 0;
ball_1.drag = 0;

for (i = 0; i < 20; i++) {
	alien = new Sprite(width/2, height/2, 50,'d');
	alien.vel.x = 3;
	alien.vel.y = 4;
	alien.bounciness = 1;
	alien.friction = 0;
  }

   
}
/*******************************************************/
// draw()
/*******************************************************/
function draw() { 
	background('lightpink');
}
/*******************************************************/
//  END OF APP
/*******************************************************/