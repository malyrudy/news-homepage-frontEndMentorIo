const menuBtn = document.querySelector(".menu-icon");
const shadow = document.querySelector(".shadow");
const mobileNav = document.querySelector(".mobile-nav");

menuBtn.addEventListener("click", () => {
    shadow.classList.toggle("active");
    mobileNav.classList.toggle("active");
})