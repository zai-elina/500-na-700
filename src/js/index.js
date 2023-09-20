import "../styles/main.scss";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const dropdownButton = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown__content");

dropdownButton.addEventListener("click", (event) => {
  event.preventDefault();
  dropdownButton.classList.toggle("active");
  dropdownContent.classList.toggle("show");
  document.querySelector(".overlay").classList.toggle("show-overlay");
});

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".swiper", {
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  speed: 500,

  slidesPerView: 1.5,

  spaceBetween: 20,

  centeredSlides: true,

  freeMode: true,
});
