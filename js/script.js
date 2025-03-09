/* -------------------------------------------------------------------------- */
/*                            ANIMAZIONE HAMBURGER                            */
/* -------------------------------------------------------------------------- */
let navbarAperta = false;
document.querySelector(".first-button").addEventListener("click", function () {
	document.querySelector(".animated-icon1").classList.toggle("open");
    navbarAperta = !navbarAperta;
    if(window.scrollY <= 150 ) {
        document.querySelector("nav").classList.toggle("navbar-scrolled");
    }
})

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
        // logo.classList.add("logo-scrolled");
        // burger.forEach(element => {
        //     element.style.background = "#f7d9bc";
        // });
        // items.forEach(element => {
        //     element.classList.add("item-scrolled");
        // });
    } else {
        if(!navbarAperta){
            navbar.classList.remove('navbar-scrolled');
        }
        navbar.classList.add('bg-transparent');
        navbarToggler.classList.remove('shrink-button'); // Ripristina la dimensione
        // logo.classList.remove("logo-scrolled");
        // burger.forEach(element => {
        //     element.style.background = "#1d1d1d";
        // });
        // items.forEach(element => {
        //     element.classList.remove("item-scrolled");
        // });
    }

    lastScrollY = window.scrollY;
});


/* -------------------------------------------------------------------------- */
/*                          CARTA CHE GIRA DA MOBILE                          */
/* -------------------------------------------------------------------------- */
// document.addEventListener("DOMContentLoaded", function () {
//     const cards = document.querySelectorAll(".card-wrapper .carta-bambini");

//     cards.forEach(card => {
//         card.addEventListener("click", function () {
//             card.classList.toggle("flip-right");
//             console.log("flip");
//         });
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    // Seleziona tutti i wrapper delle carte
    const cardWrappers = document.querySelectorAll('.card-wrapper');
    
    // Per ogni wrapper aggiungi un event listener per il click/tocco
    cardWrappers.forEach(wrapper => {
      wrapper.addEventListener('click', function(e) {
        // Controlla se il click è avvenuto su un link o su un elemento figlio di un link
        if (e.target.tagName === 'A' || e.target.closest('a')) {
          // Non fare nulla, lascia che il comportamento predefinito del link funzioni
          return;
        } else {
          // Altrimenti, gira la carta
          this.classList.toggle('flipped');
        }
      });
      
      // Per i dispositivi touch
      wrapper.addEventListener('touchstart', function(e) {
        // Controlla se il tocco è avvenuto su un link o su un elemento figlio di un link
        if (e.target.tagName === 'A' || e.target.closest('a')) {
          // Non prevenire il comportamento predefinito per i link
          return;
        } else {
          // Solo per altri elementi, previeni il comportamento predefinito e gira la carta
          e.preventDefault();
          this.classList.toggle('flipped');
        }
      }, { passive: false });
    });
  });