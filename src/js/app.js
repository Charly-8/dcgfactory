document.addEventListener("DOMContentLoaded", function() {
    eventListeners();
});

function eventListeners() {
    const mobileMenu = document.querySelector('.menumobile');
    const girarBarra = document.querySelector('.menumobile__logo');

    mobileMenu.addEventListener('click', navegacionResponsive);
    girarBarra.addEventListener('click', girar);
}

// Función para el menú en vista mobile

function navegacionResponsive() {
    const navegacion = document.querySelector('.navmobile');
    
    navegacion.classList.toggle('mostrar');
}

// Función para icono de menú vista mobile

function girar() {
    const girar = document.querySelector('.menumobile');

    girar.classList.toggle('girar');
}