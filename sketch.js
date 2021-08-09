
var player
var animals
var lifeShow
var gameState = 0
function preload(){
  bg = loadImage("img/bg.png")
}
function setup(){
  createCanvas(1160,550)
player = createSprite(width/2-400,height/2)
lifeShow = createSprite(55,55)
animals = new Group();
}

function draw(){
  background(bg); 
  animalcome()
  if(gameState===0){
  textFont('italic')
  textSize(20)
  fill("yellow")
  stroke("red")
  text("HUNTER",120,25)
  }
if(animals.isTouching(player)){
  gameState=1
}
if(gameState===1){
animals.destroyEach()
player.visible = false
textFont('italic')
textSize(100)
fill("yellow")
stroke("red")
text("THE END",width/2,height/2)
}

    drawSprites();
}

function animalcome() {
  if(frameCount % 60 === 0) {
    var animal = createSprite(width+50,random(height/2-50,height/2+50),20,30);
    animal.setCollider('circle',0,0,45)
    // obstacle.debug = true
  animal.shapeColor="white"
   animal.velocityX = -5
    
    //generate random obstacles
  /*  var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      default: break;
    }*/
    
    //assign scale and lifetime to the obstacle           
   
    animal.lifetime = 300;
   animal.depth = player.depth;
    
    //add each obstacle to the group
   animals.add(animal);
    
  }
}

