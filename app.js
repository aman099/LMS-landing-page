const getGridFixed = document.querySelector(".get-grid.get-grid-1");
const getCardGrid = document.querySelector(".get-grid.get-card-grid-1");

const options = {};

const observer = new IntersectionObserver(function (entries, observer7) {
	entries.forEach((entry) => {
		if (innerWidth > 1000) {
			if (entry.isIntersecting) {
				getGridFixed.classList.add("sticky");
			} else {
				getGridFixed.classList.remove("sticky");
			}
		}
	});
}, options);

observer.observe(getGridFixed);

const sidebar = document.querySelector("aside");
const hambuergerIcon = document.querySelector(".hamburger-icon");
const overlay = document.querySelector(".overlay");

hambuergerIcon.addEventListener("click", () => {
	sidebar.classList.add("active");
	overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
	sidebar.classList.remove("active");
	overlay.classList.remove("active");
});

// Carousel 1
const getCertifiedGridContainer = document.querySelector(".get-certified-grid");
const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");

// prevBtn.addEventListener("click", () => {
// 	getCertifiedGridContainer.scrollBy({
// 		left: getCertifiedGridContainer.clientWidth * 1,
// 		behavior: "smooth",
// 	});
// });
// nextBtn.addEventListener("click", () => {
// 	getCertifiedGridContainer.scrollBy({
// 		left: getCertifiedGridContainer.clientWidth * -1,
// 		behavior: "smooth",
// 	});
// });

const card = document.querySelector(".get-card-grid-1");

prevBtn.addEventListener("click", () => {
	getCertifiedGridContainer.scrollBy({
		left: card.clientWidth * 1 + 32,
		behavior: "smooth",
	});
	if (innerWidth < 400) {
		getCertifiedGridContainer.scrollBy({
			left: card.clientWidth * 1 + 40,
			behavior: "smooth",
		});
	}
});
nextBtn.addEventListener("click", () => {
	getCertifiedGridContainer.scrollBy({
		left: card.clientWidth * -1 - 32,
		behavior: "smooth",
	});
	if (innerWidth < 400) {
		getCertifiedGridContainer.scrollBy({
			left: card.clientWidth * -1 - 40,
			behavior: "smooth",
		});
	}
});
