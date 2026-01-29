
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






const mvItems = document.querySelectorAll('.mv-item');
const mvButtons = document.querySelectorAll('.mv-header');

// toggle on button click
mvButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation(); // stop document click

    const item = button.closest('.mv-item');

    // close other items
    mvItems.forEach(i => {
      if (i !== item) i.classList.remove('active');
    });

    // toggle current
    item.classList.toggle('active');
  });
});

// close all when clicking outside
document.addEventListener('click', () => {
  mvItems.forEach(item => item.classList.remove('active'));
});

















function initMap() {
  // 1. Choose the coordinates (latitude & longitude)
  const myLocation = { lat: 6.437510255195223, lng: 3.5578414032709262 }; 

  // 2. Create the map
  const map = new google.maps.Map(document.getElementById("map"), {
    center: myLocation, // Center the map at this location
    zoom: 14,           // Zoom level (1 = world, 20 = street)
  });

  // 3. Add a marker at that location
  const marker = new google.maps.Marker({
    position: myLocation,
    map: map,
    title: "My Location", // Hover text
  });
}










  // character counter
  const textarea = document.getElementById('message');
  const counter = document.getElementById('counter');

  textarea.addEventListener('input', () => {
    counter.textContent = `${500 - textarea.value.length} characters remaining`;
  });

  // accordion
  document.querySelectorAll('.info-header').forEach(header => {
    header.addEventListener('click', () => {
      const box = header.parentElement;

      document.querySelectorAll('.info-box').forEach(b => {
        if (b !== box) b.classList.remove('open');
      });

      box.classList.toggle('open');
    });
  });
















    








  const dropdowns = document.querySelectorAll("details");

  document.addEventListener("click", (e) => {
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.removeAttribute("open");
      }
    });
  });

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdowns.forEach(d => {
        if (d !== dropdown) d.removeAttribute("open");
      });
    });
  });
