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
// Mobile navigation toggle
const mobileNavToggle = document.getElementById('mobile-nav-toggle');
const mobileNav = document.getElementById('mobile-nav');

mobileNavToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
});

// Active link highlighting (already in index.html but can move here)
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a[href^='#']");

function setActiveLink() {
    let scrollY = window.scrollY + 150;
    sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");
        if (scrollY >= top && scrollY < top + height) {
            navLinks.forEach(link => link.classList.remove("active"));
            document.querySelector(`nav a[href="#${id}"]`).classList.add("active");
        }
    });
}
window.addEventListener("scroll", setActiveLink);

// Optional: Navbar background color change on scroll
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
