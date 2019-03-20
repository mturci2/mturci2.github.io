var canvas;


//runs once
function setup() {
	canvas = createCanvas(windowWidth,windowHeight);
	background(255,200,70);
}


//runs 30fps, so updates
function draw() {
	fill(255, 207, 196);
	strokeWeight(10);
	stroke(255,0,0);


	//x, y, width, height
	ellipse(100,450,mouseX,mouseY);

	ellipse(700,600,400,400);
	// top-left = 20, top-right = 15, bottom-right = 10, bottom-left = 5.
	rect(130, 220, 55, 55, 20, 15, 10, 5);

	// Draw a rectangle with rounded corners, each having a radius of 20.
	rect(430, 320, 55, 55, 20);

	// Draw a rectangle at location (30, 20) with a width and height of 55.
	rect(310, 120, 55, 55);

	//x1,y1,x2,y2
	line(20,60,600,300);


	fill(242, 141, 118);
	//x1,y1,x2,y2,x3,y3
	triangle(30, 75, 58, 20, 86, 75);

	arc(50, 550, 80, 80, 0, PI + QUARTER_PI, OPEN);

	//print(mouseX);



	}

function windowResized(){
	canvas = createCanvas(windowWidth, windowHeight);
	background(255,200,70);
}


