/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navLinks');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when a navigation link is clicked
    const navLinks = nav.querySelectorAll('a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}
