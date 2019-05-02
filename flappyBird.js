// Get ID of 'Canvas' from HTML
var cvs = document.getElementById('canvas');

// Get Context property of Canvas
var cxt = cvs.getContext('2d');

// Load Images
var pidgeot = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

pidgeot.src = "images/pidgeot.png";
bg.src = "images/bg-wide-edit.png";
fg.src = "images/fg2.png";
pipeNorth.src = "images/pipeNorth2.png";
pipeSouth.src = "images/pipeSouth2.png";

// Load Audios

// var audioName = new Audio();
// audioName.src = "audio/fly.mp3";

// Const Variable
var gap = 85;
var constant = pipeNorth.height + gap

var bX = 10;
var bY = 150;
var gravity = 1;

// Event Listener Key Down

document.addEventListener("keydown", moveUp);
function moveUp() {
  bY -= 20;
}

// Pipe coordinates

var pipe = [];
pipe[0] = {
  x: cvs.clientWidth,
  y: 0
}

// Draw Images -- Including, Bird, Position, Wight & Height
function draw() {
  // Placing BG image on Canvas
  cxt.drawImage(bg, 0, 0);
  for (var i = 0; i < pipe.length; i++) {
    cxt.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
    cxt.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);
    pipe[i].x--;
  }

  // cxt.drawImage(fg, 0, cvs.height - fg.height);

  cxt.drawImage(pidgeot, bX, bY);

  bY += gravity;

  requestAnimationFrame(draw);

}
draw();