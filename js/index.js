const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const bothScores = document.querySelectorAll(".score");
const gameOverOverlay = document.getElementById("game-over");
const startGameOverlay = document.getElementById("start-game");
const retryButton = document.getElementById("retry");
const startButton = document.getElementById("start");

canvas.height = innerHeight;
canvas.width = 600;

const lanes = [canvas.width - 580, canvas.width - 390, canvas.width - 200];

const obstacleSources = [
	"assets/obs1.png",
	"assets/obs2.png",
	"assets/obs3.png",
	"assets/obs4.png",
];
const obstacleYPositions = [-300, -500, -700];

let highScore = 0;
let score;
let obstacles;
let currentLane;
let carSpeed;

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

//main game loop
let gameLoopId;
const gameLoop = () => {
	gameLoopId = requestAnimationFrame(gameLoop);
	gameBackground.update();
	player.update();
	obstacles.forEach((obstacle) => {
		obstacle.update();
		if (collisionDetectedBetween(player, obstacle)) {
			gameOver();
		} else if (player.y < obstacle.y - obstacle.height) {
			score++;
			updateScore(score);
		}
	});
	obstacles = obstacles.filter((obstacle) => obstacle.y < canvas.height);
};

retryButton.addEventListener("click", initGame);
startButton.addEventListener("click", () => {
	startGameOverlay.style.display = "none";
	initGame();
});
