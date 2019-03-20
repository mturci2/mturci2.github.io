
var canvas;
var button;
var angryBear;
var eraser;
var partyBear;
var confetti;
var groceryBear;
var fishingBear;
var sleepyBear;



//screen text
var title;
var firstOption;
var secondOption;

//input variables
var slider;



//var growingPlanetBool = false;

function preload(){}

function setup (){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('z-index', '-1');
	background(243,204,185);
	beginning();

	button = createButton("Enter");
    button.mousePressed(startStory);}

function draw(){
}


function beginning(){
	greeting = createP("Hello. Press Enter.");}


function startStory(){
	greeting.hide();
	button.hide();
	
	title= createElement('p','Which life do you choose?');

	//create link wants two arguments:where to link and text
	//#: links to itself
	firstOption= createA("#","Option A");
	createElement('br');
	secondOption=createA("#","Option B")

	//check & trigger if user clicked
	firstOption.mousePressed(optionA);
	secondOption.mousePressed(optionB);}

//end game
function optionA(){
	firstOption.hide();
	secondOption.hide();

//change the text for title
	title.html("You chose eraser. You fulfilled your purpose.");
	easer = createImg("eraser.png");

	startOver = createA("index.html", "Start Over")
	firstOption.mousePressed(startOver);}

function optionB(){
	background(0);

	title.html('You chose bear. Bear is very angry. What do you do?');

	createElement('br');
	angryBear=createImg("angryBear.gif");
	createElement('br');

	firstOption.html("Party the anger out");
	secondOption.html("Get groceries you're hangry");

	firstOption.mousePressed(party);
	secondOption.mousePressed(groceries);}

function party(){
	background(243,204,185);
	angryBear.hide();

	title.html('Bear had a good time. Now Bear is pooped out, what next');
	confetti=createImg("confetti.gif");
		createElement('br');
	partyBear=createImg("partyBear.png");
		createElement('br');

	firstOption.html("Go fishing");
	secondOption.html("Go to bed");	
	firstOption.mousePressed(fishing);
	secondOption.mousePressed(pBed);
}

function groceries(){
	background(243,204,185);
	//firstOption.hide();
	secondOption.hide();
	angryBear.hide();

	title.html('Wow lots of groceries, now Bear wont be hangry.');
		createElement('br');
	groceryBear=createImg("groceryBear.png");

		createElement('br');
	title.html('Now what?');

	firstOption.html("Go to bed");
	firstOption.mousePressed(gBed);

}

function fishing(){
	background(243,204,185);
	partyBear.hide();
	confetti.hide();
	firstOption.hide();
	secondOption.hide();

	title.html('Bear caught a fish. How big was it');
		createElement('br');
	fishingBear=createImg("fishingBear.png");
	fishy=createImg("fishy.gif");

		createElement('br');
	title.html('Now what?');

	startOver = createA("index.html", "Start Over")
	firstOption.mousePressed(startOver)
}

function gBed(){
	background(243,204,185);
	//partyBear.hide();
	groceryBear.hide();
	//fishingBear.hide();
	firstOption.hide();
	//secondOption.hide();
	//confetti.hide();

//change the text for title
	title.html("Time for bed. It was a gooood day");
	sleepyBear = createImg("sleepyBear.png");

	startOver = createA("index.html", "Start Over")
	firstOption.mousePressed(startOver);}

	function pBed(){
	background(243,204,185);
	partyBear.hide();
	//groceryBear.hide();
	//fishingBear.hide();
	firstOption.hide();
	secondOption.hide();
	confetti.hide();

//change the text for title
	title.html("Time for bed. It was a gooood day");
	sleepyBear = createImg("sleepyBear.png");

	startOver = createA("index.html", "Start Over")
	firstOption.mousePressed(startOver);}
