window.onload = function() {

	var slideshow = document.getElementById("slideshow");

	var imagesSrc = ["baner1.jpg", "baner2.jpg", "baner3.jpg"];

	for (var i=0; i < imagesSrc.length; i++) {
		var image = new Image();

		image.src = "images/" + imagesSrc[i];

		slideshow.appendChild(image);
	}

	slideshow.childNodes[0].setAttribute("class", "current");

	var i = 0;

	setInterval(function() {

		slideshow.childNodes[i % imagesSrc.length].setAttribute("class", "");

		slideshow.childNodes[ (i+1) % imagesSrc.length].setAttribute("class", "current");

		i++;

	},5000);

};