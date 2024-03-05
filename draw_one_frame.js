//var x = 300;
//var y = 300;
//var a = 100;
//var b = 100;
var CoordX1 = 0;//middle circle coord
var CoordY1 = 0;
// this is the fireworks example
//https://editor.p5js.org/anjchang/sketches/vL3ul5F73 maybe help with size changing
function draw_one_frame() {
	angleMode(DEGREES);
	var circleSize = height/1.5; //establish circle size
	var innerCircleSize = circleSize/1.5;
	translate(width/2, height/2); //draw from center
	fill(255)
	stroke(255);
	
	

	fill(0,0,0);
	ellipse(CoordX1,CoordY1, circleSize, circleSize); //base circle


	
	point(CoordX1+(circleSize/2), CoordY1-(circleSize/2));
	point(CoordX1+(circleSize/2), CoordY1+(circleSize/2));

	point(CoordX1, CoordY1-(innerCircleSize/2)) //top start
	point(CoordX1, CoordY1+(innerCircleSize/2)) //bottom end??

	//var bezierYPtStart = CoordY1-(innerCircleSize/2); //Y position start of bezier curves
	//var bezierYPtEnd = CoordY1+(innerCircleSize/2); //Y position end of bezier curves

	//control points
	
	//var bezierCtrlX1 = CoordX1+(circleSize/1.6);
	//var bezierYPtdiff = (circleSize/1.4)
	//var bezierCtrlY1 = CoordY1- bezierYPtdiff;
	//var bezierCtrlY2 = CoordY1+ bezierYPtdiff;

	//bg shapes starting from right to left
	//fill(200);
	
	//bezier(CoordX1, bezierYPtStart, bezierCtrlX1, bezierCtrlY1, bezierCtrlX1, bezierCtrlY2, CoordX1, bezierYPtEnd);

	fill('blue');
	arc(CoordX1,CoordY1,innerCircleSize+(innerCircleSize/5.5), innerCircleSize, 270, 90);
	fill('brown');
	arc(CoordX1,CoordY1,innerCircleSize+(innerCircleSize/10), innerCircleSize, 270, 90);
	
	//left side
	fill('blue');
	arc(CoordX1,CoordY1,innerCircleSize+(innerCircleSize/5.5), innerCircleSize, 90, 270);
	fill('brown');
	arc(CoordX1,CoordY1,innerCircleSize+(innerCircleSize/10), innerCircleSize, 90, 270);

	
	//DELETE - BASE INNER CIRCLE FOR MAPPING 
	fill(255);
	ellipse(CoordX1,CoordY1,innerCircleSize,innerCircleSize);
	//right to left inner circle
	fill('#9400D3');//light purp
	arc(CoordX1,CoordY1,innerCircleSize, innerCircleSize, 270, 90);
	fill('#4B0082');//dark purp
	arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/9.9), innerCircleSize, 270, 90);
	fill('#0000FF');//blue
	arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/4.9), innerCircleSize, 270, 90);
	fill('#00FF00');//green
	arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/3), innerCircleSize, 270, 90);
	fill('#FFFF00');//yellow
	arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/2), innerCircleSize, 270, 90);
	fill('#FF7F00');//orange
	arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/1.5), innerCircleSize, 270, 90);
	fill('#FF0000');//red
	arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/1.2), innerCircleSize, 270, 90);


	fill('#FF0000');//light purp
	arc(CoordX1,CoordY1,innerCircleSize, innerCircleSize, 90, 270);
	fill('#FF7F00');//dark purp
	arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/9.9), innerCircleSize, 90, 270);
	fill('#FFFF00');//blue
	arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/4.9), innerCircleSize, 90, 270);
	fill('#00FF00');//green
	arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/3), innerCircleSize, 90, 270);
	fill('#0000FF');//yellow
	arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/2), innerCircleSize, 90, 270);
	fill('#4B0082');//orange
	arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/1.5), innerCircleSize, 90, 270);
	fill('#9400D3');//red
	arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/1.2), innerCircleSize, 90, 270);
	

	
	
	//beginShape();
	//vertex(CoordX1+(circleSize/2), CoordY1+(circleSize/2));
	//bezierVertex(40,60, 30, 80, 90, 20);
	//vertex(CoordX1-(circleSize/2), CoordY1-(circleSize/2));
	//endShape(CLOSE);

	//background(255);
	//x += 2;
	//y += 2;
	//a -= 2;
	//b -= 2;
	//strokeWeight(1);
	//translate(width / 2, height / 2);
	//for (var i = 0; i < 15; i++) {
		//for (var k = 0; k < 20; k++) {
			//stroke(255, 255, 255);
			//rotate(PI / 12.0);
			//fill(255, 255 - i * 10, 255 - k * 10);
			//line(a % 100, b % 100, x % 300, y % 300);
			//ellipse((x + i * 20) % width, (y + k * 20) % height, i + 4, i + 4);
			//drawtriangle((a - i * 20) % width, (b - k * 20) % height, k / 8);
			//rect(x % width, y % height, k + 10, k + 10);
			//fill(0, i * 10, 255 - k * 10);
			//ellipse((x - i * 20) % width, (y - k * 20) % height, i + 3, i + 3);
			//rotate(PI / 24.0);
			//fill(255 - (i + k) * 5, (i + k) * 7, i * 20);
			//drawtriangle((a + i * 20) % width, (b + k * 20) % height, k / 8);
			//rect(a % width, b % height, k + 5, k + 5);
			//drawflower(k, x);
		//}
	//}

}

function drawtriangle(x, y, r) {
	triangle(x, y, x + 7 * r, y - 13.75 * r, x + 14 * r, y);
}

function drawflower(i, k) {
	if (i % 2 == 1) {
		fill(255, (k * 0.4) % 255, 30);
		stroke(k % 255, 255, 0);
		arc(0, 0, 150 + i + 150 * sin(k * PI / 24), 150, 0, PI / 40);
	} else {
		fill(k % 255, 0, 255);
		stroke(0, (k * 0.4) % 255, 255);
		arc(0, 0, (100 + 100 * cos(k * PI / 24)) % 255, 50, 0, PI / 20);
	}
}