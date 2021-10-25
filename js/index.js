// Code to open and close nav menu //

const navToggle = document.querySelector(".nav-toggle")
const navLinks = document.querySelector(".nav__list")

navToggle.addEventListener("click", function() {
    document.body.classList.toggle("nav-open");
});

navLinks.addEventListener("click", function() {
    document.body.classList.remove("nav-open");
});



