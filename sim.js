var blobs = [];
var numberOfHealthyBlobs = 100;
var numberOfInfectedBlobs = 1;
var percentOfRunning = 70;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	for( var i = 0; i < numberOfHealthyBlobs + numberOfInfectedBlobs; i++) {
			while (true) {
				var x = random(20,width-20);
				var y = random(20,height-20);
				var j = 0;
				var posPom = createVector(x, y);
				for(j; j < i; j++) {
					var d = p5.Vector.dist(posPom, blobs[j].pos);
					if( d <= blobs[j].r )
						break;
				}
				if( j < i )
					continue
				else
					break
			}
		var ifRunning = random(0, 100);
		var velx = 0;
		var vely = 0;
		if (ifRunning < percentOfRunning) {
			velx = random(-1,1)*random();
			vely = random(-1,1)*random();
		}
		if( i < numberOfHealthyBlobs)
			blobs[i] = new Blob(x, y, 8, "Healthy", velx, vely, 0);
		else
			blobs[i] = new Blob(x, y, 8, "Infected", velx, vely, 0);
	}
}

function draw() {
	background(0);
	
	for(var i = 0; i < blobs.length; i++) {
		blobs[i].show();
	}
	
	for( var i = 0; i < blobs.length; i++) {
		blobs[i].show();
		for(var j = 0; j < blobs.length; j++){
			if ( i != j)
				blobs[i].infection(blobs[j]);
		}
		blobs[i].updateSim();
	}
	
}