// declare the variables needed
let player=null;
let field=null;

let playerState={
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    speed: 2,
}

let fieldState={
    width: 0,
    height: 0,
}


player=document.querySelector('.player');
field=document.querySelector('.field');


// initialize the player state
playerState.width=getNumber(getComputedStyle(player).width);
playerState.height=getNumber(getComputedStyle(player).height);
playerState.top=getNumber(getComputedStyle(player).top);
playerState.left=getNumber(getComputedStyle(player).left);

fieldState.width=getNumber(getComputedStyle(field).width);
fieldState.height=getNumber(getComputedStyle(field).height);


//attach event handlers to make the player move
document.addEventListener('keydown',(e)=>{
    switch(e.key){
        case "ArrowUp":
            move(e.key,playerState);
            break;
        case "ArrowDown":
            move(e.key,playerState);
            break;
        case "ArrowLeft":
            // move left
            move(e.key,playerState);
            break;
        case "ArrowRight":
            // move right
            move(e.key,playerState);
            break;
    }
});

 


// function that moves the character
function move(direction,playerState){
    player=document.querySelector('.player');
    
    console.log(detectCollision());
     
    if(detectCollision()){
        switch(direction) {
            case "ArrowUp":
                playerState.top=(playerState.top - (playerState.speed*1));
                player.style.top=playerState.top+"px";
                break;
            case "ArrowDown":
                playerState.top=(playerState.top + (playerState.speed*1));
                player.style.top=playerState.top+"px";
                break;
            case "ArrowRight":
                playerState.left=(playerState.left +(playerState.speed*1));
                player.style.left=playerState.left+"px";
                break;
            case "ArrowLeft":
                playerState.left=(playerState.left - (playerState.speed*1));
                player.style.left=playerState.left+"px";
                break;
        }
    }
     
     
}

 


//function that detects the collision
function detectCollision(){
    let top,down,left,right;
    left =0;
    down =0;
    left=playerState.left;
    rigth=playerState.left+playerState.width;

    down = playerState.top+playerState.height;
    console.log(left+"-"+fieldState.width);
      if((left<0)){
        return false;
        }else{
            return true;
        }
}


// random coordinates
function randomCoordinates(){
    let points = {x:0,y:0};
    points.x = Math.floor(Math.random()*500);
    points.y = Math.floor(Math.random()*500);
    return points;
}


// function that remove units form the sizes of elements
function getNumber(val){
    let number="";
    let arr=[...val];
    let newArr= arr.filter(function(val){
    if(/[0-9]/.test(val)){
        return val;
        }
    });

    for(itm of newArr){
        number+=itm;
    }

    return parseInt(number);
    }


 
 


