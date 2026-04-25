// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Série filter buttons
document.querySelectorAll('.serie').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.serie').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.feature-card, .conseil-card, .team-card, .dash-card, .split-text, .split-visual').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Contact form
document.querySelector('.contact-form .btn-primary').addEventListener('click', () => {
  const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
  let valid = true;
  inputs.forEach(i => { if (!i.value.trim()) valid = false; });
  if (!valid) {
    alert('Veuillez remplir tous les champs avant d\'envoyer.');
    return;
  }
  alert('Message envoyé ! Merci pour votre intérêt.');
  inputs.forEach(i => i.value = '');
});
