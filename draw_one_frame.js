//var x = 300;
//var y = 300;
//var a = 100;
//var b = 100;

//var CoordX1 = 0;//middle circle coord
//var CoordY1 = 0;

// this is the fireworks example
//https://editor.p5js.org/anjchang/sketches/vL3ul5F73 maybe help with size changing


function draw_one_frame(cur_frac) {
	background('white');
	angleMode(DEGREES);
	//translate(width/2, height/2); //draw from center
	var circleSize = height/2.5; //establish circle size
	noStroke();
	GridDraw(cur_frac, circleSize);
	
}	

function GridDraw(cur_frac, circleSize){

	for (let X = 0; X<=width; X+= width/8) {
		for (let Y=0; Y<= height; Y+= height/4) {
			drawSphere(cur_frac, X, Y, circleSize/1.85);	
		}
	}
	for (let X = 0; X<=width; X+= width/4) {
		for (let Y=0; Y<= height; Y+= height/2) {
			drawSphere(cur_frac, X, Y, circleSize);	
		}
	}

	
}


function BGDraw (cur_frac, CoordX1, CoordY1, circleSize) {

	//const ellipArray = ['#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854', '#f6cda8','#fbfcf5', '#d6dd9f', '#aebc43','#a2863c','#955233','#4a2a24', '#24171e'];
	//let colourMap =int(map(cur_frac, 0, 1, 0,ellipArray.length))
	//fill(ellipArray[colourMap])

	//ellipse(CoordX1, CoordY1, circleSize*1.1, circleSize*1.1)
}

function drawSphere(cur_frac, CoordX1, CoordY1, circleSize) {

	var innerCircleSize = circleSize/1.5;
	//pick 12 colours for final 
	//maybe turn this into a nested array???
	const fill_Array = ['#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854', '#f6cda8','#fbfcf5', '#d6dd9f', '#aebc43','#a2863c','#955233','#4a2a24', '#24171e'];
	const fill_Array1 = ['#24171e','#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854', '#f6cda8','#fbfcf5', '#d6dd9f', '#aebc43','#a2863c','#955233','#4a2a24'];
	const fill_Array2 = ['#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854', '#f6cda8','#fbfcf5', '#d6dd9f', '#aebc43','#a2863c','#955233'];
	const fill_Array3 = ['#955233','#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854', '#f6cda8','#fbfcf5', '#d6dd9f', '#aebc43','#a2863c'];
	const fill_Array4 = ['#a2863c','#955233','#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854', '#f6cda8','#fbfcf5', '#d6dd9f', '#aebc43'];
	const fill_Array5 = ['#aebc43','#a2863c','#955233','#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854', '#f6cda8','#fbfcf5', '#d6dd9f'];
	const fill_Array6 = ['#d6dd9f','#aebc43','#a2863c','#955233','#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854', '#f6cda8','#fbfcf5'];
	const fill_Array7 = ['#fbfcf5','#d6dd9f','#aebc43','#a2863c','#955233','#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854', '#f6cda8'];
	const fill_Array8 = ['#f6cda8','#fbfcf5','#d6dd9f','#aebc43','#a2863c','#955233','#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854'];
	const fill_Array9 = ['#ea9854','#f6cda8','#fbfcf5','#d6dd9f','#aebc43','#a2863c','#955233','#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68','#c56161'];
	const fill_Array10 = ['#c56161','#ea9854','#f6cda8','#fbfcf5','#d6dd9f','#aebc43','#a2863c','#955233','#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68'];
	const fill_Array11 = ['#a83b68','#c56161','#ea9854','#f6cda8','#fbfcf5','#d6dd9f','#aebc43','#a2863c','#955233','#4a2a24','#24171e','#0f101c','#351a2f'];
	const fill_Array12 = ['#351a2f','#a83b68','#c56161','#ea9854','#f6cda8','#fbfcf5','#d6dd9f','#aebc43','#a2863c','#955233','#4a2a24','#24171e','#0f101c'];

	
	let colourMap =int(map(cur_frac, 0, 1, 0,fill_Array.length))

	

	for (let i = 0; i < 13; i ++) {
		
		if (i == 0) {
			fill(fill_Array[colourMap]);
			arc(CoordX1, CoordY1, circleSize+circleSize/30, circleSize, 270, 90);
			fill(fill_Array12[colourMap]);
			arc(CoordX1, CoordY1, circleSize+circleSize/30, circleSize, 90, 270);
		} else if (i == 1) {
			fill(fill_Array1[colourMap]);
			ellipse(CoordX1+circleSize/5.2, CoordY1, circleSize/1.55, circleSize/1.2)
			fill(fill_Array11[colourMap]);
			arc(CoordX1-circleSize/5.2, CoordY1, circleSize/1.55, circleSize/1.2, 60, 300);
		} else if (i == 2) {
			fill(fill_Array2[colourMap]);
			ellipse(CoordX1+circleSize/6.2, CoordY1, circleSize/1.5, circleSize/1.3)
			fill(fill_Array10[colourMap]);
			arc(CoordX1-circleSize/6.2, CoordY1, circleSize/1.5, circleSize/1.3, 65, 295);
		} else if (i == 3) {
			fill(fill_Array3[colourMap]);
			ellipse(CoordX1+circleSize/8.2, CoordY1, circleSize/1.45, circleSize/1.4)
			fill(fill_Array9[colourMap]);
			arc( CoordX1-circleSize/8.2, CoordY1, circleSize/1.45, circleSize/1.4, 70, 290);
		} else if (i == 4) {
			fill(fill_Array4[colourMap]);
			arc(CoordX1+circleSize/12,CoordY1,circleSize/1.45, circleSize/1.46, 0, 360);
			fill(fill_Array8[colourMap]);
			arc(CoordX1-circleSize/12,CoordY1,circleSize/1.45, circleSize/1.46, 80, 280);	
		} else if (i == 5) {	
			fill(fill_Array5[colourMap]);
			arc(CoordX1+circleSize/22,CoordY1,circleSize/1.5, circleSize/1.48, 0, 360);
			fill(fill_Array7[colourMap]);
			arc(CoordX1-circleSize/22,CoordY1,circleSize/1.5, circleSize/1.48, 83, 277);
		} else if (i == 6){
			fill(fill_Array6[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize, innerCircleSize, 270, 90);
			fill(fill_Array6[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize, innerCircleSize, 90, 270);
		} else if (i == 7) {
			fill(fill_Array7[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/9.9), innerCircleSize, 270, 90);
			fill(fill_Array5[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/9.9), innerCircleSize, 90, 270);	
		} else if (i == 8) {	
			fill(fill_Array8[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/4.9), innerCircleSize, 270, 90);
			fill(fill_Array4[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/4.9), innerCircleSize, 90, 270);
		}else if (i == 9) {	
			fill(fill_Array9[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/3), innerCircleSize, 270, 90);
			fill(fill_Array3[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/3), innerCircleSize, 90, 270);
		}else if (i == 10) {
			fill(fill_Array10[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/2), innerCircleSize, 270, 90);
			fill(fill_Array2[colourMap]);
		arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/2), innerCircleSize, 90, 270);
		}else if (i == 11) {	
			fill(fill_Array11[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/1.5), innerCircleSize, 270, 90);
			fill(fill_Array1[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/1.5), innerCircleSize,  90,270);
		}else if (i == 12) {	
			fill(fill_Array12[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/1.2), innerCircleSize, 270, 90);
			fill(fill_Array[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/1.2), innerCircleSize, 90, 270);
		}
	
}

}


/*
for (let i = 0; i < 13; i ++) {
		
	let colourMap =int(map(cur_frac, 0, 1, 0,fill_Array.length))

	if (i == 0) {
		fill(fill_Array12[colourMap]);
		arc(CoordX1, CoordY1, circleSize+circleSize/30, circleSize, 90, 270);
	} else if (i == 1) {
		fill(fill_Array11[colourMap]);
		arc(CoordX1-circleSize/5.2, CoordY1, circleSize/1.55, circleSize/1.2, 60, 300);
	} else if (i == 2) {
		fill(fill_Array10[colourMap]);
		arc(CoordX1-circleSize/6.2, CoordY1, circleSize/1.5, circleSize/1.3, 65, 295);
	} else if (i == 3) {
		fill(fill_Array9[colourMap]);
		arc( CoordX1-circleSize/8.2, CoordY1, circleSize/1.45, circleSize/1.4, 70, 290);
	} else if (i == 4) {
		fill(fill_Array8[colourMap]);
		arc(CoordX1-circleSize/12,CoordY1,circleSize/1.45, circleSize/1.46, 80, 280);
	} else if (i == 5) {	
		fill(fill_Array7[colourMap]);
		arc(CoordX1-circleSize/22,CoordY1,circleSize/1.5, circleSize/1.48, 83, 277);
	} else if (i == 6){
		fill(fill_Array6[colourMap]);
		arc(CoordX1,CoordY1,innerCircleSize, innerCircleSize, 90, 270);
	} else if (i == 7) {
		fill(fill_Array5[colourMap]);
		arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/9.9), innerCircleSize, 90, 270);	
	} else if (i == 8) {	
		fill(fill_Array4[colourMap]);
		arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/4.9), innerCircleSize, 90, 270);
	}else if (i == 9) {	
		fill(fill_Array3[colourMap]);
		arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/3), innerCircleSize, 90, 270);
	}else if (i == 10) {
		fill(fill_Array2[colourMap]);
		arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/2), innerCircleSize, 90, 270);
	}else if (i == 11) {	
		fill(fill_Array1[colourMap]);
		arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/1.5), innerCircleSize,  90,270);
	}else if (i == 12) {	
		fill(fill_Array[colourMap]);
		arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/1.2), innerCircleSize, 90, 270);
	}

}*/

/*
for (let i = 0; i < 9; i ++) {
		
	let colourMap =int(map(cur_frac, 0, 1, 0,fill_Array.length))

	if (i == 0) {
		fill(fill_Array8[colourMap]);
		arc(CoordX1,CoordY1,innerCircleSize+(innerCircleSize/5.5), innerCircleSize, 90, 270);
	} else if (i == 1) {	
		fill(fill_Array7[colourMap]);
		arc(CoordX1,CoordY1,innerCircleSize+(innerCircleSize/10), innerCircleSize, 90, 270);
	} else if (i == 2){
		fill(fill_Array6[colourMap]);
		arc(CoordX1,CoordY1,innerCircleSize, innerCircleSize, 90, 270);
	} else if (i == 3) {
		fill(fill_Array5[colourMap]);
		arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/9.9), innerCircleSize, 90, 270);	
	} else if (i == 4) {	
		fill(fill_Array4[colourMap]);
		arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/4.9), innerCircleSize, 90, 270);
	}else if (i == 5) {	
		fill(fill_Array3[colourMap]);
		arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/3), innerCircleSize, 90, 270);
	}else if (i == 6) {
		fill(fill_Array2[colourMap]);
		arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/2), innerCircleSize, 90, 270);
	}else if (i == 7) {	
		fill(fill_Array1[colourMap]);
		arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/1.5), innerCircleSize, 90, 270);
	}else if (i == 8) {	
		fill(fill_Array[colourMap]);
		arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/1.2), innerCircleSize, 90, 270);
	}

}


*/

/*
	//LEFT SIDE 
	for (let i = 0; i < 9; i ++) {
		
		const fill_Array = ['#FF0000', '#FF7F00','#FFFF00','#00FF00','#0000FF','#4B0082', '#9400D3', 'brown', 'white'];
		
		fill(fill_Array[i]);

		if (i < 2){
			arc(CoordX1,CoordY1,innerCircleSize+(innerCircleSize/sizeAdjust_Array[i]), innerCircleSize, 90, 270);
			
		} else if (i == 2) {
		
			arc(CoordX1,CoordY1,innerCircleSize, innerCircleSize, 90, 270);
		} else {

	
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/sizeAdjust_Array[i]), innerCircleSize, 90, 270);
		}
	}

*/

	
/*
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
	
*/
	
	
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

//}

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