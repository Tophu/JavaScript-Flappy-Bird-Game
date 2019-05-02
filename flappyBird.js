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
bg.src = "images/bg-sm.png";
fg.src = "images/fg3.png";
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
var gravity = 1.5;

// Event Listener Key Down

document.addEventListener("keydown", moveUp);
function moveUp() {
  bY -= 25;
}

// Pipe coordinates

var pipe = [];
pipe[0] = {
  x: cvs.width,
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
    if (pipe[i].x == 125) {
      pipe.push({
        x: cvs.width,
        y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height
      });
    }

    // Detect collision, then reload the page
    if (bX + pidgeot.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY + pidgeot.height >= pipe[i].y + constant) || bY + pidgeot.height >= cvs.height - fg.height) {
      location.reload(); // Reload the page
    }
  }

  cxt.drawImage(fg, 0, cvs.height - fg.height);

  cxt.drawImage(pidgeot, bX, bY);

  bY += gravity;

  requestAnimationFrame(draw);

}
draw();