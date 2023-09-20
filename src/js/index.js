import "../styles/main.scss";
import { accordionOpen } from "./accordion";
import { openDropDown } from "./navbar";
import { createSlider } from "./slider";
import Inputmask from "inputmask";
import { validateForm } from "./validateForm";

openDropDown();

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
