var blob;

var blobs = [];
var numberOfHealthyBlobs = 400;
var numberOfInfectedBlobs = 10;
var percentOfRunning = 70;
function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	blob = new Blob(width/2, height/2, 16, "Healthy", 0, 0, 1);
	for( var i = 0; i < numberOfHealthyBlobs + numberOfInfectedBlobs; i++) {
		var x = random(-width, width*2);
		var y = random(-height, height*2);
		var ifRunning = random(0, 100);
		var velx = 0;
		var vely = 0;
		if (ifRunning < percentOfRunning) {
			velx = random(-1,1)*random();
			vely = random(-1,1)*random();
		}
		if( i < numberOfHealthyBlobs)
			blobs[i] = new Blob(x, y, 16, "Healthy", velx, vely, 0);
		else
			blobs[i] = new Blob(x, y, 16, "Infected", velx, vely, 0);
	}
}

function draw() {
	background(0);
	translate(width/2-blob.pos.x, height/2-blob.pos.y);
	
	for(var i = 0; i < blobs.length; i++) {
		blobs[i].show();
	}

	blob.show();
	blob.update();
	
	for( var i = 0; i < blobs.length; i++) {
		blobs[i].show();
		for(var j = 0; j < blobs.length; j++){
			if ( i != j)
				blobs[i].infection(blobs[j]);
		}
		blobs[i].update();
	}
	
}