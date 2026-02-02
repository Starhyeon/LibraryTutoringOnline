document.addEventListener('DOMContentLoaded', () => {
    const subjectBtns = document.querySelectorAll('.subject-btn');
    const panel = document.getElementById('subject-content');
    const panelBody = document.getElementById('panel-body');
    const closeBtn = document.getElementById('close-panel');
    const logo = document.querySelector('.logo');

    const subjects = {
        math: '<h2>Math Tutoring</h2><p>Our math program covers everything from basic arithmetic to advanced problem solving for K-6 students.</p>',
        reading: '<h2>Reading Tutoring</h2><p>Developing strong literacy skills through guided reading and comprehension exercises.</p>',
        science: '<h2>Science Tutoring</h2><p>Exploring the wonders of science with interactive lessons aligned with the NYC curriculum.</p>',
        history: '<h2>History Tutoring</h2><p>Bringing history to life through engaging storytelling and critical analysis.</p>'
    };

    subjectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const subject = btn.getAttribute('data-subject');
            panelBody.innerHTML = subjects[subject] || '<h2>Coming Soon</h2>';
            panel.classList.add('active');
        });
    });

    closeBtn.addEventListener('click', () => {
        panel.classList.remove('active');
    });

    window.addEventListener('click', (e) => {
        if (e.target === panel) {
            panel.classList.remove('active');
        }
    });

    // LOGO CLICK → go back to initial hero
    logo.addEventListener('click', () => {
        panel.classList.remove('active'); // hide panel
        panelBody.innerHTML = '';        // clear content
    });
});
