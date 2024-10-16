let aboutTriggered = false;
window.addEventListener('scroll', function () {
  const aboutSection = document.getElementById('about');
  const aboutPosition = aboutSection.getBoundingClientRect().top;
  if (aboutPosition < window.innerHeight && !aboutTriggered) {
    aboutTriggered = true; 
    var typed = new Typed("#about-title", {
      strings: ['Tentang Penglipuran.'],
      typeSpeed: 150,
      backSpeed: 150,
      // startDelay: 500,
      showCursor: false,
      loop: false,
    })
  }
});

var typed = new Typed("#welcome", {
  strings: ['— WELCOME —'],
  typeSpeed: 200,
  backSpeed: 150,
  showCursor: false,
  loop: false,
});

let galleryTriggered = false;
window.addEventListener('scroll', function () {
  const gallerytSection = document.getElementById('gallery');
  const galleryPosition = gallerytSection.getBoundingClientRect().top;
  if (galleryPosition < window.innerHeight && !galleryTriggered) {
    galleryTriggered = true; 
var dayaTarik = new Typed("#daya_tarik", {
  strings: ['Budaya Lokal.'],
  typeSpeed:200,
  backSpeed: 150,
  showCursor: false,
  loop: false,
    })
  }
});

let eventTriggered = false;
window.addEventListener('scroll', function () {
  const eventtSection = document.getElementById('event_page');
  const eventPosition = eventtSection.getBoundingClientRect().top; // dah ?
  if (eventPosition < window.innerHeight && !eventTriggered) {
    eventTriggered = true; 
var event = new Typed("#event", {
  strings: ['Upcoming Events in Penglipuran.'],
  typeSpeed:200,
  backSpeed: 150,
  showCursor: false,
  loop: false,
    })
  }
})



