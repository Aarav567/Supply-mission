var copter, copterImg; //short for helicopter
var pack, packImg; // short for package
var boxbottom;
var boxside1, boxside2;


function preload(){
	copterImg = loadImage("helicopter.png");
	packImg = loadImage("package.png");
}
function setup(){
	createCanvas(800,650);

	copter = createSprite(200,200);
	copter.addImage(copterImg);
	copter.scale= 0.5;

	boxbottom = createSprite(400, 640, 120, 20);
	boxbottom.shapeColor="red";
	
	boxside1 = createSprite(350, 600, 20, 100)
	boxside1.shapeColor="red";

	boxside2 = createSprite(450, 600, 20, 100)
	boxside2.shapeColor="red";




}
function draw(){
	background("black");
	drawSprites();


	if(keyDown(RIGHT_ARROW)){
		copter.x=copter.x+30
	}
	if(keyDown(LEFT_ARROW)){
		copter.x=copter.x-30
	}
	if(keyDown("space")){
		createPackages();

	}




}

function createPackages(){
	pack = createSprite(400,250);
	pack.addImage(packImg);
	pack.scale=0.20;
	//pack.visible=false;
	pack.velocityY=15;
	pack.x=copter.x;
	pack.collide(boxbottom);
	pack.collide(boxside1);
	pack.collide(boxside2);

}