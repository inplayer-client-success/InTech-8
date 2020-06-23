// jQuery for page scrolling feature - requires jQuery Easing plugin
$(".page-scroll").bind("click", function (event) {
	var $anchor = $(this);
	$("html, body")
		.stop()
		.animate(
			{
				scrollTop: $($anchor.attr("href")).offset().top - 50
			},
			350,
			"easeOutQuad"
		);
	event.preventDefault();
});

//  scrollreveal
ScrollReveal().reveal(".header-content", { delay: 500 });
ScrollReveal().reveal(".box-wrap", { delay: 1000 });
ScrollReveal().reveal(".package-container", { delay: 1000 });
ScrollReveal().reveal("#preview-item");

$(function () {
	var toggle = $("#toggle");

	//if( window.matchMedia("(max-width: 790px)").matches){
	$("#menu a").on("click", function () {
		console.log();
		if ($(window).width() < 790) {
			$("#toggle").click();
		}
	});
	//}

	toggle.on("click", function () {
		$(this).toggleClass("is-active");

		$("#menu").addClass("d-flex");
		$("#menu").toggleClass("slideInDown slideOutUp");
		$("body").toggleClass("overflow");
	});

	$(document).scroll(function () {
		var nav = $("#nav-wrapper");
		nav.toggleClass("scrolled", $(this).scrollTop() > nav.height());
		// console.log($(this).scrollTop());
	});

	$("#registration-form").on("submit", function (e) {
		e.preventDefault();
		//https://sheets.googleapis.com/v4/spreadsheets/1_k5iYzOl4MPxju01ZbVHHap96RZczdliPbM4VsQa5Vw/values/A2:append?includeValuesInResponse=true&insertDataOption=INSERT_ROWS&responseDateTimeRenderOption=FORMATTED_STRING&responseValueRenderOption=FORMATTED_VALUE&valueInputOption=USER_ENTERED&key=AIzaSyCzikBkDRee8RkK0UYKbK5lmZomNE7G56s
		$.ajax({
			method: "POST",
			url:
				"https://sheets.googleapis.com/v4/spreadsheets/1_k5iYzOl4MPxju01ZbVHHap96RZczdliPbM4VsQa5Vw/values/A2:append?includeValuesInResponse=true&insertDataOption=INSERT_ROWS&responseDateTimeRenderOption=FORMATTED_STRING&responseValueRenderOption=FORMATTED_VALUE&valueInputOption=USER_ENTERED&key=AIzaSyCzikBkDRee8RkK0UYKbK5lmZomNE7G56s",
			data: {
				majorDimension: "ROWS",
				values: [
					[
						$("#name").val(),
						$("#email").val(),
						$("#prof").val(),
						$("#workshop").val(),
						"2019-10-10 10:10:10"
					]
				]
			}
		});

	});

	var prevScrollPos = window.pageYOffset;

	window.onscroll = function () {
		// console.log(window.pageYOffset);
		var currentScrollPos = window.pageYOffset - 2;
		// var currentScrollPos = window.pageYOffset;
		if (prevScrollPos > currentScrollPos) {
			$("#nav-wrapper").css("top", "0");
		} else {
			$("#nav-wrapper").css("top", "-100px");
		}
		prevScrollPos = currentScrollPos;
	};
});

//show on scroll
window.sr = ScrollReveal();

sr.reveal(".image");
sr.reveal(
	".text",
	{
		// duration: 600,
		distance: "70px",
		easing: "ease-out",
		origin: "left",
		reset: true,
		scale: 1,
		viewFactor: 0
	},
	150
);

// Countdown
const second = 1000,
	minute = second * 60,
	hour = minute * 60,
	day = hour * 24;
let countDown = new Date("April 02, 2020 18:00:00").getTime(),
	x = setInterval(function () {
		let now = new Date().getTime(),
			distance = countDown - now;
		(document.getElementById("days").innerText = Math.floor(distance / day)),
			(document.getElementById("hours").innerText = Math.floor(
				(distance % day) / hour
			)),
			(document.getElementById("minutes").innerText = Math.floor(
				(distance % hour) / minute
			)),
			(document.getElementById("seconds").innerText = Math.floor(
				(distance % minute) / second
			));
		//do something later when date is reached
		if (distance < 0) {
			clearInterval(x);
			(document.getElementById("days").innerText = 0),
				(document.getElementById("hours").innerText = 0),
				(document.getElementById("minutes").innerText = 0),
				(document.getElementById("seconds").innerText = 0);
		}
	}, second);
// countdown end


// back to top button
$(document).ready(function () {
	var offset = 550;
	var duration = 300;

	$(window).scroll(function () {
		if ($(this).scrollTop() > offset) {
			$('.back-to-top').fadeIn(duration);
		} else {
			$('.back-to-top').fadeOut(duration);
		}

	});

	$('.back-to-top').click(function (event) {
		event.preventDefault();

		$('html, body').animate({ scrollTop: 0 }, duration);
		return false;
	})
});