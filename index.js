let currentSlide = 0;

// Function to show the next or previous slide
function changeSlide(n) {
  showSlide((currentSlide += n));
}

// Function to display a specific slide
function showSlide(n) {
  const slides = document.getElementsByClassName("slide");

  // Wrap around to the first slide if at the end
  if (n >= slides.length) {
    currentSlide = 0;
  } else if (n < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = n;
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Display the current slide
  slides[currentSlide].style.display = "block";
}

// Initial display
showSlide(currentSlide);
