document.addEventListener("DOMContentLoaded", function () {

    anime({
      targets: ".navbar-toggler p", 
      translateY: [-50, 0], 
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1000,
      delay: 3600,
    });

    anime({
      targets: ".nav-item:nth-child(5)", 
      translateX: [-100, 0], 
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: 3800,
    });

    anime({
      targets: ".nav-item:nth-child(4)",
      translateY: [-50, 0], 
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1000,
      delay: 3600,
    });
    anime({
      targets: ".nav-item:nth-child(3)", 
      translateX: [100, 0], 
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: 3800,
    });
  });