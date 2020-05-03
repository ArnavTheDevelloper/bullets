

var wall,bullet

var thickness,speed,weight

function setup(){

createCanvas(1300, 400);

thickness=random(22,83);
speed=random(223,321);
weight=random(30,52);

wall=createSprite(1200,200,thickness,height/2)
wall.shapecolor="white";

bullet=createSprite(200,200,30,15)
bullet.shapecolor="red"


}

function draw(){

var damage=0.5*bulletweight*bulletspeed*bulletspeed/thicknessofwall*thicknessofwall*thicknessofwall;

if(bullet.istouching(wall)){

bullet.velocityX=0;

}

if(damage=3.68){

wall.shapecolor="green";

}

if(damage=12.43){

	wall.shapecolor="red";
	
	}
	

	drawSprites;
}