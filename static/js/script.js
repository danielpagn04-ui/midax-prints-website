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


/* =========================
   GALLERY CATEGORY ACCORDION
========================= */

const galleryCategories = document.querySelectorAll('.gallery-category');

galleryCategories.forEach(category => {

    const toggle = category.querySelector('.gallery-category-toggle');

    if (toggle) {

        toggle.addEventListener('click', () => {

            galleryCategories.forEach(otherCategory => {
                if (otherCategory !== category) {
                    otherCategory.classList.remove('active');
                }
            });

            category.classList.toggle('active');

        });

    }

});
