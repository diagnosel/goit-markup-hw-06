const mobileMenu = document.querySelector(".mobile-menu");
const openMenuButton = document.querySelector(".mobile-menu-open");
const closeMenuButton = document.querySelector(".mobile-menu-close");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-nav-link");

const openMenu = () => {
  mobileMenu.classList.add("is-open");
  document.body.classList.add("no-scroll");
};

const closeMenu = () => {
  mobileMenu.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
};

openMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);
mobileMenuLinks.forEach((link) => link.addEventListener("click", closeMenu));
