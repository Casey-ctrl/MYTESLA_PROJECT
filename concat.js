    document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.product-carousel', {
    // 1. **Key for the look:** Center the active slide
    centeredSlides: true,

    // 2. **Key for the look:** Calculate the number of slides based on container width
    // This allows one main slide to show, plus a partial view of the next one.
    slidesPerView: 'auto', 
    
    // Space between the slides (adjust as needed)
    spaceBetween: 30, 

    // Loop mode for continuous scrolling
    loop: true,

    // Optional: Add basic navigation and pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
    // Optional: Speed of transition
    speed: 600, 
  });
});