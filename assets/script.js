// Mobile menu
const burger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
if (burger) {
  burger.addEventListener('click', () => {
    const open = navList.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Smooth scroll for same-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navList.classList.remove('open');
      burger?.setAttribute('aria-expanded','false');
    }
  });
});

// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();
