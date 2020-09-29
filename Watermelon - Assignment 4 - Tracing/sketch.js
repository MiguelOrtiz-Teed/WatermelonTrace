let angle = 0
let objectScale = 1
let greenHalfCircle = {
x: 0,
y: 0,
xWidth: 300,
yHeight: 300,
start: 0,
HowMuchPi: 3.14159265358979323846,
color: 'green',
transX: 300,
transY: 300,
xspeed: 2,
yspeed: -6,
}


let whiteHalfCircle = {
x: 0,
y: 0,
xWidth: 290,
yHeight: 290,
start: 0,
HowMuchPi: 3.14159265358979323846,
color: 255,
transX: 300,
transY: 300,
xspeed: 4,
yspeed: -5,
}


let redHalfCircle = {
x: 0,
y: 0,
xWidth: 285,
yHeight: 270,
start: 0,
HowMuchPi: 3.14159265358979323846,
color: 'red',
transX: 300,
transY: 300,
xspeed: 1,
yspeed: -3,
}


let pinkHalfCircle = {
x: 0,
y: 0,
xWidth: 200,
yHeight: 270,
start: 0,
HowMuchPi: 3.14159265358979323846,
color: 'pink',
transX: 300,
transY: 300,
xspeed: -.5,
yspeed: -1,
}


let seed01 = {
x: 60,
y: 90,
h: 25,
w: 12.5,
color: 'black',
transX: 300,
transY: 300,
angle: 45,
xspeed: 1,
yspeed: 10,
}


let seed02 = {
x: 60,
y: 90,
h: 25,
w: 12.5,
color: 'black',
transX: 300,
transY: 300,
angle: 75,
xspeed: 6,
yspeed: -3,
}


let seed03 = {
x: 45,
y: 45,
h: 25,
w: 12.5,
color: 'black',
transX: 300,
transY: 300,
angle: 90,
xspeed: 2,
yspeed: -3,
}


let seed04 = {
x: 25,
y: 100,
h: 25,
w: 12.5,
color: 'black',
transX: 300,
transY: 300,
angle: 0,
xspeed: 4,
yspeed: 1,
}


let seed05 = {
x: 0,
y: 0,
h: 25,
w: 12.5,
color: 'black',
transX: 215,
transY: 375,
angle: 15,
xspeed: 2,
yspeed: 7,
}


let seed05a = {
x: 0,
y: 0,
h: 9,
w: 4,
color: 'white',
transX: 220,
transY: 371,
angle: 15,
xspeed: 3,
yspeed: 8,
}


let seed06 = {
x: 0,
y: 0,
h: 25,
w: 12.5,
color: 'black',
transX: 300,
transY: 350,
angle: 51,
xspeed: 4,
yspeed: -3,
}


let seed06a = {
x: 0,
y: 0,
h: 12,
w: 3,
color: 'white',
transX: 302,
transY: 347,
angle: 51,
xspeed: 6,
yspeed: -3,
}


let seed07 = {
x: 0,
y: 0,
h: 25,
w: 12.5,
color: 'black',
transX: 350,
transY: 325,
angle: 2,
xspeed: 1,
yspeed: -8,
}


let seed07a = {
x: 0,
y: 0,
h: 12,
w: 3,
color: 'white',
transX: 347,
transY: 323,
angle: 2,
xspeed: 2,
yspeed: 1,
}



function setup() {
// put setup code here
createCanvas(600, 600);
}

function draw() {
// put drawing code here
background(135);


//tracing objects
traceObject(greenHalfCircle);
traceObject(whiteHalfCircle);
traceObject(redHalfCircle);
traceObject(seed01);
//traceObject(pinkHalfCircle);

push();
drawHalfCircle(greenHalfCircle);
moveX(greenHalfCircle);
moveY(greenHalfCircle);
pop();

drawHalfCircle(whiteHalfCircle);
moveX(whiteHalfCircle);
moveY(whiteHalfCircle);


push();
drawHalfCircle(redHalfCircle);
moveX(redHalfCircle);
moveY(redHalfCircle);
pop();


push();
stroke('rgb(0,255,0)');
strokeWeight(2);
drawHalfCircle(pinkHalfCircle);
grow(pinkHalfCircle);
pop();

push();
drawSeed(seed01);
moveX(seed01);
moveY(seed01);
pop();

drawSeed(seed02);
traceObject(seed02);
moveX(seed02);
moveY(seed02);


drawSeed(seed03);
traceObject(seed03);
moveX(seed03);
moveY(seed03);


drawSeed(seed04);
traceObject(seed04);
moveX(seed04);
moveY(seed04);

//with white highlight
drawSeed(seed05);
traceObject(seed05);
moveX(seed05);
moveY(seed05);
drawSeed(seed05a);
traceObject(seed05a);
moveX(seed05a);
moveY(seed05a);

//with white highlight
drawSeed(seed06);
traceObject(seed06);
moveX(seed06);
moveY(seed06);
drawSeed(seed06a);
traceObject(seed06a);
moveX(seed06a);
moveY(seed06a);

//with white highlight
drawSeed(seed07);
push();
traceObject(seed07);
pop();
moveX(seed07);
moveY(seed07);
drawSeed(seed07a);
traceObject(seed07a);
moveX(seed07a);
moveY(seed07a);
}

function drawHalfCircle(greenHalfCircle) {
push();
noStroke();
translate(greenHalfCircle.transX, greenHalfCircle.transY)
fill(greenHalfCircle.color)
arc(greenHalfCircle.x, greenHalfCircle.y, greenHalfCircle.xWidth, greenHalfCircle.yHeight, greenHalfCircle.start, greenHalfCircle.HowMuchPi)
pop();
}

function drawSeed(seed01){
push();
noStroke();
fill(seed01.color)
translate(seed01.transX, seed01.transY)
rotate(seed01.angle)
ellipse(seed01.x, seed01.y, seed01.h, seed01.w)
pop();
}

function traceObject(greenHalfCircle) {
stroke('green')
line(greenHalfCircle.transX, 0, greenHalfCircle.transX, height)
line(0, greenHalfCircle.transY, width, greenHalfCircle.transY)
}

function traceObject(seed01) {
stroke('green')
line(seed01.transX, 0, seed01.transX, height)
line(0, seed01.transY, width, seed01.transY)
}

function moveX(greenHalfCircle) {
if (greenHalfCircle.transX > width || greenHalfCircle.transX < 0){
greenHalfCircle.xspeed = greenHalfCircle.xspeed *-1;
}
greenHalfCircle.transX = greenHalfCircle.transX + greenHalfCircle.xspeed;
}
function moveY(greenHalfCircle){
if (greenHalfCircle.transY > height || greenHalfCircle.transY < 0){
greenHalfCircle.yspeed = greenHalfCircle.yspeed *-1;
}
greenHalfCircle.transY = greenHalfCircle.transY + greenHalfCircle.yspeed;
}

function grow(pinkHalfCircle){
if (pinkHalfCircle.xWidth > 500 || pinkHalfCircle.xWidth < 300){
  objectScale = objectScale *-1;
} pinkHalfCircle.xWidth = objectScale + pinkHalfCircle.xWidth;
if (pinkHalfCircle.yHeight > 500 || pinkHalfCircle.yHeight < 300){
  objectScale = objectScale * -1;
} pinkHalfCircle.yHeight = objectScale + pinkHalfCircle.yHeight;
}
