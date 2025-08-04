// Mobile menu
document.getElementById('mobile-nav-toggle').addEventListener('click', () => {
    document.getElementById('mobile-nav').classList.toggle('hidden');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.getElementById('mobile-nav').classList.add('hidden');
    });
});
