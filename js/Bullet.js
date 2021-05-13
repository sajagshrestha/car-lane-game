class Bullet {
	constructor() {
		this.x = lanes[currentLane] + 45;
		this.y = player.y;
		this.isFired = false;
		this.width = 100;
		this.height = 150;
	}
	draw() {
		const img = new Image();
		img.src = "assets/bullet.png";
		context.drawImage(img, this.x, this.y, this.width, this.height);
	}
	update() {
		this.draw();
		if (this.isFired) {
			this.y += -carSpeed;
			if (this.y < -canvas.height) {
				bullets = [];
			}
			obstacles = obstacles.filter((obstacle) => {
				if (collisionDetectedBetween(this, obstacle)) {
					bullets = [];

					return false;
				}
				return true;
			});
		} else {
			this.x = lanes[currentLane] + 45;
		}
	}
	fire() {
		this.isFired = true;
	}
}
