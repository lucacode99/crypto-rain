
// -------------------- Section 01: variables -------------------- \\

const body = document.body
const landingPageDiv = document.getElementById("landing-div")
const ctx = document.getElementById('canvas').getContext('2d');
const canvas = document.querySelector('canvas');

let gameOver = false;
let victory = false;
let lifeCounter = 1;
let bitcoinCounter = 0;

// music
let gameMusic = new Audio("./Music/mc-quattro-back-to-the-future-retrowave-punk-20775.mp3");
gameMusic.volume = 0.1;
let winningMusic = new Audio("./Music/success-fanfare-trumpets-6185.mp3");
winningMusic.volume = 0.1; 
let losingMusic = new Audio("./Music/wah-wah-sad-trombone-6347.mp3");
winningMusic.volume = 0.1; 

// map 
const backgroundImg = new Image();
backgroundImg.src = './Pictures/earth.jpg';
let canvasWidth = 1300;
let canvasHeight = 700;

//avatar
const avatarImg = new Image();
avatarImg.src = './Pictures/wallet-removebg-preview.png';
let isAvatarGoingLeft = false;
let isAvatarGoingRight = false;
let avatarPositionX = 650;
let avatarPositionY = 650;
let movementSpeed = 5;
let avatarWidth = 50;
let avatarLength = 50;

//bitcoin

const bitcoinImg = new Image();
bitcoinImg.src = './Pictures/bitcoin-removebg-preview.png';
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

// shitcoin

const shitcoinImg = new Image();
shitcoinImg.src = './Pictures/shitcoin_aufkleber-removebg-preview.png';
let shitcoinWidth = 65;
let shitcoinHeight = 65;
let shitcoinFallingSpeed = 5;
let shitcoinStartingValueX = Math.random() * 1300;
let shitcoinStartingValueY = Math.random() - 5 * 100;
let shitcoins = [];

// multitude of falling shitcoins

class Shitcoin {
  constructor() {
    this.width = shitcoinWidth;
    this.space = shitcoinHeight;
    this.speed = shitcoinFallingSpeed;
    this.posX  = Math.floor(Math.random() * 1300)
    this.posY  = shitcoinStartingValueY;
  }
    move () {
    this.posY += this.speed;
    }

    randomStartingPoint() {
      this.posX;
      this.posY;
    }
}

// lastStageScreens

const losingScreenImg = new Image();
losingScreenImg.src = './Pictures/crash-losing-picture.png';
const winningScreenImg = new Image();
winningScreenImg.src = './Pictures/crown-winning-picture.png';

// -------------------- Section 02: functions and game logic -------------------- \\

function curseOfTooManyShitcoins() {
  const nextShitcoins = [];
  shitcoins.forEach(shitcoin => {
  if (avatarPositionX < shitcoin.posX + shitcoin.width && avatarPositionX + avatarWidth > shitcoin.posX && avatarPositionY < shitcoin.posY + shitcoin.space &&  avatarLength + avatarPositionY > shitcoin.posY)  {
      lifeCounter -= 1;
      console.log(`life counter: ${lifeCounter}`);
      }  else {
      shitcoin.move(); 
      if (shitcoin.posY < 700) {
      nextShitcoins.push(shitcoin);
      const {posY, posX, space, width} = shitcoin
      ctx.drawImage(shitcoinImg, posX, posY, width, space);
      }
       }
  })
  shitcoins = nextShitcoins;
}

function blessingOfAMillionBitcoins() {
  const nextBitcoins = [];
  bitcoins.forEach(bitcoin => {
  if (avatarPositionX < bitcoin.posX + bitcoin.width && avatarPositionX + avatarWidth > bitcoin.posX && avatarPositionY < bitcoin.posY + bitcoin.space &&  avatarLength + avatarPositionY > bitcoin.posY)  {
    bitcoinCounter +=1;
    console.log(`life counter: ${bitcoinCounter}`)
    }  else {
    bitcoin.move(); 
    if (bitcoin.posY < 700) {
    nextBitcoins.push(bitcoin);
    const {posY, posX, space, width} = bitcoin
    ctx.drawImage(bitcoinImg, posX, posY, width, space);
    }
     }
    });

bitcoins = nextBitcoins;
}

function startGame () {
landingPageDiv.classList.add("invisibility");
animate();
gameMusic.play();
canvas.classList.remove("invisibility");
}

function loadLosingScreen () {
   body.append(losingScreenImg);
   document.getElementById("restart_btn").classList.remove("invisibility");
   document.getElementById("losing_txt").classList.remove("invisibility")
   gameMusic.pause();
   losingMusic.play();
};

function loadWinningScreen () {
  body.append(winningScreenImg);
  document.getElementById("restart_btn").classList.remove("invisibility");
  document.getElementById("winning_txt").classList.remove("invisibility")
  document.getElementById("winning_txt_2").classList.remove("invisibility")
  gameMusic.pause();
  winningMusic.play();
};
 
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
  curseOfTooManyShitcoins();
  if (animationFrameId % 250 === 0) {   
   bitcoins.push(new Bitcoin());
  } 
  if (animationFrameId % 40 === 0) {   
    shitcoins.push(new Shitcoin());
  }
  if (lifeCounter === 0) {
    gameOver = true;
  }
  if (gameOver) {
  cancelAnimationFrame (animationFrameId);
  canvas.classList.add("invisibility");
  loadLosingScreen ();
  }
  // neu
  if (bitcoinCounter === 10) {
    victory = true;
  }
  if (victory) {
  cancelAnimationFrame (animationFrameId);
  canvas.classList.add("invisibility");
  loadWinningScreen();
 
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
      document.getElementById('restart_btn').onclick = () => {
        window.location.reload();                                
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
});