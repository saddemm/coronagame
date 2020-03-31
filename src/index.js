function addHeadingToPage() {
    var heading = document.getElementById('heading')

    heading.innerHTML = 'Merry Christmas!'
}

const canvas = document.getElementById('canvas-container')
const ctx = canvas.getContext('2d')

var x = canvas.width/2;
var y = canvas.height/2;
var n = 2;
var upKey = 122;
var downKey = 115;
var leftKey = 113;
var rightKey = 100;
var interval = setInterval(null, 10);;

var authorizedKeys = [downKey, upKey, leftKey, rightKey];

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
function direction(keyCode) {
    switch (keyCode) {
        case upKey:
            clearInterval(interval)
            interval = setInterval(moveUp, 10);
            break;
        case downKey:
            clearInterval(interval)

            interval = setInterval(moveDown, 10);
            break;
        case leftKey:
            clearInterval(interval)

            interval = setInterval(moveLeft, 10);
            break;
        case rightKey:
            clearInterval(interval)

            interval = setInterval(moveRight, 10);
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
