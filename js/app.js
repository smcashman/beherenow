$(document).ready(function() {


$(".boxOne").hover(function() {
$(".labelOne").toggle();
});



meditationQuotes = ["When meditation is mastered, the mind is unwavering like the flame of a candle in a windless place.","Your worst enemy cannot harm you as much as your own thoughts, unguarded.","Meditation brings wisdom; lack of mediation leaves ignorance. Know well what leads you forward and what holds you back, and choose the path that leads to wisdom.","Peace comes from within. Do not seek it without.","When you realize how perfect everything is, you will tilt your head back and laugh at the sky."];

function showQuote(){
	$(".labelTwo").text("");
	var howRandom = meditationQuotes.length+1;
	var i = Math.floor(howRandom*Math.random());
	$(".labelTwo").append(meditationQuotes[i]);
}

$(".boxTwo").click(function() {
	showQuote();
});


});