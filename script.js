let menu = document.getElementById('menu-icon');  // Use getElementById for targeting the id
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');  // Toggle the 'bx-x' class for the menu
    navlist.classList.toggle('open');  // Toggle the 'open' class for the navlist
};

// Corrected ScrollReveal initialization
const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

// Apply ScrollReveal to the .front-text element
sr.reveal('.front-text', {
    delay: 200,
    origin: 'top'
});

sr.reveal('.LET-img', {
    delay: 450,
    origin: 'top'
});

sr.reveal('.icons', {  // Fixed missing parentheses here
    delay: 500,
    origin: 'left'
});

sr.reveal('.scroll-down', {  // Fixed missing parentheses here
    delay: 500,
    origin: 'right'
});

