let backgroundDiv = document.querySelector(".background");

let imgIndex = 0

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

function randomiseIndex(){
	imgIndex = getRandomInt(17) + 1
};

const randomBg = async () => {
	backgroundDiv.classList.remove("background-active");
	setTimeout(() => {
		backgroundDiv.style.backgroundImage = `url(img/bg-imgs/${imgIndex}.webp)`;
		// backgroundDiv.classList.add("background-active");
	}, "500");
	setTimeout(() => {
		// backgroundDiv.style.backgroundImage = `url(img/bg-imgs/${imgIndex}.webp)`;
		backgroundDiv.classList.add("background-active");
	}, "500");
};

setInterval(() => {
	randomiseIndex();
	randomBg();
}, "5000");


randomiseIndex();
randomBg();