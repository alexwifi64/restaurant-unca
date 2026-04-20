let backgroundDiv = document.querySelector(".background");
let bgDiv1 = document.querySelector("#Bg1");
let bgDiv2 = document.querySelector("#Bg2");

let imgIndex = undefined
let nextImgIndex = undefined
let lastImgIndex = undefined

let bg1Active = true

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

function randomiseIndexes(){
	lastImgIndex = imgIndex;

	if (nextImgIndex){
		imgIndex = nextImgIndex;
	} else {
			imgIndex = getRandomInt(17) + 1;
	}

	nextImgIndex = getRandomInt(17) + 1;
	console.log(`lastImgIndex:${lastImgIndex}\nimgIndex:${imgIndex}\nnextImgIndex:${nextImgIndex}`);
};

// const randomBg = async () => {
// 	preloadImg(`img/bg-imgs/${imgIndex}.webp`)
// 	bgDivCurrent.classList.remove("background-active");
// 	setTimeout(() => {
// 		bgDivCurrent.style.backgroundImage = `url(img/bg-imgs/${imgIndex}.webp)`;
// 	}, "200");
// 	setTimeout(() => {
// 		bgDivCurrent.classList.add("background-active");
// 	}, "200");
// 	preloadImg(`img/bg-imgs/${nextImgIndex}.webp`)
// };

const randomBg = async () => {
	if (bg1Active == true){
		bgDiv1.style.backgroundImage = `url(img/bg-imgs/${imgIndex}.webp)`;
		bgDiv1.classList.add("background-active");
		setTimeout(() => {
			bgDiv2.style.backgroundImage = `url(img/bg-imgs/${nextImgIndex}.webp)`;
		}, "500");
		bg1Active = false
	} else {
		bgDiv1.classList.remove("background-active");
		setTimeout(() => {
			bgDiv1.style.backgroundImage = `url(img/bg-imgs/${nextImgIndex}.webp)`;
		}, "500");
		bg1Active = true
	}
};

function preloadImg(url){
	const img = new Image();
	img.src = url;
}

setInterval(() => {
	randomiseIndexes();
	while (lastImgIndex == imgIndex || nextImgIndex == imgIndex) {
		randomiseIndexes();
	}
	randomBg();
}, "5000");


randomiseIndexes();
randomBg();