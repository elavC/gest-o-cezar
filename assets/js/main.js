/* Scroll reveal - 
Mostrar o elemento quando der scroll na página */

const myInput = document.getElementById('myInput')

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "5px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `
.s-hero .title, 
.s-success .tag ,
.title-success,
.cards,
.card,
.s-about,
.about-me .my-picture,
.title-cases,
.cases`,
  { interval: 100 }
);

const nav = document.querySelector("header .container nav");

const toggle = document.querySelectorAll(".toggle");

for (element of toggle) {
  element.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

const links = document.querySelectorAll(
  "nav .menu li .menu-item, nav, nav .menu-social li a"
);

for (const link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}
