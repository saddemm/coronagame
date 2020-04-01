const canvas = document.getElementById('canvas-container')
const ctx = canvas.getContext('2d')

var n = 2;
var x = canvas.width/2;
var y = canvas.height/2;
var tirx = x;
var tiry = y;
const upKey = 122;
const downKey = 115;
const leftKey = 113;
const rightKey = 100;
const pauseKey = 32;
const tirKey = 13;
var interval = setInterval(null, 10);;
var intervalTir = setInterval(null, 10);;
const speed = 10;
const tirSpeed = speed/2;

var authorizedKeys = [downKey, upKey, leftKey, rightKey, pauseKey, tirKey];

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillRect(x, y, 33, 33);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function moveUp(){
    if (y < 1) {
        clearInterval(interval);
    }
    y -= n;
    draw();
}

function moveDown(){
    y += n;
    draw();
}

function moveLeft(){
    x -= n;
    draw();
}

function moveRight(){
    x += n;
    draw();
}

function tir() {
    console.log('TIIIR')
    if (tiry < 1) {
        clearInterval(intervalTir);
        tiry =y;
    }
    tiry -= n;

    ctx.beginPath();
    ctx.fillRect(x, tiry, 10, 10);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function direction(keyCode) {
    switch (keyCode) {
        case upKey:
            clearInterval(interval)
            interval = setInterval(moveUp, speed);
            break;
        case downKey:
            clearInterval(interval)

            interval = setInterval(moveDown, speed);
            break;
        case leftKey:
            clearInterval(interval)

            interval = setInterval(moveLeft, speed);
            break;
        case rightKey:
            clearInterval(interval)

            interval = setInterval(moveRight, speed);
            break;
        case tirKey:

            intervalTir = setInterval(tir, tirSpeed);
            break;
        case pauseKey:
            clearInterval(interval)
            console.log('x: '+x+' y: '+y)
            break;
        default:
            console.log('Sorry, we are out of PROBLEM!');
    }
}

//setInterval(draw, 10);
document.onkeypress = function (e) {
    console.log(e.keyCode);

    e = e || window.event;

    if (authorizedKeys.includes(e.keyCode)) {
        direction(e.keyCode);
    }
};
