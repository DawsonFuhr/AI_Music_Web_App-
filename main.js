song = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
song1_status = "";
song2_status = "";

function preload()
{
	song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3")
}

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
	console.log('PoseNet Is Intitialized')
}

function draw() {
	image(video, 0, 0, 600, 500);

	song_status = song.isPlaying();
	

	fill("#FF0000");
	stroke("#FF0000");
	
	if(song_status == false)
		{
		
			song.play();
			
			document.getElementById("song").innerHTML = "Playing - Harry Potter Theme Song"
			alert(alert);
	if(scoreLeftWrist > 0.2)
	{
		circle(leftWristX,leftWristY,20);
			song.stop();

		
		}
		
	}
}




function gotPoses(results)
{
	if(results.length > 0)
  {
	console.log(results);
	scoreRightWrist =  results[0].pose.keypoints[10].score;
	scoreLeftWrist =  results[0].pose.keypoints[9].score;
	console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);
	
	rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
	console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

	leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
	console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
		
}
}