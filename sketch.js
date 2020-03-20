var blob;

var blobsS = [];
var blobsR = [];

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	blob = new Blob(width/2, height/2, 16, "Healthy", 0, 0, 1);
	
	for( var i = 0; i < 50; i++) {
		var x = random(-width, width*2);
		var y = random(-height, height*2);
		blobsS[i] = new Blob(x, y, 16, "Healthy", 0, 0, 0);
	}
	for( var i = 0; i < 50; i++) {
		var x = random(-width, width*2);
		var y = random(-height, height*2);
		var velx = random();
		var vely = random();
		blobsR[i] = new Blob(x, y, 16, "Infected", velx, vely, 0);
	}
	
}

function draw() {
	background(0);
	translate(width/2-blob.pos.x, height/2-blob.pos.y);
	
	for(var i = 0; i < blobsS.length; i++) {
		blobsS[i].show();
	}

	for(var i = 0; i < blobsR.length; i++) {
		blobsR[i].show();
	}

	blob.show();
	blob.update();
	
	for( var i = 0; i < blobsS.length; i++) {
		blobsS[i].show();
		blobsS[i].update();
	}
	for( var i = 0; i < blobsR.length; i++) {
		blobsR[i].show();
		blobsR[i].update();
	}
	
}