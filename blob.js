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

	this.updateSim = function() {
		this.vel.setMag(6);
		if( movement == 1 ) {
			this.vel = createVector(mouseX- width/2, mouseY-height/2);
			this.vel.setMag(3);
		}
		this.inRangeSim();
		this.pos.add(this.vel);
	}

	this.infection = function(other) {
		var d = p5.Vector.dist(this.pos, other.pos);
		if (d < this.r + other.r) {
			if (other.status == "Infected")
				this.status = "Infected"
			
			if ((other.vel.x == 0 && other.vel.y == 0) || (this.vel.x == 0 && this.vel.y == 0)) {
				this.vel.x = -this.vel.x;
				this.vel.y = -this.vel.y;
			}else {
				var pomx = this.vel.x;
				var pomy = this.vel.y;
				this.vel.x = other.vel.x;
				this.vel.y = other.vel.y;
				other.vel.x = pomx;
				other.vel.y = pomy;
			}
			
		}
	}

	this.inRange = function() {
		if(this.pos.x < -width+this.r || this.pos.x > width*2-this.r || this.pos.y < -height+this.r || this.pos.y > height*2-this.r) {
			this.vel.x = -this.vel.x;
			this.vel.y = -this.vel.y;
		}
	}

	this.inRangeSim = function() {
		if(this.pos.x < this.r || this.pos.x > width-this.r ) {
			this.vel.x = -this.vel.x;
		} else if (this.pos.y < this.r || this.pos.y > height-this.r) {
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