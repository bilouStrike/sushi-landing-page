const nav = document.querySelector(".header__menu-mobile");
const hamburger = document.querySelector(".header__menu-hamburger");
const headerMenu = document.querySelector(".header__menu");

nav.addEventListener("click", () => {
    hamburger.classList.toggle("is-open");
    headerMenu.classList.toggle("is-open");
});