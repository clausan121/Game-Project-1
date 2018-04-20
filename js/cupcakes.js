// game variables
// var startingScore = 0;
// var continueAnimating = false;
// var score;
// var totalCupcakes;
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

var theCupCake = {y: 0, x: 0 };

function addcupCake() {
    var rando = Math.floor(Math.random() * 1000);
    theCupCake = {y: 0, x: 0 };
    theCupCake.x = rando;
    cupCakesArray.push(theCupCake);
}

// delete second cupcake.y
function fallingCake (cupcake){
    var id = setInterval(function(){
        cupcake.y+=8
        if(cupcake.y > 1000){
            clearInterval(id)
        }
    },100)
}

function drawAllTheCupcakes(){
    //  console.log("falling");
   cupCakesArray.forEach(function(oneCupcake){
        ctx.drawImage(cupcakeImage,oneCupcake.x, oneCupcake.y,50,50)
   }) 

}



