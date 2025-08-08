

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
/ product card  /
const productCards = document.querySelectorAll('.productCard');
const sources = document.querySelector('.sources');

function activeLink() {
  // Remove 'active' class from all cards
  productCards.forEach((item) => item.classList.remove('active'));

  // Add 'active' class to clicked card
  this.classList.add('active');

  // Move `.sources` element into the clicked `.productCard`
  this.prepend(sources);
}

// Add event listener to each product card
productCards.forEach((item) => {
  item.addEventListener('click', activeLink);
});
