var start;  //surprise variable
window.onload = function () {
  if(document.all) {  //judge whether it is IE browser
    start = setInterval('loading()', 1500);
  }
  else {
    var load = $('#onload');
    load.fadeOut(1500);
    loadheart();
  }
}

function loading() {
  if (document.readyState == "complete") {
    var load = $('#onload');
    load.fadeOut(1500);
    loadheart();
    clearInterval(start);
  }
}

function loadheart(){
	if(!document.createElement('canvas').getContext) {//judge whether this browser support canvas
			var msg = document.createElement("div");
			msg.id = "errorMsg";
			msg.innerHTML = "Sorry, your browser doesn't support HTML5!<br/>Please give up IE and choose Chrome/Firefox/Safari :)";
			document.body.appendChild(msg);
	}
  else startAnimation();
}
