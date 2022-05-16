
const body = document.body
const landingPageDiv = document.getElementById("landing-div")
const ctx = document.getElementById('canvas').getContext('2d');

// map 
const backgroundImg = new Image();
backgroundImg.src = '../Pictures/earth.jpg';

//avatar
const avatarImg = new Image();
avatarImg.src = '../Pictures/player_one.jpg';
//let avatarPositionX = 650;
//let avatarPositionY = 600;
//avatarWidth = 15;
//avatarLength = 20;


// functions
function startGame () {
landingPageDiv.classList.add("invisibility");
ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
launchAstronaut();
}

function launchAstronaut () {
ctx.drawImage(avatarImg, 0, 0, 20, 20);
console.log("working")
}


  



window.addEventListener("load", () => {
    document.getElementById('start-button').onclick = () => {
        console.log("ein funktionierender Start-Knopf");   
        startGame ();  
                                          



      };




})

/*

const img = new Image();
imgScale = 640/480;
img.onload = function() {
  ctx.drawImage(img, 0, 0,150*imgScale,150);
};
 
img.src = 'https://static.pexels.com/photos/8700/wall-animal-dog-pet.jpg';




*/