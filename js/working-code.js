
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// set width and height for cat variable

var cat = {
  x: 600,
  y: 500
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
  ctx.drawImage(catImage,cat.x,cat.y)
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
  
 
// 
  function cupcakeCollision() {
    cupCakesArray.forEach(function(cupcake) {
      if (Math.abs(cupcake.y - cat.y) <= 15 && Math.abs(cupcake.x - cat.x) <= 15) {
        alert("hit the cupcake!");
        }
      })
}

  function shardCollision() {
    shardsArray.forEach(function(shard) {

      if(Math.abs(shard.y - cat.y) <= 10 && Math.abs(shard.x - cat.x) <= 40) {
        // console.log("blahhh");
        alert("game over");
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


