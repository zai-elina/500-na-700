import "../styles/main.scss";
import { accordionOpen } from "./accordion";
import {
  closeNavMobile,
  openDropDown,
  openDropDownMobile,
  openNavMobile,
} from "./navbar";
import { createSlider } from "./slider";
import Inputmask from "inputmask";
import { validateForm } from "./validateForm";

openDropDown();

openNavMobile();

closeNavMobile();

openDropDownMobile();

createSlider();

accordionOpen();

const phoneInput = document.getElementById("phone-input");
Inputmask().mask(phoneInput);

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateForm()) {
    alert("Форма отправлена!");
    form.reset();
  }
});
