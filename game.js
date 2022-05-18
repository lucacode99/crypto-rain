
// -------------------- Section 01: variables -------------------- \\

const body = document.body
const landingPageDiv = document.getElementById("landing-div")
const ctx = document.getElementById('canvas').getContext('2d');
const canvas = document.querySelector('canvas');

const test = document.querySelector('.testing')

let gameOver = false;
let lifeCounter = 3;
let bitcoinCounter = 0;

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
shitcoinImg.src = '../Pictures/shitcoin_aufkleber.jpg';
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

// losing Screen

const losingScreenImg = new Image();
losingScreenImg.src = '../Pictures/crash-losing-picture.png';


// -------------------- Section 02: functions and game logic -------------------- \\

function curseOfTooManyShitcoins() {
  const nextShitcoins = [];
  shitcoins.forEach(shitcoin => {
  if (avatarPositionX < shitcoin.posX + shitcoin.width && avatarPositionX + avatarWidth > shitcoin.posX && avatarPositionY < shitcoin.posY + shitcoin.space &&  avatarLength + avatarPositionY > shitcoin.posY)  {
      lifeCounter -= 1;
      console.log(lifeCounter);
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
    console.log(bitcoinCounter);
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
}

function restartGame () {
  location.reload();
}

function loadLosingScreen () {
   body.append(losingScreenImg);
   document.getElementById("resart_btn").classList.remove("invisibility");
   document.getElementById("losing_txt").classList.remove("invisibility")
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
  if (animationFrameId % 200 === 0) {   
   bitcoins.push(new Bitcoin());
  } 
  if (animationFrameId % 200 === 0) {   
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
    else {
    animationFrameId = requestAnimationFrame(animate);
    }

};
  
// -------------------- Section 03: Event-Listener -------------------- \\

window.addEventListener("load", () => {
    document.getElementById('start-button').onclick = () => {
        startGame ();                                  
      };
      document.getElementById('resart_btn').onclick = () => {
        console.log("dieser Knopf funktioniert")
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




    
  
