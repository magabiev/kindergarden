const startSection = document.querySelector(".start");
if (startSection) {
  const btn = startSection.querySelector(".btn");

  btn.addEventListener("click", () => {
    startSection.style.display = "none";
  });
}
