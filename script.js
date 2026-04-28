const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  });
});

const btn = document.querySelector('.fixed-btn');
const cta = document.querySelector('.cta');
const fv = document.querySelector('.fv'); 

window.addEventListener('scroll', () => {
  if (!btn || !cta || !fv) return;

  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  const fvBottom = fv.offsetTop + fv.offsetHeight; 
  const ctaTop = cta.offsetTop;

  // FV抜けたら表示
  if (scrollY > fvBottom - 300) {
    btn.classList.remove('is-hidden');
  } else {
    btn.classList.add('is-hidden');
  }

  // CTAで非表示
  if (scrollY + windowHeight > ctaTop) {
    btn.classList.add('is-hidden');
  }
});