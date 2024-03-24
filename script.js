const navBarButton = document.getElementById("nav-btn");
const closeButton = document.getElementById("close-btn");
const navbarLinks = document.querySelector(".navlinks");

let sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header .navlinks ul li a");

let isOpen = false;

navBarButton.addEventListener("click", () => {
  isOpen = !isOpen;
  if (isOpen) {
    navbarLinks.classList.add("active");
  } else {
    navbarLinks.classList.remove("active");
  }
});

closeButton.addEventListener("click", () => {
  isOpen = false;
  navbarLinks.classList.remove("active");
});

window.addEventListener("resize", () => {
  let screenWidth = window.innerWidth;
  if (screenWidth > 760) {
    navbarLinks.classList.remove("active");
    isOpen = false;
  }
});

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    navbarLinks.classList.remove("active");
    isOpen = false;
  })
);

// Function to handle scroll events
function handleScroll() {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150; // Adjusted offset
    let height = section.offsetHeight;
    let id = section.getAttribute("id");
    // Calculate the bottom of the section
    let sectionBottom = offset + height;
    // Check if the section is in the viewport
    if (
      (top >= offset && top < sectionBottom) ||
      top + window.innerHeight >= document.body.scrollHeight
    ) {
      navLinks.forEach((a) => {
        a.classList.remove("active");
      });
      document
        .querySelector("header nav a[href='#" + id + "']")
        .classList.add("active");
    }
  });
}

// Function to handle initial scroll position
function handleInitialScroll() {
  let top = window.scrollY;
  let height = window.innerHeight;
  let homeOffset = document.getElementById("home").offsetTop - 150;
  if (top >= homeOffset && top < homeOffset + height) {
    document
      .querySelector("header nav a[href='#home']")
      .classList.add("active");
  }
}

// Add event listeners
window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleInitialScroll);
