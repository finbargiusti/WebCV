	
var lastPos = window.scrollY;

window.addEventListener('scroll', function() {

	// Title position

	var title = document.getElementById("header-wrapper");
	var pos = ((window.scrollY/window.innerHeight)*100)/2;
	var scrollTo = Math.max(((title.clientHeight/2)/window.innerHeight)*100, 50-pos)
	title.style.top = scrollTo + "vh";
	lastPos = window.scrollY;
	if (scrollTo == ((title.clientHeight/2)/window.innerHeight)*100) {
		title.style.boxShadow = "0px 2px 4px rgba(0,0,0,0.3)"
	} else {
		title.style.boxShadow = "0px 0px 0px rgba(0,0,0,0.3)"
	}

	// Sub-title position

	var subtitles = document.getElementsByClassName("content-title");
	var content = document.getElementById("content");
	var trynum = 0;
	for (var i = 0; i < subtitles.length; ++i) {
		if (subtitles[i].getBoundingClientRect().top <= title.clientHeight) {
			console.log("aperape");
			newElment = subtitles[i].cloneNode(true);
			newElment.id = "hovering";
			newElment.class = "NULL"
			newElment.style.position = "fixed";
			newElment.style.top = title.clientHeight + "px";
			try {content.removeChild(document.getElementById("hovering")); }
			catch(err) {}
			content.appendChild(newElment);
			++trynum;
		}
	}
	if (trynum == 0) {
		try {content.removeChild(document.getElementById("hovering")); }
		catch(err) {}
	}
});
 