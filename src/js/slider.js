import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export const createSlider = () => {
  Swiper.use([Navigation, Pagination]);

  const swiperIntro = new Swiper(".intro", {
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

  const swiperInroMobile = new Swiper(".intro-mobile", {
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    speed: 500,

    spaceBetween: 20,

    centeredSlides: true,

    freeMode: true,
  });

  const swiperNews = new Swiper(".swiper-news", {
    loop: true,

    speed: 500,

    slidesPerView: 1.5,

    spaceBetween: 20,

    freeMode: true,
  });
};
