
// -------------------- Section 01: variables -------------------- \\

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
let bitcoinWidth = 65;
let bitcoinHeight = 65;
let bitcoinFallingSpeed = 3.5;
let bitcoinStartingValueX = Math.random() * 1300;
let bitcoinStartingValueY = Math.random() - 5 * 100;

let bitcoins = [];

let animationFrameId;

// multitude of falling bitcoins

class Bitcoin {
  constructor() {
    this.width = bitcoinWidth;
    this.space = bitcoinHeight;
    this.speed = bitcoinFallingSpeed;
    this.posX  = Math.floor(Math.random() * 1300)
    // old but gold: this.posX  = bitcoinStartingValueX;
    this.posY  = bitcoinStartingValueY;
  }

  move () {
    this.posY += this.speed;
  }

  randomStartingPoint() {
    this.posX;
    this.posY;
  }
}

// -------------------- Section 02: functions and game logic -------------------- \\

function blessingOfAMillionBitcoins() {
  const nextBitcoins = [];
  bitcoins.forEach(bitcoin => {
  const currentStartingPosition = bitcoin.randomStartingPoint();
  bitcoin.move(); 
      if (bitcoin.posY < 700) {
      nextBitcoins.push(bitcoin);
      const {posY, posX, space, width} = bitcoin
      ctx.drawImage(bitcoinImg, posX, posY, width, space);
    }
  });

bitcoins = nextBitcoins;
}

function startGame () {
landingPageDiv.classList.add("invisibility");
animate();
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

function animate() {                                     
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
  launchAstronaut();
  blessingOfAMillionBitcoins();
  if (animationFrameId % 200 === 0) {
   bitcoins.push(new Bitcoin());
  } 
  if (gameOver) {     
  cancelAnimationFrame (animationFrameId);
  } 
    else {
    animationFrameId = requestAnimationFrame(animate);
    }

};
  
// -------------------- Section 03: Event-Listener -------------------- \\

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