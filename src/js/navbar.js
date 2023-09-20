export const openDropDown = () => {
  const dropdownButtons = document.querySelectorAll(".dropdown__button");
  let isHovering = false;

  dropdownButtons.forEach((dropdownButton) => {
    const dropdownContent = dropdownButton.nextElementSibling;
    dropdownButton.onmouseover = function () {
      isHovering = true;
      dropdownButton.classList.add("active-nav");
      dropdownContent.classList.add("show");
      document.querySelector(".overlay").classList.add("show-overlay");
    };

    dropdownButton.onmouseleave = function () {
      isHovering = false;
      setTimeout(() => {
        if (!isHovering) {
          dropdownButton.classList.remove("active-nav");
          dropdownContent.classList.remove("show");
          document.querySelector(".overlay").classList.remove("show-overlay");
        }
      }, 200);
    };
    dropdownContent.onmouseover = function () {
      isHovering = true;
    };

    dropdownContent.onmouseleave = function () {
      isHovering = false;
      setTimeout(() => {
        if (!isHovering) {
          dropdownButtons.forEach((dropdownButton) => {
            dropdownButton.classList.remove("active-nav");
          });
          dropdownContent.classList.remove("show");
          document.querySelector(".overlay").classList.remove("show-overlay");
        }
      }, 200);
    };
  });
};

export const openNavMobile = () => {
  const burger = document.querySelector(".mobile__burger");

  burger.addEventListener("click", () => {
    const nav = document.querySelector(".mobile__nav");

    nav.classList.add("active-mobile");
    document.querySelector(".overlay").classList.add("show-overlay");
  });
};

export const closeNavMobile = () => {
  const burger = document.querySelector(".nav__close-button");

  burger.addEventListener("click", () => {
    const nav = document.querySelector(".mobile__nav");

    nav.classList.remove("active-mobile");
    document.querySelector(".overlay").classList.remove("show-overlay");
  });
};

export const openDropDownMobile = () => {
  const dropdownButtons = document.querySelectorAll(".dropdown__button-mobile");

  dropdownButtons.forEach((dropdownButton) => {
    dropdownButton.addEventListener("click", () => {
      const isActive = dropdownButton.classList.contains("active-accordion");

      dropdownButtons.forEach((button) => {
        button.classList.remove("active-accordion");
        button.nextElementSibling.style.display = "none";
      });

      if (!isActive) {
        dropdownButton.classList.add("active-accordion");
        const dropdown = dropdownButton.nextElementSibling;
        dropdown.style.display = "block";
      }
    });
  });
};
