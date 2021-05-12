const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.height = innerHeight;
canvas.width = 600;

const lanes = [canvas.width - 580, canvas.width - 390, canvas.width - 200];
let currentLane = 1;
let carSpeed = 10;

const obstacleSources = [
	"assets/obs1.png",
	"assets/obs2.png",
	"assets/obs3.png",
	"assets/obs4.png",
];
const obstacleYPositions = [-300, -500, -700];
let obstacles = [];

//create player
const player = new PlayerCar(
	lanes[1],
	canvas.height - 200,
	200,
	200,
	"assets/player.png"
);

//create Background
const gameBackground = new Background(
	0,
	-canvas.height,
	canvas.width,
	canvas.height * 2,
	"assets/bg.png"
);

const gameLoop = () => {
	gameBackground.update();
	player.update();
	obstacles.forEach((obstacle) => {
		obstacle.update();
		checkCollision(player, obstacle);
	});
	obstacles = obstacles.filter((obstacle) => obstacle.y < canvas.height);
	requestAnimationFrame(gameLoop);
};

window.addEventListener("keydown", (e) => {
	if (e.keyCode === 65 || e.keyCode === 37) {
		currentLane--;
		if (currentLane < 0) currentLane = 0;
	}
	if (e.keyCode === 68 || e.keyCode === 39) {
		currentLane++;
		if (currentLane > 2) currentLane = 2;
	}
});

gameLoop();
generateObstacles();
