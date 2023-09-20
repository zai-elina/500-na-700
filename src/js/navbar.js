export const openDropDown = () => {
  const dropdownButton = document.querySelector(".dropdown");
  const dropdownContent = document.querySelector(".dropdown__content");

  dropdownButton.addEventListener("click", (event) => {
    event.preventDefault();
    dropdownButton.classList.toggle("active");
    dropdownContent.classList.toggle("show");
    document.querySelector(".overlay").classList.toggle("show-overlay");
  });
};
