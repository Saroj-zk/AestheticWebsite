// Function to smooth scroll to sections when buttons in the header are clicked
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Switch from welcome page to portfolio page on "Explore" button click
document.getElementById('explore-btn').addEventListener('click', () => {
    document.getElementById('welcome-page').classList.add('hidden');
    document.getElementById('portfolio-page').classList.remove('hidden');
});

// Project card hover effect to apply scaling and shadow transition
const projectCards = document.querySelectorAll('.project-item');

projectCards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});
