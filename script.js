document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav a");

  function activateNav() {
    let fromTop = window.scrollY + 100;

    sections.forEach(section => {
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href").includes(section.id)) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", activateNav);
});
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function showSlide(i) {
  if (i < 0) index = images.length - 1;
  else if (i >= images.length) index = 0;
  else index = i;
  slides.style.transform = `translateX(${-index * 100}%)`;
}

prevBtn.addEventListener("click", () => showSlide(index - 1));
nextBtn.addEventListener("click", () => showSlide(index + 1));

// Автопрокрутка
setInterval(() => showSlide(index + 1), 5000);

