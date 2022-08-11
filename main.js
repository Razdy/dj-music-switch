song1 = "ya.mp3"
song2 = "let-her-go.mp3"

function preload() {
    song1 = loadSound("ya.mp3");
    song2 = loadSound("let-her-go.mp3");
}

function setup() {
    canvas = createCanvas( 400, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image( video, 0, 0, 500, 500);
}

function play() {
    song1.play("ya.mp3");
    song2.play("let-her-go.mp3");
}

