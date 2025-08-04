// Mobile navigation toggle
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

// Portfolio filtering
const filterButtons = document.querySelectorAll('[data-filter]');
const workItems = document.querySelectorAll('.work-item');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    filterButtons.forEach(btn => btn.classList.remove('active-filter'));
    button.classList.add('active-filter');

    workItems.forEach(item => {
      const category = item.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        item.style.display = 'block';
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        }, 100);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        setTimeout(() => { item.style.display = 'none'; }, 300);
      }
    });
  });
});

// Modal functionality
const workModal = document.getElementById('work-modal');
const modalWorkTitle = document.getElementById('modal-work-title');
const modalWorkContent = document.getElementById('modal-work-content');
const closeWorkModal = document.getElementById('close-work-modal');

function openWorkModal(title, content) {
  modalWorkTitle.textContent = title;
  modalWorkContent.textContent = content;
  workModal.classList.remove('hidden');
  workModal.classList.add('flex');
}

closeWorkModal.addEventListener('click', () => {
  workModal.classList.add('hidden');
  workModal.classList.remove('flex');
});
workModal.addEventListener('click', (e) => {
  if (e.target === workModal) {
    workModal.classList.add('hidden');
    workModal.classList.remove('flex');
  }
});

