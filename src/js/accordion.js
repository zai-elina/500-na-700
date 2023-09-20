export const accordionOpen = () => {
  const accordionList = document.querySelectorAll(".accordion");

  accordionList.forEach((accordion) => {
    accordion.addEventListener("click", () => {
      const isActive = accordion.classList.contains("active-accordion");

      accordionList.forEach((acc) => {
        acc.classList.remove("active-accordion");
        acc.nextElementSibling.style.display = "none";
      });

      if (!isActive) {
        accordion.classList.add("active-accordion");
        const panel = accordion.nextElementSibling;
        panel.style.display = "block";
      }
    });
  });
};
