const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const pagination = document.querySelector('.pagination');

let index = 0;
let interval;

/* create pagination */
slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('page-dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    showSlide(i);
    resetAutoSlide();
  });
  pagination.appendChild(dot);
});

const dots = document.querySelectorAll('.page-dot');

function showSlide(i) {
  slides[index].classList.remove('active');
  dots[index].classList.remove('active');

  index = i;

  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

/* arrows */
prev.addEventListener('click', () => {
  showSlide((index - 1 + slides.length) % slides.length);
  resetAutoSlide();
});

next.addEventListener('click', () => {
  showSlide((index + 1) % slides.length);
  resetAutoSlide();
});

/* auto slide every 3 seconds */
function startAutoSlide() {
  interval = setInterval(() => {
    showSlide((index + 1) % slides.length);
  }, 3000);
}

/* reset timer on interaction */
function resetAutoSlide() {
  clearInterval(interval);
  startAutoSlide();
}

/* START */
startAutoSlide();





