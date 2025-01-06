const menu = document.querySelector("#mobile-mennu");
const menuLinks = documents.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});
