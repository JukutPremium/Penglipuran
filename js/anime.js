document.addEventListener("DOMContentLoaded", function () {

    anime({
      targets: ".navbar-toggler p", // Center nav link
      translateY: [-50, 0], // Start from above and move down
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1000,
      delay: 3600,
    });

    anime({
      targets: ".nav-item:nth-child(5)", // Left nav link
      translateX: [-100, 0], // Start from left and move to center
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: 3800, // delay to ensure it's smoother
    });

    anime({
      targets: ".nav-item:nth-child(4)", // Center nav link
      translateY: [-50, 0], // Start from above and move down
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1000,
      delay: 3600,
    });
    anime({
      targets: ".nav-item:nth-child(1)", // Right nav link
      translateX: [100, 0], // Start from right and move to center
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: 3800,
    });
  });