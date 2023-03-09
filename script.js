// Array of background images
const images = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
];

// Get the hero section and hero content
const heroSection = document.querySelector("#hero");
const heroContent = document.querySelector(".hero-content");

// Set the background image of the hero section to a random image from the array
heroSection.style.backgroundImage = `url(${
  images[Math.floor(Math.random() * images.length)]
})`;

// Calculate the height of the navbar
const navbarHeight = document.querySelector("nav").offsetHeight;

// Update the top position of the hero content to account for the navbar height
heroContent.style.top = `calc(50% - ${navbarHeight / 2}px)`;
