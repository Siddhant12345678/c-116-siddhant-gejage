nose_x=0;
nose_y=0;
function preload(){
    mustache=loadImage("https://i.postimg.cc/0Qq11FBB/m.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNET=ml5.poseNet(video,modelLoaded);
    poseNET.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    image(mustache,nose_x-30,nose_y-9,60,60);
}
function take_snapshot(){
    save('YourImage.png');
}
function modelLoaded(){
    console.log('poseNet is Initialized');
}
function gotPoses(result){
    if(result.length>0){
        console.log(result);
        console.log("nose_x= "+result[0].pose.nose.x);
        console.log("nose_y= "+result[0].pose.nose.y);

        nose_x=result[0].pose.nose.x;
        nose_y=result[0].pose.nose.y;
    }
}