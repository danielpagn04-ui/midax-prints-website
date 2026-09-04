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


/* =========================
   HERO PRODUCT ROTATION
========================= */

const heroProductImage = document.querySelector('#heroProductImage');
const heroProductName = document.querySelector('#heroProductName');
const heroProductLink = document.querySelector('#heroProductLink');

if (heroProductImage && heroProductName && heroProductLink) {

    const heroProducts = [
        {
            name: 'SUBLIMATION TOTE BAG',
            image: '/static/images/products/sublimation-tote-bag/tote-bag.jpg',
            alt: 'Midax Prints House Services sublimation tote bag',
            link: '/products/sublimation-tote-bag'
        },
        {
            name: 'BRANDED T-SHIRTS',
            image: '/static/images/products/branded-tshirt/branded-tshirt.webp',
            alt: 'Midax Prints House Services branded T-shirts',
            link: '/products/branded-tshirt'
        },
        {
            name: 'ROLL-UP BANNER',
            image: '/static/images/products/rollup-banner/rollup.webp',
            alt: 'Midax Prints House Services roll-up banner',
            link: '/products/rollup-banner'
        },
        {
            name: 'WALL CALENDAR',
            image: '/static/images/products/wall-calendar/wall-calendar.jpg',
            alt: 'Midax Prints House Services wall calendar',
            link: '/products/wall-calendar'
        }
    ];

    /* Preload all hero images */
    heroProducts.forEach(product => {
        const image = new Image();
        image.src = product.image;
    });

    let heroProductIndex = 0;

    setInterval(() => {

        heroProductIndex =
            (heroProductIndex + 1) % heroProducts.length;

        const product = heroProducts[heroProductIndex];

        heroProductImage.style.opacity = '0';

        setTimeout(() => {

            heroProductImage.src = product.image;
            heroProductImage.alt = product.alt;
            heroProductName.textContent = product.name;
            heroProductLink.href = product.link;

            heroProductImage.onload = () => {
                heroProductImage.style.opacity = '1';
            };

        }, 350);

    }, 5000);

}
