// Fade-in
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('fade-overlay').style.display = 'none';
    document.querySelector('.hero').classList.add('show');
  }, 1500);
});

// Navigation buttons
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section, .hero');

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.section;
    sections.forEach(sec => sec.classList.remove('show'));
    document.getElementById(target).classList.add('show');
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
});

// Hero buttons
document.querySelectorAll('.hero-btns button').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.section;
    sections.forEach(sec => sec.classList.remove('show'));
    document.getElementById(target).classList.add('show');
    window.scrollTo({top:0, behavior:'smooth'});
  });
});

// Learning section grade -> subject
const gradeBoxes = document.querySelectorAll('.grade-box');
const subjectPanel = document.querySelector('.subject-panel');
const subjectTitle = document.getElementById('subject-title');
const subjectContent = document.getElementById('subject-content');

gradeBoxes.forEach(box => {
  box.addEventListener('click', () => {
    subjectPanel.classList.remove('hidden');
    subjectTitle.textContent = `Grade ${box.dataset.grade}`;
    subjectContent.innerHTML = '';
  });
});

// Subject buttons
const subjectButtons = document.querySelectorAll('.subject-btn');
subjectButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const subject = btn.dataset.subject;
    const subjects = {
      math: '<p>Math content goes here.</p>',
      reading: '<p>Reading content goes here.</p>',
      science: '<p>Science content goes here.</p>',
      history: '<p>History content goes here.</p>'
    };
    subjectContent.innerHTML = subjects[subject] || '<p>Coming soon!</p>';
  });
});
