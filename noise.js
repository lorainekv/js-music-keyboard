$(document).ready( function() {

// -- Clicking to make sounds --
  function playSound(sound) {
    var audio_tag = document.getElementById(sound);
    audio_tag.current_time = 0;
    audio_tag.playbackRate = 3.0;
    audio_tag.play();
  }

  function clickSound(button, sound) {
    $(button).click( function (){
      playSound(sound);
    });
  }

  var noteArray = ["a", "b", "c", "d", "e", "f", "g"]

  // Iterates and calls each note option
  for (i = 0; i < noteArray.length; i++){
    clickSound("." + noteArray[i], noteArray[i] + "Audio");
  }

// -- Keypress to make sounds --

var keyboard_map = {
    65 : "c",
    83 : "d",
    68 : "e",
    70 : "f",
    74 : "g",
    75 : "a",
    76 : "b"
    };

  function keySound (keyboard_map) {
    $( "body" ).keydown(function( event ) {
      var keycode = event.which; // for clarity
      if (keycode in keyboard_map) {
        $("." + keyboard_map[keycode]).addClass("active");
        var sound = keyboard_map[keycode] + "Audio"
        playSound(sound);
      }
    });

    $( "body" ).keyup(function( event ) {
      var keycode = event.which; // for clarity
      if (keycode in keyboard_map) {
        $("." + keyboard_map[keycode]).removeClass("active");
      }
    });
  }

  keySound(keyboard_map);

});
