import "../styles/main.scss";
import Swiper from "swiper";
import "swiper/css";

const dropdownButton = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown__content");

dropdownButton.addEventListener("click", () => {
  dropdownButton.classList.toggle("active");
  dropdownContent.classList.toggle("show");
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
