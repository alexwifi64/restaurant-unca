let backgroundDiv = document.querySelector("#background");
let imgIndex = getRandomInt(22) + 1


function randomBg() {
	backgroundDiv.style.backgroundImage = `url(img/bg-imgs/${imgIndex}.webp)`;
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

randomBg();