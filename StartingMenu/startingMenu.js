const pregame = document.getElementById(`pregame`);
const welcomeBtn = document.getElementById(`welcomeBtn`);
const muteBtn = document.getElementById("muteBtn");
const mainMenuSound = new Audio(`../Resources/Sounds/main_Menu.wav`);
mainMenuSound.loop = true;
mainMenuSound.volume = 0.4;
let isMuted = false;  

welcomeBtn.addEventListener("click",()=> {
    mainMenuSound.play();
    pregame.style.display = "none";
})

muteBtn.addEventListener("click", () => {
    isMuted = !isMuted;
    
    if (isMuted) {
        mainMenuSound.pause();
        muteBtn.textContent = "🔇";
    } else {
        mainMenuSound.play();
        muteBtn.textContent = "🔊";
    }
});

const StartBtn = document.getElementById(`start`);

StartBtn.addEventListener("click",() =>{
    window.location.href = `../GamePage/game.html`;
});

