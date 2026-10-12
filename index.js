const Luffy = document.getElementById(`mycharacter`);
let Luffyimg = document.getElementById(`Luffyimg`);
const LuffyMap = document.getElementById(`gameArea`);
const moveAmount = 30;

let X = LuffyMap.clientWidth / 2 ;
let Y = LuffyMap.clientHeight / 2;

Luffy.style.top = `${Y}px`;
Luffy.style.left = `${X}px`;
const maxX = 3000;
const minX = 83;
const maxY = 1650; 
const minY = 10;

let frames = {
    up: 0,
    down: 0,
    left: 0,
    right: 0
};

document.addEventListener("keydown",event => {
    console.log("key:",event.key)

    if(event.key.startsWith("Arrow")){
        event.preventDefault();
    
        switch(event.key){
            case "ArrowUp":
               
                frames.up++;
                 if(frames.up>6){
                    frames.up=1;
                 }
                 Luffyimg.src = `Character/up/up${frames.up}.png`
                
                Y -= moveAmount;
                break;
            case "ArrowDown":
                
                 frames.down++;
                 if(frames.down>6){
                    frames.down=1;
                 }
                 Luffyimg.src = `Character/down/down${frames.down}.png`;
                
                Y += moveAmount;
                break;
            case "ArrowLeft":
                
                frames.left++;
                if (frames.left > 6){
                    frames.left = 1;
                }
                Luffyimg.src = `Character/left/left${frames.left}.png`;
                
                X -= moveAmount;
                break;
            case "ArrowRight":
               
                frames.right++;
                 if(frames.right>6){
                    frames.right=1;
                 }
                 Luffyimg.src = `Character/right/right${frames.right}.png`;
                
                X += moveAmount;
                break;      
        }

        if(X < minX){
            X = minX;
        }else if(X > maxX){
            X = maxX;
        }

        if(Y < minY){
            Y = minY;
        }else if(Y > maxY){
             Y = maxY;
        }

        Luffy.style.left = `${X}px`;
        Luffy.style.top = `${Y}px`; 

    }
})

document.addEventListener("keyup",event => {
    if(event.key.startsWith("Arrow")){
        Luffyimg.src = "Character/down/down1.png";
    }
})
