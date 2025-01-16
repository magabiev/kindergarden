const startSection = document.querySelector(".start");
if (startSection) {
  const startText = startSection.querySelector(".start__text");
  const startSelect = startSection.querySelector(".start__select");
  const options = startSelect.querySelectorAll(".start__select-option");
  const btnText = startText.querySelector(".btn");

  options.forEach((option, index, arr) => {
    option.addEventListener("click", () => {
      arr.forEach((item) => {
        item.classList.remove("active");
      });

      option.classList.add("active");

      setTimeout(() => {
        startSelect.style.display = "none";
        startText.style.display = "flex";
        startSection.style.display = "none";
      }, 100);
    });
  });

  btnText.addEventListener("click", () => {
    startText.style.display = "none";
    startSelect.style.display = "flex";
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

const chartExercises = document.getElementById("chart-1");
if (chartExercises) {
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

  const config = {
    type: "doughnut",
    data: {
      datasets: [
        {
          label: "Exercises",
          data: exerciseData.map((item) => item.result),
          backgroundColor: colorArray,
          hoverOffset: 4,
        },
      ],
    },
  };

  new Chart(chartExercises, config);
}

const chartCategories1 = document.getElementById("chart-2");
if (chartCategories1) {
  let exerciseData = [
    { id: 0, name: "Дөрес булмаган җаваплар", result: 1 },
    { id: 1, name: "Дөрес җаваплар", result: 3 },
  ];

  const config = {
    type: "doughnut",
    data: {
      datasets: [
        {
          label: "Exercises",
          data: exerciseData.map((item) => item.result),
          backgroundColor: ["rgb(255, 214, 214)", "rgb(252, 138, 138)"],
          hoverOffset: 4,
        },
      ],
    },
  };

  new Chart(chartCategories1, config);
}

const chartCategories2 = document.getElementById("chart-3");
if (chartCategories2) {
  let exerciseData = [
    { id: 0, name: "Дөрес булмаган җаваплар", result: 1 },
    { id: 1, name: "Дөрес җаваплар", result: 5 },
  ];

  const config = {
    type: "doughnut",
    data: {
      datasets: [
        {
          label: "Exercises",
          data: exerciseData.map((item) => item.result),
          backgroundColor: ["rgb(226, 224, 250)", "rgb(121, 112, 222)"],
          hoverOffset: 4,
        },
      ],
    },
  };

  new Chart(chartCategories2, config);
}

const chartCategories3 = document.getElementById("chart-4");
if (chartCategories3) {
  const config = {
    type: "bar",
    data: {
      labels: [
        "САБА 6НЧЫ «БАЛАЧАК» БАЛАЛАР БАКЧАСЫ",
        "САБА 1НЧЕ «ШАТЛЫК» БАЛАЛАР БАКЧАСЫ",
        "САБА 2НЧЕ «ӘЛЛҮКИ» БАЛАЛАР БАКЧАСЫ",
        "САБА 4НЧЕ «КЫҢГЫРАУ» БАЛАЛАР БАКЧАСЫ",
        "КОРСАБАШ «КУЯШКАЙ» БАЛАЛАР БАКЧАСЫ",
        "ИСКЕ МИЧӘН «ТАН» БАЛАЛАР БАКЧАСЫ",
        "ТИМЕРШИК «КУЯШКАЙ» БАЛАЛАР БАКЧАСЫ",
        "САБА 5НЧЕ «БӘЛӘКӘЧ» БАЛАЛАР БАКЧАСЫ",
      ],
      datasets: [
        {
          label: "Value",
          data: [40, 25, 60, 45, 77, 54, 25, 89],
          backgroundColor: "rgb(172, 217, 181)",
          borderColor: "rgb(172, 217, 181)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      indexAxis: "y",
      scales: {
        x: {
          beginAtZero: true,
          max: 100,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return `${tooltipItem.raw}`;
            },
          },
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  };

  new Chart(chartCategories3, config);
}

const chartCategories4 = document.getElementById("chart-5");
if (chartCategories4) {
  const config = {
    type: "bar",
    data: {
      labels: [
        "САБА 6НЧЫ «БАЛАЧАК» БАЛАЛАР БАКЧАСЫ",
        "САБА 1НЧЕ «ШАТЛЫК» БАЛАЛАР БАКЧАСЫ",
        "САБА 2НЧЕ «ӘЛЛҮКИ» БАЛАЛАР БАКЧАСЫ",
        "САБА 4НЧЕ «КЫҢГЫРАУ» БАЛАЛАР БАКЧАСЫ",
        "КОРСАБАШ «КУЯШКАЙ» БАЛАЛАР БАКЧАСЫ",
        "ИСКЕ МИЧӘН «ТАН» БАЛАЛАР БАКЧАСЫ",
        "ТИМЕРШИК «КУЯШКАЙ» БАЛАЛАР БАКЧАСЫ",
        "САБА 5НЧЕ «БӘЛӘКӘЧ» БАЛАЛАР БАКЧАСЫ",
      ],
      datasets: [
        {
          label: "Dataset 1",
          data: [40, 25, 60, 45, 77, 54, 25, 89],
          backgroundColor: "rgb(88, 183, 112)",
          borderColor: "rgb(88, 183, 112)",
          borderWidth: 1,
        },
        {
          label: "Dataset 2",
          data: [30, 15, 50, 35, 67, 44, 20, 70],
          backgroundColor: "rgba(255, 99, 132, 0.6)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
        {
          label: "Dataset 3",
          data: [50, 35, 70, 55, 87, 64, 30, 90],
          backgroundColor: "rgb(254, 225, 3);",
          borderColor: "rgb(254, 225, 3)",
          borderWidth: 1,
        },
        {
          label: "Dataset 4",
          data: [20, 10, 40, 25, 57, 34, 15, 60],
          backgroundColor: "rgb(170, 220, 255)",
          borderColor: "rgb(170, 220, 255)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        x: {
          stacked: false,
          ticks: {
            minRotation: 90,
            maxRotation: 90,
          },
        },
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return `${tooltipItem.raw}`;
            },
          },
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  };

  new Chart(chartCategories4, config);
}
