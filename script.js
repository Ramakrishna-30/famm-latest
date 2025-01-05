document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;
  
    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    };
  
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        showSlide(index);
      });
    });
  
    // Initially show the first slide
    showSlide(currentIndex);
  });
  