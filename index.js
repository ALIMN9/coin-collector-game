const Luffy = document.getElementById(`mycharacter`);
let Luffyimg = document.getElementById(`Luffyimg`);
const LuffyMap = document.getElementById(`gameArea`);
const Coin = document.getElementById(`mycoin`);
let Coinimg = document.getElementById(`Coinimg`);
let ScoreElement = document.getElementById(`score`);
let Score = 0;
const moveAmount = 30;

let X = LuffyMap.clientWidth / 2 ;
let Y = LuffyMap.clientHeight / 2;
Luffy.style.top = `${Y}px`;
Luffy.style.left = `${X}px`;
const maxX = 3000;
const minX = 83;
const maxY = 1650; 
const minY = 10;


let Xcoin = 400;
let Ycoin = 400;
Coin.style.left = `${Xcoin}px`;
Coin.style.top = `${Ycoin}px`;

let frames = {
    up: 0,
    down: 0,
    left: 0,
    right: 0,
    coinframes : 0
};

setInterval(()=>{
    frames.coinframes++;
    if(frames.coinframes > 9){
        frames.coinframes = 1;
    }
    Coinimg.src = `Coin/coin${frames.coinframes}.png`;
},100); 

function checkCollision(){
            const LuffyL = X;
            const LuffyR = X + Luffy.offsetWidth/2;
            const LuffyT = Y;
            const LuffyB = Y + Luffy.offsetHeight/2;

            const CoinL = Coin.offsetLeft;
            const CoinR = CoinL + Coin.offsetWidth/2;
            const CoinT = Coin.offsetTop;
            const CoinB = CoinT + Coin.offsetHeight/2;

            const isTouching = LuffyL < CoinR &&
                   LuffyR > CoinL &&
                   LuffyB > CoinT &&
                   LuffyT < CoinB ;

            if(isTouching){
            Score++;
            ScoreElement.textContent = `Score: ${Score}`;
            ScoreElement.classList.add("pop");
            setTimeout(()=>{
                ScoreElement.classList.remove("pop");
            },250);
            Xcoin = Math.floor(Math.random() * ((3000 - 83) / 30)) * 30 + 83;
            Ycoin = Math.floor(Math.random() * ((1650 - 10) / 30)) * 30 + 10;
            Coin.style.left = `${Xcoin}px`;
            Coin.style.top = `${Ycoin}px`;
            }      
        }


document.addEventListener("keydown",event => {
    console.log("key:",event.key)

    if(event.key.startsWith("Arrow")){
        event.preventDefault();
    
        switch(event.key){
            case "ArrowUp":
               
                frames.up++;
                 if(frames.up > 6){
                    frames.up=1;
                 }
                 Luffyimg.src = `Character/up/up${frames.up}.png`
                
                Y -= moveAmount;
                break;
            case "ArrowDown":
                
                 frames.down++;
                 if(frames.down > 6){
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
                 if(frames.right > 6){
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

        checkCollision();

        Luffy.style.left = `${X}px`;
        Luffy.style.top = `${Y}px`; 

        const LuffyB = Y + Luffy.offsetHeight/2;
        const CoinB = Coin.offsetTop + Coin.offsetHeight/2;
        if(LuffyB > CoinB){
            Luffy.style.zIndex = 10;
            Coin.style.zIndex = 1;
        }else{
            Luffy.style.zIndex = 1;
            Coin.style.zIndex = 10;
        }

    }
})

document.addEventListener("keyup",event => {
    if(event.key.startsWith("Arrow")){
        Luffyimg.src = "Character/Rest_Animation.gif";
    }
})


