// game variables
var startingScore = 0;
var continueAnimating = false;
var score;
var totalCupcakes;
var cupCakesArray = [];
var cupcakeImage = new Image();
cupcakeImage.src = "./images/cupcake.png";
infiniteCupcakes();



function infiniteCupcakes (){
    var cupcakeIndex = 0;
    setInterval(function(){
  addcupCake();
fallingCake(cupCakesArray[cupcakeIndex]);
cupcakeIndex++;
    }, 2000)
}


function addcupCake() {
    var rando = Math.floor(Math.random() * 1000); 
    var theCupCake = {y: 0, x: 0 };
    theCupCake.x = rando;
    cupCakesArray.push(theCupCake);
}


function fallingCake (cupcake){
    var id = setInterval(function(){
        cupcake.y+=8
        if(y > 1000){
            clearInterval(id)
        }
    },100)
}


function drawAllTheCupcakes(){
   cupCakesArray.forEach(function(oneCupcake){
        ctx.drawImage(cupcakeImage,oneCupcake.x, oneCupcake.y,50,50)
   }) 
}

// move the cupcake to a random position near the top-of-canvas
// assign the cupcake a random speed
//need to define the width
// function resetcupCakes(cupCakes) {
//     cupCakes.x = Math.random() * (canvas.width - cupCakes.width);
//     cupCakes.y = 15 + Math.random() * 30;
//     cupCakes.speed = 0.2 + Math.random() * 0.5;
//     cupCakesArray.push(cupCakes)
// }



// function animate() {

//     // request another animation frame

//     if (continueAnimating) {
//         requestAnimationFrame(animate);
//     }

    // for each cupcake
    // (1) check for collisions
    // (2) advance the cupcake
    // (3) if the cupcake falls below the canvas, reset that cupcake

//     for (var i = 0; i < cupCakesArray.length; i++) {

//         var cupCakes = cupCakes[i];

//         // test for cupcake-cat collision
//         // need to define kittyCat
//         if (isColliding(cupCakes, kittyCat )) {
//             score += 10;
//             resetcupCakes(cupCakes);
//         }

//         // advance the cupcakes
//         cupCakes.y += cupCakes.speed;

//         // if the cupcake is below the canvas,
//         if (cupCakes.y > canvas.height) {
//             resetcupCakes(cupCakes);
//         }

//     }
// //     // redraw everything
//     drawAll();



// }

// function isColliding(a, b) {
//     return !(
//     b.x > a.x + a.width || b.x + b.width < a.x || b.y > a.y + a.height || b.y + b.height < a.y);
// }

// function drawAll() {
//     console.log("about to draw")

//     var cupcakeImage = new Image();
//     cupcakeImage.src = "./images/cupcake.png";
//     console.log("got cupcake");
//     // draw all cupcakes
//     for (var i = 0; i < cupCakesArray.length; i++) {
//         var cupCakes = cupCakesArray[i];
        
//         drawImage(cupcakeImage, cupCakes.x, cupCakes.y, 100, 100);
//         console.log("drawing cupcakes")

  
//     }
//   }