(function () {
	"use strict";

	var slider = document.querySelector(".home-cases-slider");
	if (!slider || typeof Swiper === "undefined") return;

	var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	new Swiper(slider, {
		slidesPerView: 1.08,
		spaceBetween: 22,
		speed: 750,
		loop: true,
		a11y: true,
		keyboard: { enabled: true },
		autoplay: reduceMotion ? false : {
			delay: 3000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true
		},
		navigation: {
			nextEl: ".home-cases-next",
			prevEl: ".home-cases-prev"
		},
		pagination: {
			el: ".home-cases-progress",
			type: "progressbar"
		},
		breakpoints: {
			680: { slidesPerView: 2.15, spaceBetween: 22 },
			1100: { slidesPerView: 3.25, spaceBetween: 28 }
		}
	});
}());
