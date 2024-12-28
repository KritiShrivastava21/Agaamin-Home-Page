function toggleMenu() {
  const sideMenu = document.getElementById("side-menu");
  if (sideMenu.style.width === "250px") {
    sideMenu.style.width = "0";
  } else {
    sideMenu.style.width = "250px";
  }
}


const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownButton.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdownMenu.parentElement.classList.toggle('open');
});

function selectOption(option) {
  dropdownButton.textContent = option;
  dropdownMenu.parentElement.classList.remove('open');
}

document.addEventListener('click', (e) => {
  if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.parentElement.classList.remove('open');
  }
});

// Select DOM elements
const carousel = document.querySelector('.carousel');
const slider = document.getElementById('carousel-slider');

// Slider Input Event
slider.addEventListener('input', () => {
  const sliderValue = parseInt(slider.value); // Get slider value (0-7)
  const itemWidth = carousel.querySelector('.carousel-item').offsetWidth; // Width of a single item
  const gap = 20; // Gap between items (from CSS margin)
  const scrollAmount = sliderValue * (itemWidth + gap); // Calculate scroll amount

  // Update carousel transform
  carousel.style.transform = `translateX(-${scrollAmount}px)`;
});
