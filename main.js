song="";
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;
function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modalloaded);
poseNet.on('pose',gotposes);
}
function modalloaded(){
console.log('posenet modal is loaded');
}
function draw(){
image(video,0,0,600,500);
fill("red");
stroke("red");
circle(leftwristX,leftwristY,20);
InNumberleftWristY=Number(leftwristY);
remove_decimals=floor(InNumberleftWristY);
volume=remove_decimals/500;
document.getElementById("volume").innerHTML="volume= "+ volume;
song.setVolume(volume);
}

function preload(){
song=loadSound("music.mp3");
}
function play(){
song.play();
song.setVolume(1);
song.rate(1);
}
function gotposes(results){
if(results.length>0){
 console.log(results);
 leftwristX=results[0].pose.leftWrist.x;
leftwristY=results[0].pose.leftWrist.y;
console.log("leftwristX="+leftwristX);
console.log("leftwristY=" +leftwristY);


rightwristX=results[0].pose.rightWrist.x;
rightwristY=results[0].pose.rightWrist.y;
console.log("rightwristX="+rightwristX);
console.log("rightwristY="+rightwristY);
}

}