document.querySelectorAll('.nav-links a, .btn.primary').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // Hide all sections
    document.querySelectorAll('section').forEach(sec => {
      sec.classList.remove('active', 'fade-in');
    });

    const page = e.target.dataset.page;
    const targetSection = document.getElementById(page);

    if (targetSection) {
      targetSection.classList.add('active', 'fade-in');
    }

    // Reset Home animation
    if (page === 'home') {
      document.querySelector('.hero-left').classList.remove('fade-in-left');
      document.querySelector('.hero-right').classList.remove('fade-in-right');
      void document.querySelector('.hero-left').offsetWidth; // reflow
      document.querySelector('.hero-left').classList.add('fade-in-left');
      document.querySelector('.hero-right').classList.add('fade-in-right');
    }
  });
});
