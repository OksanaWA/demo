const burgerBtn = document.querySelector('[data-burger-btn]');
const menu = document.querySelector('[data-menu]');
const closeBtn = document.querySelector('[data-close-btn]');

burgerBtn.addEventListener('click', () => {
  menu.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('is-open');
});
