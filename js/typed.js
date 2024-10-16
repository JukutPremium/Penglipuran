document.addEventListener('DOMContentLoaded', function () {
  var welcomeTyped = new Typed("#welcome", {
    strings: ['— WELCOME —'],
    typeSpeed: 200,
    backSpeed: 150,
    showCursor: false,
    loop: false,
  });
});

let aboutTriggered = false;
let galleryTriggered = false;
let eventTriggered = false;
let fasilitasTriggered = false;

function handleScrollTriggers() {
  // About Section
  if (!aboutTriggered) {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const aboutPosition = aboutSection.getBoundingClientRect().top;
      if (aboutPosition < window.innerHeight) {
        aboutTriggered = true;
        new Typed("#about-title", {
          strings: ['Tentang Penglipuran.'],
          typeSpeed: 75,
          backSpeed: 150,
          showCursor: false,
          loop: false,
        });
      }
    }
  }

  // Gallery Section
  if (!galleryTriggered) {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      const galleryPosition = gallerySection.getBoundingClientRect().top;
      if (galleryPosition < window.innerHeight) {
        galleryTriggered = true;
        new Typed("#daya_tarik", {
          strings: ['Daya Tarik.'],
          typeSpeed: 75,
          backSpeed: 150,
          showCursor: false,
          loop: false,
        });
      }
    }
  }

  // Event Section
  if (!eventTriggered) {
    const eventSection = document.getElementById('event_page');
    if (eventSection) {
      const eventPosition = eventSection.getBoundingClientRect().top;
      if (eventPosition < window.innerHeight) {
        eventTriggered = true;
        new Typed("#event", {
          strings: ['Acara Mendatang di Penglipuran.'],
          typeSpeed: 75,
          backSpeed: 150,
          showCursor: false,
          loop: false,
        });
      }
    }
  }

  // Fasilitas Section
  if (!fasilitasTriggered) {
    const fasilitasSection = document.getElementById('fasilitas_page');
    if (fasilitasSection) {
        const fasilitasPosition = fasilitasSection.getBoundingClientRect().top;
        if (fasilitasPosition < window.innerHeight) {
            fasilitasTriggered = true;
            new Typed("#fasilitas", {
                strings: ['Fasilitas Yang ada di Penglipuran.'],
                typeSpeed: 75,
                backSpeed: 150,
                showCursor: false,
                loop: false,
            });
        }
    }
}

  if (aboutTriggered && galleryTriggered && eventTriggered) {
    window.removeEventListener('scroll', handleScrollTriggers);
  }
}

window.addEventListener('scroll', handleScrollTriggers);
handleScrollTriggers();



