var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var x = 600; //kitty's starting point
var y = 500;  

updateCanvas(); 


var canvasWidth = 1500;
var canvasHeight = 1200;
canvas.width = canvasWidth;
canvas.height = canvasHeight; // need this for the canvas to show full


var catImage = new Image();
catImage.src = './images/cat.png'; //need this to show image

function updateFrame() {

} //need this to draw cat




// control movement
function drawCat(){
  ctx.drawImage(catImage,x,y)
}

function checkCollision(obstacle){
  if((obstacle.y + (obstacle.height - halfOfYourObstacleHeight) >= y && obstacle.y <= y + theMainCharacter.height)
  &&(obstacle.x + obstacle.width>= theMainCharacter.x &&obstacle.x <= theMainCharacter.x+theMainCharacter.width)){

    console.log("crash");
      //here you'll put the logic of getting points or losing lives, whichever your game has 
  }}
  checkCollision(thesugarShard);

function updateCanvas(){
  setInterval(function(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  drawCat();
  drawAllTheCupcakes();
  drawAllTheShards();
  },100)


}


document.onkeydown = function (e) {
  console.log("working moving!!!!");
  if (e.which === 38){
  y = y - 20;
}
else if (e.which === 40)
{
  y = y + 20;
}
else if (e.which === 37){
  x = x - 20;
}
else if (e.which === 39){
  x = x + 20;
}


}; // do not remove
