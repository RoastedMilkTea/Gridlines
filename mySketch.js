let coor_x = 0;
let coor_y = 0;
let inv = 50;

function setup() {
	createCanvas(800, 600);
	background(255);

	while (coor_y <= 800) {
		line(0, coor_y, 800, coor_y);
		coor_y += inv;

		while (coor_x <= 800) {
			line(coor_x, 0, coor_x, 600);
			coor_x += inv;
		}
	}
}

function draw() {
	fill(random(255), random(255), random(255));
	rect(int(random(16)) * 50, int(random(13)) * 50, 50, 50);
}
