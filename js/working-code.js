var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var x = 600; //kitty's starting point
var y = 500;  

updateCanvas(); 


var canvasWidth = 1500;
var canvasHeight = 1200;
canvas.width = canvasWidth;
canvas.height = canvasHeight; // need this for the canvas to show full

// var Cat = function (){
// this.y = 0;
// this.x = 0;
// this.img = '';
// }

// var cat = new Cat();
// cat.x = 500;
// cat.y = 600;
var catImage = new Image();
catImage.src = './images/cat.png'; //need this to show image

function updateFrame() {

} //need this to draw cat




// control movement
function drawCat(){
  ctx.drawImage(catImage,x,y)
}

// function checkCollision(obstacle){
//   if((obstacle.y + (obstacle.height - halfOfYourObstacleHeight) >= theMainCharacter.y && obstacle.y <= theMainCharacter.y + theMainCharacter.height)
//   &&(obstacle.x + obstacle.width>= theMainCharacter.x &&obstacle.x <= theMainCharacter.x+theMainCharacter.width)){

//     console.log("crash");
//       //here you'll put the logic of getting points or losing lives, whichever your game has 
//   }}
//   checkCollision(thesugarShard)

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



// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
// var canvasWidth = 1500;
// var canvasHeight = 1200;
// canvas.width = canvasWidth;
// canvas.height = canvasHeight; // need this for the canvas to show full



// //catImage.src = './images/cat.png'; //need this to show image

//  var Cat = function (){
//     this.x= 500;
//     this.y= 600;
//     this.width= 50;
//     this.height= 50;
//     this.img= './images/cat.png';
//  }
//  var cat = new Cat();
//  var catImage = new Image();
//  catImage.src = cat.img;
 
// //  function updateFrame() {
   
// // } //need this to draw cat



// function drawCat(){
//   catImage.onload = function(){
//   ctx.drawImage(catImage, cat.x, cat.y, cat.width, cat.height);
//    } // updateCanvas();
// }


// document.onkeydown = function (e) {
//   console.log("working moving!!!!");
//   if (e.which === 38){
//     cat.y = cat.y - 20;
//   }
//   else if (e.which === 40)
//   {
//     cat.y = cat.y + 20;
//   }
//   else if (e.which === 37){
//     cat.x = cat.x - 20;
//   }
//   else if (e.which === 39){
//     cat.x = cat.x + 20;
//   }
  
  
//   function updateCanvas(){
//     setInterval(function(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//   console.log("draw works");
  
//     drawCat();
//     drawAllTheCupcakes();
//     drawAllTheShards();
//     },100)
  
//   }
  // function checkCollision(obstacle){
      //   if((obstacle.y + (obstacle.height - halfOfYourObstacleHeight) >= theMainCharacter.y && obstacle.y <= theMainCharacter.y + theMainCharacter.height)
      //   &&(obstacle.x + obstacle.width>= theMainCharacter.x &&obstacle.x <= theMainCharacter.x+theMainCharacter.width)){
        
        //     console.log("crash");
        //       //here you'll put the logic of getting points or losing lives, whichever your game has 
        //   }}
        //   checkCollision(thesugarShard)
        
        
        
        
        
      // }; // do not remove
      