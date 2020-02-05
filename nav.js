let hamburger = document.getElementById("hamburger");
let nav_menu = document.getElementById("nav-list");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("x-icon");
    nav_menu.classList.toggle("show-mobile-nav");
});