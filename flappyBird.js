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
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";

// Load Audios

// var audioName = new Audio();
// audioName.src = "audio/fly.mp3";

// Const Variable
var gap = 75;
var constant = pipeNorth.height + gap

var bX = 10;
var bY = 150;

// Draw Images -- Including, Bird, Position, Wight & Height

function draw() {
  // Placing BG image on Canvas
  cxt.drawImage(bg, 0, 0);

  cxt.drawImage(pipeNorth, 100, 0);
  cxt.drawImage(pipeSouth, 100, 0 + constant);

  cxt.drawImage(fg, 0, cvs.height - fg.height);

  cxt.drawImage(pidgeot, bX, bY);

  requestAnimationFrame(draw);

}
draw();