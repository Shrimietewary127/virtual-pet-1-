//Create variables here
var happyDog, foodS, foodStock, database, dog
function preload()
{
  //load images here
  happyDog= loadImage("images/dogImg1.png");
  dogImg=loadImage("images/dogImg.png")
}

function setup() {
  database=firebase.database();

  createCanvas(500, 500);

  dog= createSprite(200,200,20,20);
  dog.addImage(happyDog);
  dog.scale = 0.2;
  

  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){

    writeStock(foodS);
    
    dog.addImage(dogImg)

  }





  drawSprites();
  //add styles here
  
}

function readStock(data){
foodS=data.val();

}

function writeStock(stockValue){

database.ref('/').update({
Food:stockValue

});


}
