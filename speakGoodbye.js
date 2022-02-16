(function(window) {
	var speakWord = "Good Bye";
	var goodbyeSpeaker = function (name) {
  		console.log(speakWord + " " + name);
	}
	
	window.goodbyeSpeaker = goodbyeSpeaker;

})(window);