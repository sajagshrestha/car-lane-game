const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

//game constatnts
const VECHILE_HEIGHT = 70;
const VECHILE_WIDTH = 50;

canvas.height = innerHeight;
canvas.width = 600;

//background
class Background {
	constructor(speed) {
		this.img = new Image();
		this.img.src = "../assets/bg.png";
		this.speed = speed;
		this.x = 0;
		this.y = -canvas.height;
	}
	draw() {
		context.drawImage(
			this.img,
			this.x,
			this.y,
			canvas.width,
			canvas.height * 2
		);
	}
	update() {
		console.log(this.y);
		this.y += this.speed;
		if (this.y >= 0) this.y = -canvas.height;
		this.draw();
	}
}
const gameBackground = new Background(1);

const gameLoop = () => {
	gameBackground.update();
	requestAnimationFrame(gameLoop);
};

gameLoop();
