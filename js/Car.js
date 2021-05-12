class Car {
	constructor(x, y, width, height, imgSrc) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.imgSrc = imgSrc;
	}
	draw() {
		const img = new Image();
		img.src = this.imgSrc;
		context.drawImage(img, this.x, this.y, this.width, this.height);
	}
}

class PlayerCar extends Car {
	update() {
		this.x = lanes[currentLane];
		this.draw();
	}
}

class ObstacleCar extends Car {
	update() {
		this.y += carSpeed;
		this.draw();
	}
}
