// Dark/light mode toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Typing animation
const text = ["Subhomoy Ganguly", "a Web Developer", "a Problem Solver"];
let index = 0, charIndex = 0;
const typedText = document.querySelector('.typed-text');

function type() {
  if (charIndex < text[index].length) {
    typedText.textContent += text[index].charAt(charIndex++);
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = text[index].substring(0, --charIndex);
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % text.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (text.length) setTimeout(type, 500);
});

// Scroll to top
const scrollBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
