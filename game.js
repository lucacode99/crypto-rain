
const body = document.body
const landingPageDiv = document.getElementById("landing-div")
const ctx = document.getElementById('canvas').getContext('2d');

let gameOver = false;
let lifeCounter = 3;
let bankAccount = 0;


// map 
const backgroundImg = new Image();
backgroundImg.src = '../Pictures/earth.jpg';

let canvasWidth = 1300;
let canvasHeight = 700;

//avatar
const avatarImg = new Image();
avatarImg.src = '../Pictures/player_one.jpg';

let isAvatarGoingLeft = false;
let isAvatarGoingRight = false;
let avatarPositionX = 650;
let avatarPositionY = 650;
let movementSpeed = 5;
let avatarWidth = 50;
let avatarLength = 50;

//bitcoin

const bitcoinImg = new Image();
bitcoinImg.src = '../Pictures/bitcoin.jpg';
let bitcoinWidth = 50;
let bitcoinHeight = 50;
let bitcoinFallingSpeed = 3;
let bitcoinStartingValueX = Math.random() * 1300;
let bitcoinStartingValueY = Math.random() - 5 * 100;

let animationFrameId;



// functions and game-logic

function startGame () {
landingPageDiv.classList.add("invisibility");
// insert timer from here on?
//setInterval ((bitcoinCreation), 4000)
}

function launchAstronaut () {
ctx.drawImage(avatarImg, avatarPositionX, avatarPositionY, avatarWidth, avatarLength);
if (isAvatarGoingLeft) {
  if (avatarPositionX > 0) {
    avatarPositionX -= movementSpeed;
  }
} else if (isAvatarGoingRight) {
  if (avatarPositionX < canvasWidth - avatarWidth) {
    avatarPositionX += movementSpeed;
  }
}
}

function bitcoinCreation () {             
   ctx.drawImage(bitcoinImg, bitcoinStartingValueX, bitcoinStartingValueY, 65, 65);
}

function bitcoinsRain () {                
  bitcoinStartingValueY += bitcoinFallingSpeed;
}


function animate() {                                        
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
  launchAstronaut ();
  requestAnimationFrame(animate) // graphic mistake probably lies somewhere in here
  bitcoinCreation ();
  bitcoinsRain();
};
  


//include in animate () 
  //include code to guide player to losing-screen!
  if (gameOver) {     
  cancelAnimationFrame (animationFrameId);
    } else {
    animationFrameId = requestAnimationFrame(animate);
  }


window.addEventListener("load", () => {
    document.getElementById('start-button').onclick = () => {
        startGame ();                                  
      };
})

document.addEventListener("keydown", event => {
    if (event.code === "ArrowLeft") {
    isAvatarGoingLeft = true;
    }  
    if (event.code === "ArrowRight") {
    isAvatarGoingRight = true;
    }
});

document.addEventListener("keyup", event => {
     isAvatarGoingLeft = false;
     isAvatarGoingRight = false;
     
})
