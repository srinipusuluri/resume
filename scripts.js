// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Apply animations to skill and project cards
document.addEventListener('DOMContentLoaded', function() {
  const skillCards = document.querySelectorAll('.skill-card');
  const projectCards = document.querySelectorAll('.project-card');

  [...skillCards, ...projectCards].forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});

// Header background change on scroll
let lastScrollY = window.scrollY;

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const currentScrollY = window.scrollY;

  if (currentScrollY > 50) {
    header.style.background = 'linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%)';
  } else {
    header.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)';
  }

  lastScrollY = currentScrollY;
});

// Prevent right-click context menu (optional for demo protection)
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Accessibility: Add focus outline for keyboard navigation
document.addEventListener('keydown', function(e) {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-navigation');
  }
});

document.addEventListener('mousedown', function() {
  document.body.classList.remove('keyboard-navigation');
});
