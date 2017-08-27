	
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

	var subtitles = document.getElementsByClassName("original");
	var content = document.getElementById("content");
	var trynum = 0 ;
	for (var i = 0; i < subtitles.length; ++i) {
		if (subtitles[i].getBoundingClientRect().top <= title.clientHeight) {
			newElment = subtitles[i].cloneNode(true);
			newElment.id = "hovering";
			newElment.className = "content-title"
			newElment.style.position = "fixed";
			newElment.style.top = title.clientHeight + "px";
 			try {content.removeChild(document.getElementById("hovering")); }
			catch(err) {}
			content.appendChild(newElment);
			++trynum;
		}
	}
	console.log(trynum);
	if (trynum == 0) {
		try {content.removeChild(document.getElementById("hovering")); }
		catch(err) {}
	}

});

function makeAbsoluteHeaders(){
	removeElementsByClass("absolute");
	var subtitles = document.getElementsByClassName("original");
	var content = document.getElementById("content");
	for (var i = 0; i < subtitles.length; ++i) {
		var newElment = subtitles[i].cloneNode(true);
		newElment.style.position = "absolute";
		newElment.className = "content-title absolute";
		newElment.style.zIndex = i+100 + "";
		newElment.style.top = subtitles[i].getBoundingClientRect().top + window.scrollY + "px";
		content.appendChild(newElment);
	}
};

function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}