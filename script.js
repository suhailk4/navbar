const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('nav');
hamburger.addEventListener('click', addEvent, false);

function addEvent() {
    console.log('Clicked ');
    nav.classList.toggle('active');

    if (nav.classList.contains('active')) {
        hamburger.innerHTML = '<i class="fas fa-times"> </i>';
    } else {
        hamburger.innerHTML = '<i class="fas fa-bars"> </i>';
    }
}