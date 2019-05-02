// Get ID of 'Canvas' from HTML
var cvs = document.getElementById('canvas');

// Get Context property of Canvas
var ctx = cvs.getContext('2d');

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

var fly = new Audio();
var scoresound = new Audio();
var scoresound2 = new Audio();
fly.src = "sounds/fly.mp3";
scoresound.src = "sounds/levelup1.mp3";
scoresound2.src = "sounds/levelup2.mp3";

// Const Variable
var gap = 100;
var constant = pipeNorth.height + gap

var bX = 10;
var bY = 150;
var gravity = 1.5;

var score = 0;

// Event Listener Key Down

document.addEventListener("keydown", moveUp);
document.addEventListener("click", moveUp2);

function moveUp() {
  bY -= 25;
  fly.play();
};

function moveUp2() {
  bY -= 25;
  fly.play();
}

// Pipe coordinates

var pipe = [];
pipe[0] = {
  x: cvs.width,
  y: 0
};

// Draw Images -- Including, Bird, Position, Wight & Height
function draw() {
  // Placing BG image on Canvas
  ctx.drawImage(bg, 0, 0);
  for (var i = 0; i < pipe.length; i++) {
    constant = pipeNorth.height + gap;
    ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
    ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);
    pipe[i].x--;
    if (pipe[i].x == 125) {
      pipe.push({
        x: cvs.width,
        y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height
      });
    }

    // Detect collision, then reload the page
    if (bX + pidgeot.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY + pidgeot.height >= pipe[i].y + constant) || bY + pidgeot.height >= cvs.height - fg.height) {
      location.reload(); // reload the page
    }

    if (pipe[i].x == 5) {
      score++;
      scoresound.play();
    }

    if (score >= 5) {
      scoresound2.play();
    }
  }

  ctx.drawImage(fg, 0, cvs.height - fg.height);

  ctx.drawImage(pidgeot, bX, bY);

  bY += gravity;

  ctx.fillStyle = "#000";
  ctx.font = "20px Verdana";
  ctx.fillText("Score: " + score, 10, cvs.height - 20);

  requestAnimationFrame(draw);

}
draw();