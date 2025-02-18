/* -------------------------------------------------------------------------- */
/*                            ANIMAZIONE HAMBURGER                            */
/* -------------------------------------------------------------------------- */
document.querySelector(".first-button").addEventListener("click", function () {
	document.querySelector(".animated-icon1").classList.toggle("open")
})

/* -------------------------------------------------------------------------- */
/*                         NAVBAR OPACA QUANDO SCENDE                         */
/* -------------------------------------------------------------------------- */
// document.addEventListener("DOMContentLoaded", () => {
// 	const navbar = document.getElementById("myNav")
// 	const toggleButton = document.querySelector(".navbar-toggler")
// 	const collapse = document.getElementById("navbarSupportedContent")

// 	// Funzione per aggiornare la classe della navbar durante lo scroll
// 	function handleScroll() {
// 		if (window.scrollY > 50) {
// 			navbar.classList.add("scrolled")
// 		} else {
// 			navbar.classList.remove("scrolled")
// 		}
// 	}

// 	// Funzione per aggiornare la classe della navbar quando il menu si apre o si chiude
// 	function updateNavbarBackground() {
// 		if (collapse.classList.contains("show")) {
// 			navbar.classList.add("scrolled")
// 		} else {
// 			handleScroll() // Ripristina lo stato della navbar in base allo scroll
// 		}
// 	}

// 	// Ascolta i click sul pulsante toggle
// 	toggleButton.addEventListener("click", () => {
// 		setTimeout(updateNavbarBackground, 100) // Aspetta che il menu si apra/chiuda
// 	})

// 	// Ascolta l'evento scroll
// 	window.addEventListener("scroll", handleScroll)
// })

/* -------------------------------------------------------------------------- */
/*                            TITOLI CHE COMPAIONO                            */
/* -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const titles = document.querySelectorAll('#hero h1, #hero h2, #hero h3, #bottone-contatti-hero');
    
    titles.forEach((title, index) => {
        title.style.opacity = '0';
        title.style.transform = 'translateY(20px)';
        title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }, 500 * (index + 1));
    });
});

/* -------------------------------------------------------------------------- */
/*                             CARD CHE COMPAIONO                             */
/* -------------------------------------------------------------------------- */
const elementsToAnimate = document.querySelectorAll(".my-card, #descrizione");

// Aggiunge la classe 'hidden' a tutti gli elementi all'inizio
elementsToAnimate.forEach(el => el.classList.add("hidden"));

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", "animate__fadeInUp");
            entry.target.classList.remove("hidden"); // Rimuove il nascondimento
            observer.unobserve(entry.target); // Interrompe l'osservazione dopo l'animazione
        }
    });
}, { 
    rootMargin: "-100px 0px"
});

// Osserva ogni elemento
elementsToAnimate.forEach((el) => observer.observe(el));

/* -------------------------------------------------------------------------- */
/*                                NAVBAR OPACA                                */
/* -------------------------------------------------------------------------- */
let lastScrollY = 0;

window.addEventListener('scroll', function () {
    let items = this.document.querySelectorAll(".nav-link");
    let navbar = document.querySelector('nav');
    let navbarToggler = document.querySelector('.navbar-toggler');
    let logo = this.document.querySelector(".navbar-brand");
    let burger = this.document.querySelectorAll(".animated-icon1 span");

    if (Math.abs(window.scrollY - lastScrollY) < 5) {
        return; // Ignore small scroll changes
    }

    if (window.scrollY >= 150) {
        navbar.classList.add('navbar-scrolled');
        navbar.classList.remove('bg-transparent');
        navbarToggler.classList.add('shrink-button'); // Rimpicciolisce il bottone
        logo.classList.add("logo-scrolled");
        burger.forEach(element => {
            element.style.background = "#f7d9bc";
        });
        items.forEach(element => {
            element.classList.add("item-scrolled");
        });
    } else {
        navbar.classList.remove('navbar-scrolled');
        navbar.classList.add('bg-transparent');
        navbarToggler.classList.remove('shrink-button'); // Ripristina la dimensione
        logo.classList.remove("logo-scrolled");
        burger.forEach(element => {
            element.style.background = "#1d1d1d";
        });
        items.forEach(element => {
            element.classList.remove("item-scrolled");
        });
    }

    lastScrollY = window.scrollY;
});
