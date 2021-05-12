class Background {
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
	update() {
		this.y += carSpeed;
		if (this.y >= 0) this.y = -canvas.height;
		this.draw();
	}
}
