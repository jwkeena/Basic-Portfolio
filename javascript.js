function warning() {
    alert("I tried to warn you in the subject box. But you just wouldn't listen, would you.")
}

control = 0

function startVideo() {
    control = 1;
    hideAll();
    onYouTubeIframeAPIReady();
}

function hideAll() {
    var all = document.getElementById("all")
    all.style.display = "none"
}

// From https://cobwwweb.com/fullsize-loop-background-video-youtube
// Loads the YouTube IFrame API JavaScript code.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

// Inserts YouTube JS code into the page.
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

// onYouTubeIframeAPIReady() is called when the IFrame API is ready to go.
function onYouTubeIframeAPIReady() {
  if (control === 1) {
    player = new YT.Player('player', {
    videoId: 'oM8fi_OZ9TE', // the ID of the video (mentioned above)
    playerVars: {
      autoplay: 1, // start automatically
      controls: 0, // don't show the controls (we can't click them anyways)
      modestbranding: 1, // show smaller logo
      loop: 1, // loop when complete
      playlist: 'oM8fi_OZ9TE' // required for looping, matches the video ID
    }
  });
} else {
    control = 0;
}} 