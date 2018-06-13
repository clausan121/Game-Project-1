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

// need this for the canvas to show full

var canvasWidth = 1500;
var canvasHeight = 1200;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

var catImage = new Image();
catImage.src = './images/cat.png'; //need this to show image

// function updateFrame() {
// } //need this to draw cat


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
      alert("cupcake hit!!!!")
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
      alert("Done!")
    }
  });
}
  
 // do not remove


function updateCanvas(){
  setInterval(function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCat();
    drawAllTheCupcakes();
    drawAllTheShards();
    shardCollision();
    cupcakeCollision();
  },100)
}