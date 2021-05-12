function generateRandomIntegerBetween(minValue, maxValue) {
	return Math.floor(Math.random() * (maxValue - minValue) + minValue);
}

function generateObstacles() {
	setInterval(() => {
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
	}, 1000);
}
const checkCollision = (player, obstacle) => {
	let collisonWidth = 170;
	if (
		player.x < obstacle.x + collisonWidth &&
		player.x + collisonWidth > obstacle.x &&
		player.y < obstacle.y + collisonWidth &&
		player.y + collisonWidth > obstacle.y
	) {
		carSpeed = 0;
	}
};
