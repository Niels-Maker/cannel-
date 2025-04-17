// script.js - Animations et interactions

// Animation d’apparition des sections au scroll
const revealElements = document.querySelectorAll('.section, .hero');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1
});

revealElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(el);
});

// Ajout du scroll doux
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
