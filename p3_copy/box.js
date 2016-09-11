$(document).ready(function() {
    $('div').hover(
        function() { $(this).fadeTo( 'slow', '.8'); },
        function() { $(this).fadeTo( 'slow', '1'); }
    )
$(".top-left").click(function() {
  sound.play();
});
$(".top-right").click(function() {
  sound1.play();
});
$(".top").click(function() {
  sound2.play();
});
$(".bottom-left").click(function() {
  sound3.play();
});
$(".bottom-right").click(function() {
  sound4.play();
});
$(".bottom").click(function() {
  sound5.play();
});
$(".middle-left").click(function() {
  sound6.play();
});
$(".middle-right").click(function() {
  sound7.play();
});
$(".container").click(function() {
  sound8.play();
});
});

var sound = document.createElement("audio");
sound.src = "ow.m4a";
sound.autoPlay = false;
sound.preLoad = true;

var sound1 = document.createElement("audio");
sound1.src = "glasses.m4a";
sound1.autoPlay = false;
sound1.preLoad = true;

var sound2 = document.createElement("audio");
sound2.src = "yawn.m4a";
sound2.autoPlay = false;
sound2.preLoad = true;

var sound3 = document.createElement("audio");
sound3.src = "toilet.m4a";
sound3.autoPlay = false;
sound3.preLoad = true;

var sound4 = document.createElement("audio");
sound4.src = "water.m4a";
sound4.autoPlay = false;
sound4.preLoad = true;

var sound5 = document.createElement("audio");
sound5.src = "teeth.m4a";
sound5.autoPlay = false;
sound5.preLoad = true;

var sound6 = document.createElement("audio");
sound6.src = "springs.m4a";
sound6.autoPlay = false;
sound6.preLoad = true;

var sound7 = document.createElement("audio");
sound7.src = "snoring.m4a";
sound7.autoPlay = false;
sound7.preLoad = true;

var sound8 = document.createElement("audio");
sound8.src = "father.mp3";
sound8.autoPlay = false;
sound8.preLoad = true;
