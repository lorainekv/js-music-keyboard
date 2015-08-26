$(document).ready( function() {

  function soundNote(button, sound) {
    $(button).click( function (){
      var audio_tag = document.getElementById(sound);
      audio_tag.current_time = 0 // rewind the audio file
      audio_tag.play(); // this plays it exactly once
    });
  }

  var noteArray = ["a", "b", "c", "d", "e", "f", "g"]

  // Iterates and calls each note option
  for (i = 0; i < noteArray.length; i++){
    soundNote("." + noteArray[i], noteArray[i] +"Audio");
  }

});
