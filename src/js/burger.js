export function initBurgerMenu() {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__nav");
  const overlay = document.querySelector(".header__overlay");

  if (!burger) return;

  burger.addEventListener("click", () => {
    burger.classList.toggle("header__burger--open");
    menu.classList.toggle("header__nav--open");
    overlay.classList.toggle("header__overlay--open");
    document.body.classList.toggle("lock");
  });
}
