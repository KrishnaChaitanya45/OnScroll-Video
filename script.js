// var frameNumber = 0, // start video at frame 0
//     // lower numbers = faster playback
//     playbackConst =1000, 
//     // get page height from video duration
//     setHeight = document.getElementById("set-height"), 
//     // select video element         
//     vid = document.getElementById('v0'); 

// // dynamically set the page height according to video length
// vid.addEventListener('loadedmetadata', function() {
 
//   setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";//set the height of the container width depedning upon video duration if video is large the height will be more and if playback speed is also large than the height increases and user have to scroll more to complete the video
// });

// // Use requestAnimationFrame for smooth playback
// function scrollPlay(){  
//   var frameNumber  = window.pageYOffset/playbackConst;
//   vid.currentTime  = frameNumber;
//   window.requestAnimationFrame(scrollPlay);
// }

// window.requestAnimationFrame(scrollPlay);

var framesinVideo = 0;//starts video from 0 frames
var playbackSpeed  = 2000;//its a constant that we are going to use to load that many pixels per scroll , more value = slow playback

//get aur div
const ourdiv = document.getElementById('intro');
const video = document.getElementById('video');
video.addEventListener('loadedmetadata',function(){
        ourdiv.style.height = Math.floor(video.duration)*playbackSpeed + "px";
});

function scrollToPlay(){
    var framesinVideo = window.pageYOffset/playbackSpeed;
    video.currentTime = framesinVideo;
    
    window.requestAnimationFrame(scrollToPlay);
}
window.requestAnimationFrame(scrollToPlay);