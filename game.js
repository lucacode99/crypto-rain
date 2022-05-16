
const body = document.body
const landingPageDiv = document.getElementById("landing-div")
const ctx = document.getElementById('canvas').getContext('2d');

let gameOver = false;

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

let animationFrameId;



// functions and game-logic

function startGame () {
landingPageDiv.classList.add("invisibility");
requestAnimationFrame(animate)}


function launchAstronaut () {

ctx.drawImage(avatarImg, avatarPositionX, avatarPositionY, avatarWidth, avatarLength);
console.log("xy")
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
  launchAstronaut ();
  requestAnimationFrame(animate)
  };


if (gameOver) {     // animate () komplett an gameover
  cancelAnimationFrame (animationFrameId);
  // include code to guide player to losig-screen!
  } else {
    animationFrameId = requestAnimationFrame(animate);
  }


// all event-listeners
window.addEventListener("load", () => {
    document.getElementById('start-button').onclick = () => {
        startGame ();                                  
      };
})

document.addEventListener("keydown", event => {
    if (event.code === "ArrowLeft") {
    isAvatarGoingLeft = true;
    console.log("Astronaut sollte sich links bewegen")
    }  if (event.code === "ArrowRight") {
    isAvatarGoingRight = true;
    console.log("Astronaut sollte sich rechts bewegen")
  }
});

document.addEventListener("keyup", event => {
     isAvatarGoingLeft = false;
     isAvatarGoingRight = false;
     
})
