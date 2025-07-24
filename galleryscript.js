window.addEventListener('load', function () {
  var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
    slidesPerView: 3,
    spaceBetween: 20,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
});
document.querySelectorAll('.tranding-slide-img img').forEach((img) => {
    const currentSrc = img.src.split('?')[0]; // Remove any old query params
    img.src = `${currentSrc}?t=${new Date().getTime()}`;
});


  const logo = document.getElementById("main-logo");
  const offsetTrigger = logo.offsetTop + 50;

  window.addEventListener("scroll", () => {
    if (window.scrollY > offsetTrigger) {
      logo.classList.add("sticky-logo");
    } else {
      logo.classList.remove("sticky-logo");
    }
  });
