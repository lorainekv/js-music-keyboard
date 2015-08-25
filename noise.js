$(document).ready( function() {

// attach click handler to the right button
// figure out which note to play
// make the audio tag play
var audio_tag = document.getElementById('aAudio');
audio_tag.current_time = 0 // rewind the audio file
audio_tag.play(); // this plays it exactly once



});
