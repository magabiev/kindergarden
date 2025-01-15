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

// ** Accordions ** //
const getAccordionParents = document.querySelectorAll("[data-accordion");
getAccordionParents.forEach((parent) => {
  const isMultiple = parent.dataset.multiple;
  const accordions = parent.querySelectorAll(".accordion");
  accordions.forEach((accordion) => {
    const header = accordion.querySelector(".accordion__header");
    const body = accordion.querySelector(".accordion__body");
    const content = accordion.querySelector(".accordion__content");

    header.addEventListener("click", () => {
      const isActive = accordion.classList.contains("active");
      if (!isActive) {
        accordion.classList.add("active");
        body.style.maxHeight = content.scrollHeight + "px";
      } else {
        accordion.classList.remove("active");
        body.style.maxHeight = 0;
      }

      if (!isMultiple || isMultiple == "false") {
        accordions.forEach((el) => {
          if (el !== accordion) {
            el.classList.remove("active");
            el.querySelector(".accordion__body").style.maxHeight = 0;
          }
        });
      }
    });
  });
});

const colorArray = [
  "#88DBFB",
  "#9FFFA2",
  "#A2ACFF",
  "#ffc08e",
  "#ffef79",
  "#51b59f",
  "#69c86d",
  "#ffafc2",
];

let exerciseData = [
  { id: 0, name: "Югалтулар", result: 3 },
  {
    id: 1,
    name: "Өстәмә рәт",
    result: 1,
  },
  {
    id: 2,
    name: "Нәрсә авыррак?",
    result: 2,
  },
  {
    id: 3,
    name: "Парны тап",
    result: 1,
  },
  {
    id: 4,
    name: "Күләгәне тап",
    result: 2,
  },
  {
    id: 5,
    name: "Күңелле исәп",
    result: 1,
  },
  {
    id: 6,
    name: "Бала һәм әни",
    result: 4,
  },
  {
    id: 7,
    name: "3 кадәр саныйбыз",
    result: 1,
  },
];
exerciseData = exerciseData.map((item, index) => {
  return {
    ...item,
    color: colorArray[index],
  };
});
const data = {
  datasets: [
    {
      label: "Exercises",
      data: exerciseData.map((item) => item.result),
      backgroundColor: colorArray,
      hoverOffset: 4,
    },
  ],
};

const config = {
  type: "doughnut",
  data: data,
};

const ctx = document.getElementById("chart-1");

new Chart(ctx, config);
