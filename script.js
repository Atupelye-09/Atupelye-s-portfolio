const text = [
  "Cloud Computing Student",
  "Frontend Developer",
  "Web Designer",
  "Future Software Engineer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

  if(count === text.length){
    count = 0;
  }

  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if(letter.length === currentText.length){

    count++;
    index = 0;

    setTimeout(type, 1500);

  }else{

    setTimeout(type, 100);

  }

})();
/* PARTICLES */

particlesJS("particles-js", {

  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },

    color: {
      value: ["#22d3ee", "#a855f7", "#ffffff"]
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.5,
      random: true
    },

    size: {
      value: 4,
      random: true
    },

    line_linked: {
      enable: true,
      distance: 150,
      color: "#22d3ee",
      opacity: 0.3,
      width: 1
    },

    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },

  interactivity: {
    detect_on: "canvas",

    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },

      onclick: {
        enable: true,
        mode: "push"
      },

      resize: true
    },

    modes: {

      repulse: {
        distance: 100,
        duration: 0.4
      },

      push: {
        particles_nb: 4
      }

    }
  },

  retina_detect: true

});
/* CURSOR GLOW EFFECT */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";

});
/* HOVER GLOW */

const hoverItems = document.querySelectorAll(
  ".btn, .project-card, .skill-card"
);

hoverItems.forEach(item => {

  item.addEventListener("mouseenter", () => {

    glow.style.width = "350px";
    glow.style.height = "350px";

  });

  item.addEventListener("mouseleave", () => {

    glow.style.width = "250px";
    glow.style.height = "250px";

  });

});
/* LOADING SCREEN */

window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {

    loader.style.opacity = "0";
    loader.style.visibility = "hidden";

  }, 2000);

});
/* SCROLL REVEAL */

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

});

hiddenElements.forEach((el) => observer.observe(el));
/* ANIMATED COUNTER */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  counter.innerText = "0";

  const updateCounter = () => {

    const target = +counter.getAttribute("data-target");

    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){

      counter.innerText =
      `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter, 30);

    }else{

      counter.innerText = target;

    }

  };

  updateCounter();

});