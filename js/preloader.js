window.addEventListener('load', () => {
    document.body.classList.add('preloader-active');
  
    gsap.to('.preloader-logo', { opacity: 1, duration: 1, y: 0, ease: "power3.out" });
  
    gsap.to('.loading-text', { opacity: 1, duration: 1, delay: 0.5 });
  
    gsap.to('.preloader', {
      opacity: 0,
      duration: 1.5,
      delay: 3,
      onComplete: () => {
        document.querySelector('.preloader').style.display = 'none';
        
        document.body.classList.remove('preloader-active');
        
        gsap.fromTo('.image-section img', 
          { scale: 0.5, opacity: 0 }, 
          { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
        );
  
        // Menampilkan konten setelah preloader selesai
        // gsap.fromTo('.content', { opacity: 0 }, { opacity: 1, duration: 1 });
      },
    });
  });