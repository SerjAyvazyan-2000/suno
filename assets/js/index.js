
  document.querySelectorAll('.you-need-slider').forEach(slider => {
    new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 24,
      centeredSlides: true,
      loop: false,
      speed: 600,
      pagination: {
        el: slider.querySelector('.swiper-pagination'),
        clickable: true,
      },
    });
  });
  
  const hWorkTracks = document.querySelectorAll(".i-work-partners-track");

hWorkTracks.forEach((track) => {
  const items = Array.from(track.children);

  items.forEach((item) => track.appendChild(item.cloneNode(true)));

  const totalWidth = track.scrollWidth / 2;

  gsap.to(track, {
    x: -totalWidth,
    duration: 70,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % -totalWidth),
    },
  });
});