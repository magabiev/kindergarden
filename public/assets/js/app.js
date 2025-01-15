const startSection = document.querySelector(".start");
if (startSection) {
  const startText = startSection.querySelector(".start__text");
  const startSelect = startSection.querySelector(".start__select");
  const options = startSelect.querySelectorAll(".start__select-option");
  const btnText = startText.querySelector(".btn");
  const btnSelect = startSelect.querySelector(".btn");

  options.forEach((option, index, arr) => {
    option.addEventListener("click", () => {
      arr.forEach((item) => {
        item.classList.remove("active");
      });

      option.classList.add("active");
    });
  });

  btnText.addEventListener("click", () => {
    startText.style.display = "none";
    startSelect.style.display = "flex";
  });

  btnSelect.addEventListener("click", () => {
    startSelect.style.display = "none";
    startText.style.display = "flex";
    startSection.style.display = "none";
  });
}
