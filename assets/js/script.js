'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}
let x1 = 0, y1 = 0;

const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
const delay = 850; // Animation duration
const fsize = ['2.1rem', '2.4rem', '1.0rem', '2.7rem']; // Font sizes for stars
const colors = [
  '#FFD700', // Gold
  '#C0C0C0', // Silver
  '#00BFFF', // Bright Blue
  '#FF69B4', // Hot Pink
  '#40E0D0', // Turquoise
  '#FFFFFF'  // White
];

// Utility functions
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const selRand = (arr) => arr[rand(0, arr.length - 1)];
const distanceTo = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

// Function to add a star at a specific position
const addStar = (x, y) => {
  const star = document.createElement("div");
  star.innerHTML = '&#10022;';
  star.className = 'star';
  star.style.top = `${y + rand(-20, 20)}px`;
  star.style.left = `${x}px`;
  star.style.color = selRand(colors);
  star.style.fontSize = selRand(fsize);
  document.body.appendChild(star);

  const fs = 10 + 5 * parseFloat(getComputedStyle(star).fontSize);
  star.animate({
    opacity: 0,
    translate: `0 ${(y + fs) > vh ? vh - y : fs}px`,
    transform: `rotateX(${rand(1, 500)}deg) rotateY(${rand(1, 500)}deg)`,
  }, {
    duration: delay,
    fill: 'forwards'
  });

  setTimeout(() => {
    star.remove();
  }, delay);
};

// Event listener for mouse movement (desktop/laptop)
window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  if (distanceTo(x1, y1, clientX, clientY) >= 50) {
    addStar(clientX, clientY);
    x1 = clientX;
    y1 = clientY;
  }
});

// Event listener for touch movement (mobile)
window.addEventListener("touchmove", (e) => {
  const touch = e.touches[0]; // Get the first touch point
  const x = touch.clientX;
  const y = touch.clientY;
  addStar(x, y); // Create a star at the touch point
});



const textArray = [
  "Full Stack Developer",
  "Web Developer",
  "Machine Learning"
];
const typingText = document.getElementById('typing-text');
let arrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[arrayIndex].length) {
      typingText.textContent += textArray[arrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
  } else {
      setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
      typingText.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
  } else {
      arrayIndex = (arrayIndex + 1) % textArray.length;
      setTimeout(type, 200);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(type, 500);
});

/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// Get the button
let topBtn = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
topBtn.onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};
