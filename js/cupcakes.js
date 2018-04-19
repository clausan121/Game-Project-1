// game variables
var startingScore = 0;
var continueAnimating = false;
var score;




// cupcake variables
var cupCakeWidth = 15;
var cupCakeHeight = 15;
var totalCupcakes = 10;
var cupcakeImage = new Image();
cupcakeImage.src = "./images/cupcake.png";
var cupCakes = [];
for (var i = 0; i < totalCupcakes; i++) {
    addcupCakes();
}

function addcupCakes() {
    var cupCakes = {
        width: cupCakeWidth,
        height: cupCakeHeight
    }
    resetcupCakes(cupCakes);
    cupCakes.push(cupCakes);
}

// move the cupcake to a random position near the top-of-canvas
// assign the rock a random speed
function resetcupCakes(cupCakes) {
    cupCakes.x = Math.random() * (canvas.width - cupCakeWidth);
    cupCakes.y = 15 + Math.random() * 30;
    cupCakes.speed = 0.2 + Math.random() * 0.5;
}



function animate() {

    // request another animation frame

    if (continueAnimating) {
        requestAnimationFrame(animate);
    }

    // for each cupcake
    // (1) check for collisions
    // (2) advance the rock
    // (3) if the rock falls below the canvas, reset that rock

    for (var i = 0; i < cupCakes.length; i++) {

        var cupCakes = cupCakes[i];

        // test for cupcake-cat collision
        if (isColliding(cupCakes, kittyCat )) {
            score += 10;
            resetcupCakes(cupCakes);
        }

        // advance the rocks
        cupCakes.y += cupCakes.speed;

        // if the rock is below the canvas,
        if (cupCakes.y > canvas.height) {
            resetcupCakes(cupCakes);
        }

    }

    // redraw everything
    drawAll();

}

function isColliding(a, b) {
    return !(
    b.x > a.x + a.width || b.x + b.width < a.x || b.y > a.y + a.height || b.y + b.height < a.y);
}

function drawAll() {



    // draw all rocks
    for (var i = 0; i < cupCakes.length; i++) {
        var cupCakes = cupCakes[i];
        
        drawImage(cupcakeImage,cupCakes.x,cupCakes.y)


  
    }
  }