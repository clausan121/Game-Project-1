var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// var Scoreboard = new Scoreboard;
// var addFunction = Scoreboard.addPoint;

var cat = {
  x: 600,
  y: 500
}

// var ScoreBoard = function (currentScore) {
//   this.currentScore = currentScore;
//   console.log('ScoreBoard created');
// };

// ScoreBoard.prototype.addPoint = function() {
//   console.log(this.currentScore = this.currentScore + 1);
// };


updateCanvas(); 


var canvasWidth = 1500;
var canvasHeight = 1200;
canvas.width = canvasWidth;
canvas.height = canvasHeight; // need this for the canvas to show full

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
  

  function cupcakeCollision() {
  cupCakesArray.forEach(function(cupcake) {
  if (Math.abs(cupcake.y - cat.y)<= 15 && Math.abs(cupcake.x - cat.x)<= 15) {
    // this.currentScore += 1;
    // alert("win");
    }
    });


  };

  function shardCollision() {
    shardsArray.forEach(function(shard) {
    // for(var i = 0; i < shardsArray.length; i++) {
    
      // console.log("checking collision")
      if(Math.abs(shard.y - cat.y) <= 15 && Math.abs(shard.x - cat.x) <= 15) {
        console.log("-------------------collision");
        // this.currentScore -= 1;
        // alert("lose");
      }
    });

    
  };
  
  
  
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
  // do not remove


