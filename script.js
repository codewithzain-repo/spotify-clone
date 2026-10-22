
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".ham-nav-links");

menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("open");
    navLinks.classList.toggle("open");
});
