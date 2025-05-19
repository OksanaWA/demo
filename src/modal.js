// Шукаємо всі кнопки, які відкривають модалку
const openModalButtons = document.querySelectorAll('[data-modal-open]');
const closeModalButtons = document.querySelectorAll('[data-modal-close]');
const backdrops = document.querySelectorAll('.backdrop');

openModalButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Визначаємо, яку саме модалку відкривати (по data-modal-target)
    const target = btn.getAttribute('data-modal-open');
    const modal = document.querySelector(`.${target}`);
    const backdrop = modal.closest('.backdrop');

    modal.classList.add('active');
    backdrop.classList.add('is-open');
  });
});

closeModalButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal, .modal-65, .modal-80');
    const backdrop = modal.closest('.backdrop');

    modal.classList.remove('active');
    backdrop.classList.remove('is-open');
  });
});
