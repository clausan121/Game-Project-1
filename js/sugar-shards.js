// sugar shard variables
// var startingScore = 0;
// var continueAnimating = false;
// var score;
// var totalsugarShards;
var shardsArray = [];
var shardImage = new Image();
shardImage.src = "./images/sugarshard.png";
infiniteShards();


var shardIndex = 0;
function infiniteShards (){
    setInterval(function(){
        addsugarShard();
        fallingShard(shardsArray[shardIndex]);
        shardIndex++;
    } , 2000)
}
// var thesugarShard ={
//     x: 0, 
//     y: 0, 
//     width:50,
//     height:50
// };

function addsugarShard() {
    var rando = Math.floor(Math.random() * 1000);
    // thesugarShard ={y: 0, x: 0};
    var thesugarShard ={
        x: 0, 
        y: 0, 
        width:50,
        height:50
    };
    thesugarShard.x = rando;
    shardsArray.push(thesugarShard);
}

function fallingShard (shard) {
    var id = setInterval(function(){
        shard.y+=8
        if(shard.y > 1000){
            clearInterval(id)
        }
    }, 100)
}

function drawAllTheShards(){
    // console.log("falling");
    shardsArray.forEach(function(oneShard){
        // ctx.drawImage(shardImage, oneShard.x, oneShard.y,50,50)
        ctx.drawImage(shardImage, oneShard.x, oneShard.y,oneShard.width,oneShard.height)

    })
}