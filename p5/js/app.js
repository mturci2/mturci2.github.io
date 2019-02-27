
var hue;

var canvas;
var c;

function setup() {
 	canvas = createCanvas(900,500);
 	canvas.position(windowWidth/5, 70);
 	background(255, 234, 206);
 	hue = 0;
 	c = color(0);
}
 
function draw()
{


}
 
function mouseDragged() 
{ 
	strokeWeight(10);
	stroke(c);
	line(mouseY, mouseX, pmouseY, pmouseX);
}
 


function keyPressed()
{
	if(key == 'r' || key == 'R')
	{
		c = color(106,255, 0);
	}

	if(key == 'g' || key == 'G')
	{
		c = color(255,0, 0);
	}

	if(key == 'o' || key == 'O')
	{
		c = color(0,72,255);
	}
	if(key == 'b' || key == 'b')
	{
		c = color(255, 127, 0);
	}
}