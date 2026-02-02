document.addEventListener('DOMContentLoaded', () => {
  const subjectBtns = document.querySelectorAll('.subject-btn');
  const panel = document.getElementById('subject-content');
  const panelBody = document.getElementById('panel-body');
  const closeBtn = document.getElementById('close-panel');
  const logo = document.querySelector('.logo');
  const hero = document.querySelector('.hero');

  const subjects = {
    math: '<h2>Math Tutoring</h2><p>Our math program covers everything from basic arithmetic to advanced problem solving for K-6 students.</p>',
    reading: '<h2>Reading Tutoring</h2><p>Developing strong literacy skills through guided reading and comprehension exercises.</p>',
    science: '<h2>Science Tutoring</h2><p>Exploring the wonders of science with interactive lessons aligned with the NYC curriculum.</p>',
    history: '<h2>History Tutoring</h2><p>Bringing history to life through engaging storytelling and critical analysis.</p>'
  };

  subjectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      panelBody.innerHTML = subjects[btn.dataset.subject];
      panel.classList.add('active');
    });
  });

  closeBtn.addEventListener('click', () => {
    panel.classList.remove('active');
    panelBody.innerHTML = '';
  });

  window.addEventListener('click', e => {
    if(e.target === panel){
      panel.classList.remove('active');
      panelBody.innerHTML = '';
    }
  });

  logo.addEventListener('click', e => {
    e.preventDefault();
    panel.classList.remove('active');
    panelBody.innerHTML = '';
  });

  // Floating hero dots
  for(let i=0;i<15;i++){
    const dot = document.createElement('div');
    dot.className='hero-dot';
    dot.style.left = `${Math.random()*100}%`;
    dot.style.top = `${Math.random()*100}%`;
    dot.style.width = dot.style.height = `${Math.random()*6+4}px`;
    dot.style.animationDuration = `${5+Math.random()*5}s`;
    hero.appendChild(dot);
  }
});
