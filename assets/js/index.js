
const swiperObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    new Swiper(entry.target, {
      slidesPerView: 1,
      spaceBetween: 24,
      autoHeight:true,
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


  document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const fadeAnimations = [
    { selector: ".fade-left", from: { x: -40 } },
    { selector: ".fade-right", from: { x: 40 } },
    { selector: ".fade-top", from: { y: -40 } },
    { selector: ".fade-bottom", from: { y: 40 } },
  ];

  fadeAnimations.forEach(({ selector, from }) => {
    gsap.utils.toArray(selector).forEach((el) => {
      gsap.fromTo(
        el,
        { ...from, opacity: 0, visibility: "visible" },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom 10%",
            once: true,
          },
        }
      );
    });
  });
});