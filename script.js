const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");


// Abrir / cerrar menú móvil

menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// Cerrar el menú al pulsar una sección

const links = document.querySelectorAll("#nav a");

links.forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });

});


// Animación al aparecer las tarjetas

const cards = document.querySelectorAll(
    ".service-card, .gallery-item, .contact-box"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.classList.add("animate");

    observer.observe(card);

});