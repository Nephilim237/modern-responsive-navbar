const fab = document.querySelector('.fab');
const mobileNavbar = document.querySelector('.mobile-navbar');

fab.addEventListener('click', (e) => {
    mobileNavbar.classList.toggle('is-open');

    const icon = fab.querySelector('i');

    console.log(icon);

    if (icon.classList.contains('ri-arrow-up-s-line')) {
        icon.classList.remove('ri-arrow-up-s-line');
        icon.classList.add('ri-arrow-down-s-line');
    } else {
        icon.classList.add('ri-arrow-up-s-line');
        icon.classList.remove('ri-arrow-down-s-line');
    }
});
