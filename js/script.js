/* -------------------------------------------------------------------------- */
/*                                   SWIPER                                   */
/* -------------------------------------------------------------------------- */
var swiper = new Swiper("#hero-swiper", {
	spaceBetween: 30,
	centeredSlides: true,
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
})

/* -------------------------------------------------------------------------- */
/*                            ANIMAZIONE HAMBURGER                            */
/* -------------------------------------------------------------------------- */
document.querySelector(".first-button").addEventListener("click", function () {
	document.querySelector(".animated-icon1").classList.toggle("open")
})

/* -------------------------------------------------------------------------- */
/*                         NAVBAR OPACA QUANDO SCENDE                         */
/* -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
	const navbar = document.getElementById("myNav")
	const toggleButton = document.querySelector(".navbar-toggler")
	const collapse = document.getElementById("navbarSupportedContent")

	// Funzione per aggiornare la classe della navbar durante lo scroll
	function handleScroll() {
		if (window.scrollY > 50) {
			navbar.classList.add("scrolled")
		} else {
			navbar.classList.remove("scrolled")
		}
	}

	// Funzione per aggiornare la classe della navbar quando il menu si apre o si chiude
	function updateNavbarBackground() {
		if (collapse.classList.contains("show")) {
			navbar.classList.add("scrolled")
		} else {
			handleScroll() // Ripristina lo stato della navbar in base allo scroll
		}
	}

	// Ascolta i click sul pulsante toggle
	toggleButton.addEventListener("click", () => {
		setTimeout(updateNavbarBackground, 100) // Aspetta che il menu si apra/chiuda
	})

	// Ascolta l'evento scroll
	window.addEventListener("scroll", handleScroll)
})


const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("animate__animated", "animate__fadeInUp")
		}
	})
})
document.querySelectorAll(".my-card").forEach((card) => observer.observe(card))
