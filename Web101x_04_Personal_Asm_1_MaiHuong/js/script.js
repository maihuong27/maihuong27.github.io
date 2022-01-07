var slide1 = document.getElementById("infor-slide");
var slide2 = document.getElementById("slide-2");

var style = getComputedStyle(slide2);
console.log(style.right);

function rightSlide1() {
	slide1.removeAttribute("style");
	slide1.style.transitionTimingFunction = "easy-in";
	slide1.style.transitionDuration = "2s";
	slide1.style.left = "-300px";
}

function leftSlide1() {
	slide1.removeAttribute("style");
	slide1.style.right = "-300px";
}

$("#slide-2").slick({
	slidesToShow: 5,
	slidesToScroll: 3,
	infinite: true,
	arrows: true,
	draggable: true,
	prevArrow:
		'<div class="slick-prev"><i class="fas fa-long-arrow-left"></i></div>',
	nextArrow:
		'<div class="slick-next"><i class="fas fa-long-arrow-right"></i></div>',
});
