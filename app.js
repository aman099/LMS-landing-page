const getGridFixed = document.querySelector(".get-grid.get-grid-1");
const getCardGrid = document.querySelector(".get-grid.get-card-grid-1");

const options = {};

const observer = new IntersectionObserver(function (entries, observer7) {
	entries.forEach((entry) => {
		if (
			innerWidth > 1000 &&
			getCertifiedGrid.getBoundingClientRect().bottom >= screenTop
		) {
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

const getCertifiedGrid = document.querySelector(".get-certified-grid");

console.log(getCertifiedGrid.getBoundingClientRect().top);
console.log(getCertifiedGrid.getBoundingClientRect().bottom >= screenTop);
console.log(screenTop);

// Wrapper popup
var li_elements = document.querySelectorAll(".wrapper_left ul li");
var item_elements = document.querySelectorAll(".item");
for (var i = 0; i < li_elements.length; i++) {
	li_elements[i].addEventListener("click", function () {
		li_elements.forEach(function (li) {
			li.classList.remove("active");
		});
		this.classList.add("active");
		var li_value = this.getAttribute("data-li");
		item_elements.forEach(function (item) {
			item.style.display = "none";
		});
		if (li_value == "generative-ai") {
			document.querySelector("." + li_value).style.display = "block";
		} else if (li_value == "data-science") {
			document.querySelector("." + li_value).style.display = "block";
		} else if (li_value == "ai-machine") {
			document.querySelector("." + li_value).style.display = "block";
		} else if (li_value == "project-management") {
			document.querySelector("." + li_value).style.display = "block";
		} else if (li_value == "cyber-security") {
			document.querySelector("." + li_value).style.display = "block";
		} else if (li_value == "cloud-computing") {
			document.querySelector("." + li_value).style.display = "block";
		} else if (li_value == "devops") {
			document.querySelector("." + li_value).style.display = "block";
		} else if (li_value == "business-leadership") {
			document.querySelector("." + li_value).style.display = "block";
		} else if (li_value == "quality-management") {
			document.querySelector("." + li_value).style.display = "block";
		} else if (li_value == "software-development") {
			document.querySelector("." + li_value).style.display = "block";
		} else if (li_value == "agile-scrum") {
			document.querySelector("." + li_value).style.display = "block";
		} else if (li_value == "it-service") {
			document.querySelector("." + li_value).style.display = "block";
		} else if (li_value == "digital-marketing") {
			document.querySelector("." + li_value).style.display = "block";
		} else {
			console.log("");
		}
	});
}

const allCoursesBtn = document.querySelector(".all-courses-btn-container");
const wrapperEl = document.querySelector(".wrapper");
const overlay2 = document.querySelector(".overlay2");

allCoursesBtn.addEventListener("mouseover", () => {
	wrapperEl.classList.add("active");
	overlay2.classList.add("active");
});
wrapperEl.addEventListener("mouseover", (e) => {
	if (!wrapperEl.classList.contains("active"))
		wrapperEl.classList.add("activate");
	overlay2.classList.add("active");
});
allCoursesBtn.addEventListener("mouseleave", (e) => {
	wrapperEl.classList.remove("active");
	overlay2.classList.remove("active");
});
wrapperEl.addEventListener("mouseleave", (e) => {
	if (!wrapperEl.classList.contains("active"))
		wrapperEl.classList.remove("activate");
	overlay2.classList.remove("active");
});

// document.addEventListener("mouseover", (e) => {
// 	console.log(e.clientX, e.clientY);
// });
