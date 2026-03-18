let backgroundDiv = document.querySelector(".background");

let imgIndex = 0
let lastImgIndex = 0

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

function randomiseIndex(){
	lastImgIndex = imgIndex
	imgIndex = getRandomInt(17) + 1
	console.log(`lastImgIndex:${lastImgIndex}\n
		imgIndex:${imgIndex}`);
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
	while (lastImgIndex == imgIndex) {
		randomiseIndex();
	}
	randomBg();
}, "5000");


randomiseIndex();
randomBg();