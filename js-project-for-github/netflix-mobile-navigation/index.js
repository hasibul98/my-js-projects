const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const navs = document.querySelectorAll(".nav");

function openNav() {
  navs.forEach((nav_el) => nav_el.classList.add("visible"));
  document.body.addEventListener("click", closeNav);
}

function closeNav(e) {
  if (
    e.target === close_btn ||
    [...navs].some((nav_el) => nav_el.contains(e.target))
  ) {
    return;
  }
  navs.forEach((nav_el) => nav_el.classList.remove("visible"));
  document.body.removeEventListener("click", closeNav);
}

open_btn.addEventListener("click", (e) => {
  e.stopPropagation();
  openNav();
});
close_btn.addEventListener("click", (e) => {
  e.stopPropagation();
  navs.forEach((nav_el) => nav_el.classList.remove("visible"));
  document.body.removeEventListener("click", closeNav);
});
