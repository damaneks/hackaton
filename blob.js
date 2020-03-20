function Blob(x, y, r, status, velx, vely, movement) {
	this.pos = createVector(x, y);
	this.r = r;
	this.status = status;
	this.vel = createVector(velx, vely);

	this.update = function() {
		if( movement == 1 )
			this.vel = createVector(mouseX- width/2, mouseY-height/2);
		this.vel.setMag(3);
		this.pos.add(this.vel);
	}

	this.infection = function(other) {
		var d = p5.Vector.dist(this.pos, other.pos);
		if (d < this.r + other.r && other.status == "Infected") {
			return true;
		} else {
			return false;
		}
	}

	this.show = function() {
		if (this.status == "Healthy"){
			fill(130, 170, 200);
		} else if (this.status == "Infected") {
			fill(100, 0, 0);
		} else {

		}
		ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
	}
}
