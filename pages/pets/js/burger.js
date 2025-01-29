const burger = document.querySelector('.header-menu-burger'),
  headerMenu = document.querySelector('.header-menu'),
  body = document.querySelector('body'),
  burgerMenu = document.querySelector('.header-menu-burger-burger-menu'),
  logo = document.querySelector('.header-logo'),
  logoBurgerMenu = document.querySelector('.header-logo-burger-menu'),
  headerWrapper = document.querySelector('.header-wrapper'),
  back = document.querySelector('.back');
header = document.querySelector("body > header");

burger.addEventListener('click', () => {
  if (!burger.classList.contains('xxx')) {
    burger.classList.add('xxx');
    headerMenu.classList.add('xxx');
    body.classList.add('lock');
    burgerMenu.classList.add('xxx');
    logo.style.display = 'none';
    logoBurgerMenu.style.display = 'none';
    headerWrapper.style.marginTop = '37px';
    back.style.display = 'block';
    header.style.position = 'static';
  }
});

burgerMenu.addEventListener('click', () => {
  if (burgerMenu.classList.contains('xxx')) {
    burger.classList.remove('xxx');
    headerMenu.classList.remove('xxx');
    body.classList.remove('lock');
    burgerMenu.classList.remove('xxx');
    logo.style.display = 'block';
    headerWrapper.style.marginTop = '0px';
    back.style.display = 'none';
    header.style.position = 'sticky';
  }
});

back.addEventListener('click', () => {
  if (burgerMenu.classList.contains('xxx')) {
    burger.classList.remove('xxx');
    headerMenu.classList.remove('xxx');
    body.classList.remove('lock');
    burgerMenu.classList.remove('xxx');
    logo.style.display = 'block';
    headerWrapper.style.marginTop = '0px';
    back.style.display = 'none';
    header.style.position = 'sticky';
  }
});
