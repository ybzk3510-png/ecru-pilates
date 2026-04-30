const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    document.body.classList.remove("menu-open");
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

  if (scrollY > fvBottom - 300) {
    btn.classList.remove('is-hidden');
  } else {
    btn.classList.add('is-hidden');
  }

  if (scrollY + windowHeight > ctaTop) {
    btn.classList.add('is-hidden');
  }
});
