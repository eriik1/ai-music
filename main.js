function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotposes)
}
song1="";
song2="";
function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}
function play(){
    song.play()
    song.setVolume(0.3)
    song.rate(0.5)
}
function draw(){
    image(video,0,0,500,500);
}
function modelLoaded(){
    console.log("model is loaded")
}
function gotposes(results){
    if(results.length>0){
        console.log(results)
        rightwristx=results[0].pose.rightWrist.x
        rightwristy=results[0].pose.rightWrist.y
        leftwristx=results[0].pose.leftWrist.x
        leftwristy=results[0].pose.leftWrist.y
    }

}
rightwristx=0
rightwristy=0
leftwristx=0
leftwristy=0