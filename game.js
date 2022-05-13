
const body = document.body
const landingPageDiv = document.getElementById("landing-div")





window.addEventListener("load", () => {
    document.getElementById('start-button').onclick = () => {
        console.log("ein funktionierender Start-Knopf")
        landingPageDiv.classList.add("invisibility")
      };




})



/*
// insert canvas

const body = document.body;
const canvas = document.createElement("canvas")
body.append(canvas)

*/