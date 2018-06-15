var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// set width and height for cat variable

var cat = {
  x: 600,
  y: 500,
  width: 150,
  height:150
}


updateCanvas(); 

// sets height and width of canvas

var canvasWidth = 1500;
var canvasHeight = 1200;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

// scoring functionality, Calling $('#id') will return a jQuery object that wraps the DOM object and provides jQuery methods., .html is A function returning the HTML content to set and returns as String

var score = 0;
function ShowScore(){
  $(".score").html(score);

}
function AddPoints(pointsToAdd){
  score += pointsToAdd;
}
function LosePoints(pointsLost){
  score -= pointsLost;
}

// if (score < 0){
//   alert("Game Over");
// }

// sets the cat's image
var catImage = new Image();
catImage.src = './images/cat.png';


// draws cat 

function drawCat(){
  ctx.drawImage(catImage,cat.x,cat.y, cat.width, cat.height)
}


// controls movement
document.onkeydown = function (e) {
  console.log("working moving!!!!");
  if (e.which === 38){
    cat.y -= 20;
  }
  else if (e.which === 40)
  {
    cat.y += 20;
  }
  else if (e.which === 37){
    cat.x -= 20;
  }
  else if (e.which === 39){
    cat.x += 20;
  }
}
  
 // collision detection, set y property to any number greater than 1000 in order to make the object disappear

function cupcakeCollision() {
  cupCakesArray.forEach(function(cupcake) {
    let catLeft = cat.x;
    let catRight = cat.x + cat.width/2;
    let catTop = cat.y;
    let catBottom = cat.y + cat.height/2;
    let cupcakeLeft = cupcake.x;
    let cupcakeRight = cupcake.x + cupcake.width/2;
    let cupcakeTop = cupcake.y;
    let cupcakeBottom = cupcake.y + cupcake.height;
    if(catLeft <= cupcakeRight && cupcakeLeft <= catRight && catBottom <= cupcakeBottom  && cupcakeTop <= catBottom){
      cupcake.y = 1444;
      AddPoints(10);
    }
    })
}

function shardCollision() {
  shardsArray.forEach(function(shard) {
    let catLeft = cat.x;
    let catRight = cat.x + cat.width/2;
    let catTop = cat.y;
    let catBottom = cat.y + cat.height/2;
    let shardLeft = shard.x;
    let shardRight = shard.x + shard.width/2;
    let shardTop = shard.y;
    let shardBottom = shard.y + shard.height;
    if(catLeft <= shardRight && shardLeft <= catRight && catBottom <= shardBottom  && shardTop <= catBottom){
      shard.y = 1444;
      LosePoints(10);
    }
  });
}
  
 


function updateCanvas(){
  setInterval(function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCat();
    drawAllTheCupcakes();
    drawAllTheShards();
    shardCollision();
    cupcakeCollision();
    ShowScore();
  },100)
}