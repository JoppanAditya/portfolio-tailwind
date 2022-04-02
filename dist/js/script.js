// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        nav.classList.add('navbar-transparent');
    } else {
        header.classList.remove('navbar-fixed');
        nav.classList.remove('navbar-transparent');
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});