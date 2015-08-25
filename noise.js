$(document).ready( function() {

  function soundNote(button, sound) {
    $(button).click( function (){
      var audio_tag = document.getElementById(sound);
      audio_tag.current_time = 0 // rewind the audio file
      audio_tag.play(); // this plays it exactly once
    });
  }

  soundNote(".c", "cAudio");
  soundNote(".d", "dAudio");
  soundNote(".e", "eAudio");
  soundNote(".f", "fAudio");
  soundNote(".g", "gAudio");
  soundNote(".a", "aAudio");
  soundNote(".b", "bAudio");

});
