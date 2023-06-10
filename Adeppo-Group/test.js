const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const navClose = document.querySelector(".mobile-nav-close");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
    primaryNav.hasAttribute("data-visible")
        ? navToggle.setAttribute("aria-expanded", false)
        : navToggle.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
    document.body.classList.toggle("show-mobile-nav-toggle");
});

navClose.addEventListener("click", () => {
    primaryNav.removeAttribute("data-visible");
    primaryHeader.removeAttribute("data-overlay");
    document.body.classList.remove("show-mobile-nav-toggle");
});