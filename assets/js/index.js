
const swiperObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    new Swiper(entry.target, {
      slidesPerView: 1,
      spaceBetween: 24,
      centeredSlides: true,
      speed: 600,
      pagination: {
        el: entry.target.querySelector('.swiper-pagination'),
        clickable: true,
      },
    });

    obs.unobserve(entry.target);
  });
});

document.querySelectorAll('.you-need-slider').forEach(slider => {
  swiperObserver.observe(slider);
});
  
  const tracks = document.querySelectorAll('.i-work-partners-track');

  tracks.forEach(track => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  
    const items = [...track.children];
    items.forEach(item => track.appendChild(item.cloneNode(true)));
  
    const totalWidth = track.scrollWidth / 2;
  
    const anim = gsap.to(track, {
      x: -totalWidth,
      duration: 120,
      ease: "linear",
      repeat: -1,
      paused: true,
      force3D: true
    });
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting ? anim.play() : anim.pause());
    });
  
    observer.observe(track);
  });