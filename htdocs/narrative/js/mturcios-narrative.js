
var canvas;

var name;
var userName;

//screen text
var title;
var firstOption;
var secondOption;

//input variables
var slider;
var greeting;
var nameInput;

var startOver;

var angryBear.gif;

var growingPlanetBool = false;

function preload(){
}

function setup (){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('z-index', '-1');
	background(120);
	beginning();
}

function draw(){
	background(120);
	if (startStoryBool ==true){
		growingPlanet();
	}
}

/////////////////////////
//SCENE START FUNCTIONS//
/////////////////////////


//title page
function beginning(){
	background(0);
	
	dancingBaby = createImg("dancingBaby.gif");
	 babySlider = createSlider(50, 600, 150);
	greeting = createP("Please type your name and press enter");
	nameInput = createInput();

	//check and see if the user pressed enter
	//then trigger startStory function
	nameInput.changed(startStory);
}

//FIRST PART, CHOOSING THE PATH
function startStory(){
	greeting.hide();
	nameInput.hide();
	userName = createElement('h1', nameInput.value());
	title= createElement('Which life do you choose?');

	//create link wants two arguments:where to link and text
	//#: links to itself
	firstOption= createA("#","walk sideways");
	createElement('br');
	secondOption=createA("#","walk towards the clouds")

	//check & trigger if user clicked
	firstOption.mousePressed(walkSideways);
	secondOption.mousePressed(walkToClouds);


//end game
function A(){
	background(200);
	firstOption.hide();
	secondOption.hide();
	name.hide();
//change the text for title
	title.html("You chose eraser. You fufilled your purpose");
	
	firstOption.html("startover");
	firstOption.mousePressed(beginning);
}

function B(){
	background(160);
	userName.hide();
	title.html("You chose bear. Bear is very angry. What do you do");

	firstOption.html("Party the anger out");
	secondOption.html("Shop for groceries");

	firstOption.mousePressed(closerToClouds);
	secondOption.mousePressed(planetElements);

}

function closerToClouds(){
	firstOption.hide();
	secondOption.hide();

	title.html(nameInput.value()+', drifting towards the sun');

}

function planetElements(){

	slider = createSlider(0,255,0);
	title.html(nameInput.value() + ", control the size of the planet");
	growingPlanetBool = true;
}

/////////////////////////
//ANIMATED FUNCTIONS//
/////////////////////////
function growingPlanet(){

	background(120);
	//slider requires 2 arguments min
	//min vlaue, max value. third is starting value
	
	print(slider.value());
	fill(slider.value());
	ellipse(400,400,slider,value,slider(),value());
}


function windowResized(){
	canvas = createCanvas (windowWidth, windowHeight);
	background(0);
}