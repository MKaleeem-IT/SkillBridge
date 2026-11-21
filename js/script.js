// SkillBridge JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Navbar shadow on scroll
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 20) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    });

});