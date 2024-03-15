const swiper = new Swiper('.new__slider', {
  // Optional parameters
  loop: true,
  spaceBetween : 20,
  slidesPerView: 1,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

});
