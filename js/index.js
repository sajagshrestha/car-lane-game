const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

//game constatnts
const VECHILE_HEIGHT = 70;
const VECHILE_WIDTH = 50;

canvas.height = innerHeight;
canvas.width = 600;

const obastacles = [];

const lanes = [canvas.width - 580, canvas.width - 390, canvas.width - 200];
let currentLane = 1;

//background
class Background {
	constructor(speed, imgSrc = "assets/bg.png") {
		this.speed = speed;
		this.imgSrc = imgSrc;
		this.x = 0;
		this.y = -canvas.height;
	}
	draw() {
		const img = new Image();
		img.src = this.imgSrc;
		context.drawImage(img, this.x, this.y, canvas.width, canvas.height * 2);
	}
	update() {
		this.y += this.speed;
		if (this.y >= 0) this.y = -canvas.height;
		this.draw();
	}
}

//player car
class PlayerCar {
	constructor(imgSrc = "assets/player.png") {
		this.imgSrc = imgSrc;
		this.y = canvas.height - 200;
		this.x = lanes[0];
	}
	draw() {
		const img = new Image();
		img.src = this.imgSrc;
		context.drawImage(img, this.x, this.y, 200, 200);
	}
	update() {
		this.x = lanes[currentLane];
		this.draw();
	}
}

const player = new PlayerCar();
const gameBackground = new Background(5);

const gameLoop = () => {
	gameBackground.update();
	player.update();

	requestAnimationFrame(gameLoop);
};

window.addEventListener("keydown", (e) => {
	if (e.keyCode === 65) {
		currentLane--;
		if (currentLane < 0) currentLane = 0;
	}
	if (e.keyCode === 68) {
		currentLane++;
		if (currentLane > 2) currentLane = 2;
	}
});
gameLoop();
