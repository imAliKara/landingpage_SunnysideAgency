hamburger = document.querySelector(".hamburger-menu");
hamburger.onclick = function () {
    hamburger.classList.toggle("active");
    navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
}