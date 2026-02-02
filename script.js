document.addEventListener('DOMContentLoaded', () => {
    const subjectBtns = document.querySelectorAll('.subject-btn');
    const panel = document.getElementById('subject-content');
    const panelBody = document.getElementById('panel-body');
    const closeBtn = document.getElementById('close-panel');
    const logo = document.querySelector('.logo');
    const hero = document.querySelector('.hero');

    // Subject content
    const subjects = {
        math: '<h2>Math Tutoring</h2><p>Our math program covers everything from basic arithmetic to advanced problem solving for K-6 students.</p>',
        reading: '<h2>Reading Tutoring</h2><p>Developing strong literacy skills through guided reading and comprehension exercises.</p>',
        science: '<h2>Science Tutoring</h2><p>Exploring the wonders of science with interactive lessons aligned with the NYC curriculum.</p>',
        history: '<h2>History Tutoring</h2><p>Bringing history to life through engaging storytelling and critical analysis.</p>'
    };

    // Panel open
    subjectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const subject = btn.getAttribute('data-subject');
            panelBody.innerHTML = subjects[subject] || '<h2>Coming Soon</h2>';
            panel.classList.add('active');
        });
    });

    // Panel close
    closeBtn.addEventListener('click', () => {
        panel.classList.remove('active');
    });

    window.addEventListener('click', (e) => {
        if (e.target === panel) panel.classList.remove('active');
    });

    // Logo click → reset hero
    logo.addEventListener('click', () => {
        panel.classList.remove('active');
        panelBody.innerHTML = '';
    });

    // Floating hero dots (like sushi site)
    for (let i = 0; i < 15; i++) {
        const dot = document.createElement('div');
        dot.classList.add('hero-dot');
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.width = dot.style.height = `${Math.random() * 6 + 4}px`;
        dot.style.animationDuration = `${5 + Math.random() * 5}s`;
        hero.appendChild(dot);
    }
});
