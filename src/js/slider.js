import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export const createSlider = () => {
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
};
