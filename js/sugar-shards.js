// sugar shard variables
var startingScore = 0;
var continueAnimating = false;
var score;
var totalsugarShards;
var shardsArray = [];
var shardImage = new Image();
shardImage.src = "./images/sugarshard.png";
infiniteShards();


function infiniteShards (){
    var shardIndex = 0;
    setInterval(function(){
        addsugarShard();
        fallingShard(shardsArray[shardIndex]);
        shardIndex++;
    } , 2000)
}

function addsugarShard() {
    var rando = Math.floor(Math.random() * 1000);
    var thesugarShard ={y: 0, x: 0};
    thesugarShard.x = rando;
    shardsArray.push(thesugarShard);
}

function fallingShard (shard) {
    console.log("falling");
    var id = setInterval(function(){
        shard.y+=8
        if(y > 1000){
            clearInterval(id)
        }
    }, 100)
}

function drawAllTheShards(){
    shardsArray.forEach(function(oneShard){
        ctx.drawImage(shardImage, oneShard.x, oneShard.y,50,50)
    })
}



// function animate() {

//     // request another animation frame

//     if (continueAnimating) {
//         requestAnimationFrame(animate);
//     }

//     // for each shard
//     // (1) check for collisions
//     // (2) advance the shard
//     // (3) if the shard falls below the canvas, reset that shard

//     for (var i = 0; i < sugarShard.length; i++) {

//         var sugarShard = sugarShard[i];

//         // test for cupcake-cat collision
//         // need to define kittyCat

//         if (isColliding(sugarShard, kittyCat )) {
//             score -= 10;
//             resetsugarShards(sugarShard);
//         }

//         // advance the shards
//         sugarShard.y += sugarShard.speed;

//         // if the shard is below the canvas,
//         if (cupCakes.y > canvas.height) {
//             resetcupCakes(cupCakes);
//         }

//     }

//     // redraw everything
//     drawAll();



// }

// function isColliding(a, b) {
//     return !(
//     b.x > a.x + a.width || b.x + b.width < a.x || b.y > a.y + a.height || b.y + b.height < a.y);
// }

// function drawAll() {



//     // draw all shards
//     for (var i = 0; i < sugarShard.length; i++) {
//         var sugarShard = sugarShard[i];
        
//         drawImage(sugarShardImage,sugarShard.x,sugarShard.y);


  
//     }
//   }