function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark / light mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
}

// Select the custom cursor element
const cursor = document.querySelector('.custom-cursor');

// Add an event listener to track mouse movement
document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

// Optional: Add hover effect for clickable items like buttons or links
const hoverElements = document.querySelectorAll('a, button');

hoverElements.forEach(element => {
  element.addEventListener('mouseover', () => {
      cursor.style.transform = 'scale(1.5)'; // Enlarge on hover
  });

  element.addEventListener('mouseout', () => {
      cursor.style.transform = 'scale(1)'; // Return to normal size
  });
});

document.addEventListener("DOMContentLoaded", () => {
gsap.registerPlugin(ScrollTrigger);

// GSAP animation for profile picture with bounce effect
// const profilePic = document.querySelector("#profile .section__pic-container img");
// gsap.from(profilePic, {
//   scrollTrigger: {
//     trigger: "#profile", // Trigger when the profile section appears
//     start: "top center", // When the top of the profile section hits the center of the viewport
//     end: "+=100", // End animation after scrolling 100px
//     toggleActions: "play none none reverse", // Play on scroll, reverse on scroll back
//     markers: false // Remove markers if not needed
//   },
//   opacity: 0,
//   scale: 0.8, // Scale down from 80%
//   y: 30, // Start from a lower position
//   duration: 1.2,
//   ease: "bounce.out", // Bounce effect
// });

// GSAP animation for profile text with stagger effect
const profileText = document.querySelector("#profile .section__text");
gsap.from(profileText.children, {
  scrollTrigger: {
    trigger: "#profile", // Trigger when the profile section appears
    start: "top center", // When the top of the profile section hits the center of the viewport
    end: "+=100", // End animation after scrolling 100px
    toggleActions: "play none none reverse", // Play on scroll, reverse on scroll back
    markers: false // Remove markers if not needed
  },
  opacity: 0,
  y: 50, // Slide up from below
  duration: 1,
  ease: "power3.out",
  stagger: 0.3, // Stagger delay between each text animation
});
});


document.addEventListener("DOMContentLoaded", () => {
gsap.registerPlugin(ScrollTrigger);

// Select elements to animate
const sectionText = document.querySelector("#about .section__text__p1, #about .title");
const aboutPic = document.querySelector("#about .about-pic");
const aboutDetails = document.querySelectorAll("#about .details-container");
const textContainer = document.querySelector("#about .text-container");
const arrowIcon = document.querySelector("#about .arrow");

// GSAP animation for section text
gsap.from(sectionText, {
  scrollTrigger: {
    trigger: "#about",
    start: "top center", // When the top of the section hits the center of the viewport
    end: "bottom center", // End animation when the bottom of the section hits the center
    toggleActions: "play none none none", // Play on scroll, do nothing on reverse
    scrub: true, // Smooth animation during scroll
    markers: false // Remove markers if not needed
  },
  opacity: 0,
  y: 50, // Slide up from below
  duration: 1,
  ease: "power3.out",
  stagger: 0.2 // Stagger delay between each text animation
});

// GSAP animation for about picture
gsap.from(aboutPic, {
  scrollTrigger: {
    trigger: "#about",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none none",
    scrub: true,
    markers: false
  },
  opacity: 0,
  scale: 0.8, // Scale down from 80%
  duration: 1,
  ease: "power3.out"
});

// GSAP animation for details containers
gsap.from(aboutDetails, {
  scrollTrigger: {
    trigger: "#about",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none none",
    scrub: true,
    markers: false
  },
  opacity: 0,
  y: 50, // Slide up from below
  duration: 1,
  ease: "power3.out",
  stagger: 0.2 // Stagger delay between each detail container
});

// GSAP animation for text container
gsap.from(textContainer, {
  scrollTrigger: {
    trigger: "#about",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none none",
    scrub: true,
    markers: false
  },
  opacity: 0,
  y: 50, // Slide up from below
  duration: 1,
  ease: "power3.out"
});

// GSAP animation for arrow icon
gsap.from(arrowIcon, {
  scrollTrigger: {
    trigger: "#about",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none none",
    scrub: true,
    markers: false
  },
  opacity: 0,
  y: 50, // Slide up from below
  duration: 1,
  ease: "power3.out"
});
});


document.addEventListener("DOMContentLoaded", () => {
gsap.registerPlugin(ScrollTrigger);

// Select elements to animate
const sectionText = document.querySelector("#experience .section__text__p1, #experience .title");
const experienceContainers = document.querySelectorAll("#experience .details-container");
const articleContainers = document.querySelectorAll("#experience .article-container");
const arrowIcon = document.querySelector("#experience .arrow");

// GSAP animation for section text
gsap.from(sectionText, {
  scrollTrigger: {
    trigger: "#experience",
    start: "top center", // When the top of the section hits the center of the viewport
    end: "bottom center", // End animation when the bottom of the section hits the center
    toggleActions: "play none none none", // Play on scroll, do nothing on reverse
    scrub: true, // Smooth animation during scroll
    markers: false // Remove markers if not needed
  },
  opacity: 0,
  y: 50, // Slide up from below
  duration: 1.2,
  ease: "power3.out",
  stagger: 0.2 // Stagger delay between each text element
});

// GSAP animation for experience containers
gsap.from(experienceContainers, {
  scrollTrigger: {
    trigger: "#experience",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none none",
    scrub: true,
    markers: false
  },
  opacity: 0,
  y: 50, // Slide up from below
  scale: 0.95, // Slightly scale down
  duration: 1.5,
  ease: "power3.out",
  stagger: 0.3 // Stagger delay between each container
});

// GSAP animation for articles inside containers
gsap.from(articleContainers, {
  scrollTrigger: {
    trigger: "#experience",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none none",
    scrub: true,
    markers: false
  },
  opacity: 0,
  y: 50, // Slide up from below
  duration: 1.2,
  ease: "power3.out",
  stagger: {
    amount: 0.3, // Total duration of stagger effect
    from: "start" // Stagger from the start of the container
  }
});

// GSAP animation for arrow icon
gsap.from(arrowIcon, {
  scrollTrigger: {
    trigger: "#experience",
    start: "bottom center", // Start animation when the bottom of the section hits the center
    end: "bottom 10%", // End animation before the section completely exits the viewport
    toggleActions: "play none none none",
    scrub: true,
    markers: false
  },
  opacity: 0,
  y: 50, // Slide up from below
  duration: 1.2,
  ease: "power3.out"
});
});


document.addEventListener("DOMContentLoaded", () => {
gsap.registerPlugin(ScrollTrigger);

// Select elements to animate
const sectionText = document.querySelector("#projects .section__text__p1, #projects .title");
const projectDetails = document.querySelectorAll("#projects .details-container");
const projectImages = document.querySelectorAll("#projects .project-img");
const projectTitles = document.querySelectorAll("#projects .project-title");
const projectButtons = document.querySelectorAll("#projects .project-btn");
const arrowIcon = document.querySelector("#projects .arrow");

// GSAP animation for section text
gsap.from(sectionText, {
  scrollTrigger: {
    trigger: "#projects",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none none",
    scrub: true,
    markers: false
  },
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: "power3.out",
  stagger: 0.2
});

// GSAP animation for project details containers
gsap.from(projectDetails, {
  scrollTrigger: {
    trigger: "#projects",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none none",
    scrub: true,
    markers: false
  },
  opacity: 0,
  y: 50,
  scale: 0.95,
  duration: 1.5,
  ease: "power3.out",
  stagger: 0.3
});

// GSAP animation for project images
gsap.from(projectImages, {
  scrollTrigger: {
    trigger: "#projects",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none none",
    scrub: true,
    markers: false
  },
  opacity: 0,
  y: 30,
  duration: 1.2,
  ease: "power2.out",
  stagger: 0.4
});

// GSAP animation for project titles
gsap.from(projectTitles, {
  scrollTrigger: {
    trigger: "#projects",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none none",
    scrub: true,
    markers: false
  },
  opacity: 0,
  y: 30,
  duration: 1.2,
  ease: "power2.out",
  stagger: 0.3
});

// GSAP animation for arrow icon
gsap.from(arrowIcon, {
  scrollTrigger: {
    trigger: "#projects",
    start: "bottom center",
    end: "bottom 10%",
    toggleActions: "play none none none",
    scrub: true,
    markers: false
  },
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: "power3.out"
});
});

document.addEventListener("DOMContentLoaded", () => {
gsap.registerPlugin(ScrollTrigger);

// Select elements to animate
const contactSection = document.querySelector("#contact");
const sectionText = contactSection.querySelector(".section__text__p1, .title");
const formFields = contactSection.querySelectorAll(".contact__form-field");
const submitButton = contactSection.querySelector(".submit-btn");

// GSAP animation for section text
gsap.from(sectionText, {
  scrollTrigger: {
    trigger: "#contact",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none none",
    scrub: true,
    markers: false
  },
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: "power3.out",
  stagger: 0.2
});

// GSAP animation for form fields
gsap.from(formFields, {
  scrollTrigger: {
    trigger: "#contact",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none none",
    scrub: true,
    markers: false
  },
  opacity: 0,
  y: 30,
  duration: 1.2,
  ease: "power2.out",
  stagger: 0.3
});

// GSAP animation for submit button
gsap.from(submitButton, {
  scrollTrigger: {
    trigger: "#contact",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none none",
    scrub: true,
    markers: false
  },
  opacity: 0,
  y: 30,
  duration: 1.2,
  ease: "power2.out"
});
});
