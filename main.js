song1 = "";
song2 = "";

function preload()
{
    song1 = loadSound("moh_moh_song.mp3");
    song2 = loadSound("raabta.mp3");
}
function setup()
{
    canvas = createCanvas(500,500);
    canvas.center;

    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video, 0, 0, 500, 500);
}
function play()
{
    song1.play();
}