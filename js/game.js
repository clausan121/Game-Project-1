  var canvas = document.getElementById('canvas');
  // canvas.addEventListener('keydown', moveIt, true);
  var ctx = canvas.getContext('2d');
  var x = 0;
  var y = 0;
  var srcX;
  var srcY;

  var canvasWidth = 1200;
  var canvasHeight = 1200;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  var width = 1000;
  var height = 1000;

  var catImage = new Image();
  catImage.src = './images/cat.png';


function updateFrame() {
 // ctx.clearRect(x,y,width,height);
}

function drawCat(x, y) {
  updateFrame();
  // console.log('drawImage() works');
  ctx.drawImage(catImage,x/2,y/2);
}

setInterval(function() {
  drawCat(canvas.width, canvas.height);
}, 150 );

  document.onkeydown = function (e) {
    console.log("working moving!!!!");
    if (e.which === 37){
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
  else if (e.which === 37)
  {
    ctx.clearRect(x,y,canvas.width, canvas.height);
    y = x - 10;
    ctx.drawImage(catImage,x,y)
  }
  else if (e.which===39)
  {
    ctx.clearRect(x,y,canvas.width, canvas.height);
    y=x+10;
    ctx.drawImage(catImage,x,y)
  }
};

