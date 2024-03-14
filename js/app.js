const headerMob = document.querySelector(".header__mob");
const headerNav = document.querySelector(".header__nav");

headerMob.addEventListener("click", function () {
  headerNav.classList.toggle("header__nav--mobile");
});
