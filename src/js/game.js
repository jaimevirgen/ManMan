// Game Logic

window.onload = function() {

    // updating progress bar length
    document.getElementById("progressValue").setAttribute("style","width:103px");

};

var vendors = ['webkit', 'moz'];
for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame =
        window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
}

var canvas = document.getElementById('gameContainer'),
    cw = canvas.width,
    ch = canvas.height,
    cx = null,
    fps = 30,
    man = {x:200, y:100, w:5, h:5},
    interval     =    1000/fps,
    lastTime     =    (new Date()).getTime(),
    currentTime  =    0,
    delta = 0;

function gameLoop() {
    window.requestAnimationFrame(gameLoop);

    currentTime = (new Date()).getTime();
    delta = (currentTime-lastTime);

    if(delta > interval) {

        cx.clearRect(0,0,cw,ch);

        cx.fillStyle = 'black';
        cx.fillRect( man.x, man.y , man.w, man.h);
        cx.fill();

        lastTime = currentTime - (delta % interval);
    }
}

if (typeof (canvas.getContext) !== undefined) {
    cx = canvas.getContext('2d');

    gameLoop();
}