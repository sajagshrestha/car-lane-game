//kebibindings
window.addEventListener("keydown", (e) => {
	if (e.keyCode === 65 || e.keyCode === 37) {
		currentLane--;
		if (currentLane < 0) currentLane = 0;
	}
	if (e.keyCode === 68 || e.keyCode === 39) {
		currentLane++;
		if (currentLane > 2) currentLane = 2;
	}
	if (e.keyCode === 32) {
		bullets[0].fire();
	}
});

let obstacleId;
const generateObstacles = () => {
	obstacleId = setInterval(() => {
		const x = lanes[generateRandomIntegerBetween(0, lanes.length)];
		const y =
			obstacleYPositions[
				generateRandomIntegerBetween(0, obstacleYPositions.length)
			];
		const imgSrc =
			obstacleSources[
				generateRandomIntegerBetween(0, obstacleSources.length)
			];
		obstacles.push(new ObstacleCar(x, y, 200, 200, imgSrc));
		console.log("spawn");
	}, 1000);
};

let bulletid;
const generateBullet = () => {
	bulletid = setInterval(() => {
		if (bullets.length === 0) {
			bullets.push(new Bullet());
			console.log(bullets);
		}
	}, 3000);
};
const collisionDetectedBetween = (player, obstacle) => {
	let collisonWidth = player.height - 30;
	if (
		player.x < obstacle.x + collisonWidth &&
		player.x + collisonWidth > obstacle.x &&
		player.y < obstacle.y + collisonWidth &&
		player.y + collisonWidth > obstacle.y
	) {
		return true;
	}
};

const updateScore = (score) => {
	bothScores.forEach((s) => {
		s.innerHTML = score;
	});
	if (score >= highScore) {
		highScore = score;
		localStorage.setItem("highScore", highScore);
	}
	if (score % 5 === 0) {
		carSpeed += 5;
	}
};

const gameOver = () => {
	cancelAnimationFrame(gameLoopId);
	clearInterval(obstacleId);
	clearInterval(bulletid);
	highScoreContainer.innerHTML = highScore;
	gameOverOverlay.style.display = "flex";
};

const initGame = () => {
	score = 0;
	bothScores.forEach((s) => {
		s.innerHTML = score;
	});
	highScoreContainer.innerHTML = highScore;
	obstacles = [];
	bullets = [];
	currentLane = 1;
	carSpeed = 10;
	gameLoop();
	generateObstacles();
	generateBullet();
	gameOverOverlay.style.display = "none";
};
