function Blob(x, y, r, status, velx, vely, movement) {
	this.pos = createVector(x, y);
	this.r = r;
	this.status = status;
	this.vel = createVector(velx, vely);

	this.update = function() {
		this.vel.setMag(6);
		if( movement == 1 ) {
			this.vel = createVector(mouseX- width/2, mouseY-height/2);
			this.vel.setMag(3);
		}
		this.inRange();
		this.pos.add(this.vel);
	}

	this.infection = function(other) {
		var d = p5.Vector.dist(this.pos, other.pos);
		if (d < this.r + other.r) {
			if (other.status == "Infected")
				this.status = "Infected"
			this.vel.x = -this.vel.x;
			this.vel.y = -this.vel.y;
		}
	}

	this.inRange = function() {
		if(this.pos.x < -width+this.r || this.pos.x > width*2-this.r || this.pos.y < -height+this.r || this.pos.y > height*2-this.r) {
			this.vel.x = -this.vel.x;
			this.vel.y = -this.vel.y;
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