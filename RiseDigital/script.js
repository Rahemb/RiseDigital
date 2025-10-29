// Mobile nav toggle & dynamic year
const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.menu');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('show');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
