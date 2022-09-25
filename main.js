video="";
status="";

function setup(){
canvas=createCanvas(300,280);
canvas.center();
video= createCapture(VIDEO);
video.size(300,280);
video.hide();
}

function draw(){
image(video,0,0,300,280);
}

function start(){
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded(){
console.log("Model Loaded!");
status=true;
}