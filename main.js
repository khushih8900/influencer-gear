

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

/ products see more click/

const btn = document.getElementById('seeMoreBtn');
const grid = document.querySelector('.product-grid');

btn.addEventListener('click', () => {
  grid.classList.toggle('expanded');
  btn.textContent = grid.classList.contains('expanded') ? 'See Less ' : 'See More';
});
