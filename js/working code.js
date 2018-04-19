var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var x = 1000; //if i change these values my cat moves on the canvas
var y = 500;  
var srcX;
var srcY;

var canvasWidth = 1200;
var canvasHeight = 1200;
canvas.width = canvasWidth;
canvas.height = canvasHeight; // need this for the canvas to show full


var catImage = new Image();
catImage.src = './images/cat.png'; //need this to show image


function updateFrame() {

} //need this to draw cat

function drawCat(x, y) {
updateFrame();
ctx.drawImage(catImage,x,y);
}  //  need this to draw cat

setInterval(function() {
  drawCat(x, y);
  }, 150 ); 




// the top two control up and down movement

document.onkeydown = function (e) {
  console.log("working moving!!!!");
  if (e.which === 38){
  ctx.clearRect(x, y, canvas.width, canvas.height);
  y = y - 10;
  ctx.drawImage(catImage,x,y)
}
else if (e.which === 40)
{
  ctx.clearRect(x,y,canvas.width, canvas.height);
  y = y + 10;
  ctx.drawImage(catImage,x,y)
}

};