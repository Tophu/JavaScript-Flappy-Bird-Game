// Get ID of 'Canvas' from HTML
var cvs = document.getElementById('canvas');

// Get Context property of Canvas
var cxt = cvs.getContext('2d');

// Load Images
var imageName = new Image();
imageName.src = "images/bg.png";

// Load Audios
var audioName = new Audio();
imageName.src = "audio/fly.mp3";

// Draw Images -- Including, Bird, Position, Wight & Height

cxt.drawImage(imageName, X, Y, Width, Height);

