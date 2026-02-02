// Fade in
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => document.body.classList.add('loaded'), 1500);

    // Smooth scroll for nav buttons
    document.querySelectorAll('.nav-btn, .hero-btns button, .logo').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            let targetId = btn.dataset.target || btn.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if(target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
