// JavaScript Document

let mountains = document.getElementById('mountains');
let presentation_title = document.getElementById('presentation-title');
let presentation_title_sub = document.getElementById('presentation-title_sub');
let moon = document.getElementById('moon');
let bg = document.getElementById('bg');
let fog_left = document.getElementById('fog-left');
let fog_right = document.getElementById('fog-right');
let buttons = document.getElementById('hero_buttons');
let hero = document.getElementById('hero');

window.addEventListener('scroll', function(){
	
	var value = window.scrollY;
	const checkpoint = 100;

	bg.style.top = value * 0.5 + 'px';
//	moon.style.left = value  + 'px';
//	mountains.style.top = value * 1.5 + 'px';
	let opacity;
	
	if (value <= checkpoint) {
    opacity = 1 - value / checkpoint;
  } else {
    opacity = 0;
  }
	
  presentation_title.style.opacity = opacity;
	presentation_title_sub.style.opacity = opacity;
	fog_left.style.left = value * 1.5 + 'px';
	fog_right.style.left = "-" + value * 1.5 + 'px';
	fog_left.style.opacity = opacity;
	fog_right.style.opacity = opacity;
	moon.style.opacity = opacity;
	buttons.style.opacity = opacity;
	
	
	
});


var current = 1; //keeps track of the current div
var height = $('.roles').height(); //the height of the roles div
var numberDivs = $('.roles').children().length; //the number of children of the roles div
var first = $('.roles div:nth-child(1)'); //the first div nested in roles div
setInterval(function() {
    var number = current * -height;
    first.css('margin-top', number + 'px');
    if (current === numberDivs) {
        first.css('margin-top', '0px');
        current = 1;
    } else current++;
}, 5000);