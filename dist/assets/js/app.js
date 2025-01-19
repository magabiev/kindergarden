const userType = sessionStorage.getItem("user-type") || "";

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

      if (option.textContent == "Мәгариф идарәсе") {
        sessionStorage.setItem("user-type", "admin");

        window.location = "/stats/general";
      } else if (option.textContent == "Ата-ана") {
        sessionStorage.setItem("user-type", "parent");

        window.location = "/achievements";
      } else if (option.textContent == "Тәрбияче") {
        sessionStorage.setItem("user-type", "teacher");
        window.location = "/exercises";
      } else {
        sessionStorage.setItem("user-type", "");
        resetHeader();

        const menuItems = header.querySelectorAll(
          ".header__menu .header__menu-item"
        );

        menuItems.forEach((item, index) => {
          item.style.display = "flex";

          if (index == menuItems.length - 1) {
            let a = item.querySelector("a");
            a.href = "/stats";
          }
        });
      }

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

// Header
const header = document.querySelector(".header");

function resetHeader() {
  const baqchaName = header.querySelector(".header__name");
  const author = header.querySelector(".header__author");
  const name = author.querySelector(".header__author-name");
  const role = author.querySelector(".header__author-role");
  const avatar = author.querySelector(".header__author-avatar img");
  const pupil = header.querySelector(".header__pupil");
  const headerRight = header.querySelector(".header__content-right");

  name.innerHTML = "Шәмсетдинова <br/> Айгөл Таһир кызы";
  role.innerHTML = "Балалар бакчасы тәрбиячесе";
  avatar.src = "/assets/img/avatar.png";

  baqchaName.style.display = "flex";
  pupil.style.display = "none";

  headerRight.style.transform = "translateY(0)";
  headerRight.style.gap = "20px";
}

if (header) {
  const menuItems = header.querySelectorAll(".header__menu .header__menu-item");
  const headerRight = header.querySelector(".header__content-right");
  const name = header.querySelector(".header__name");
  const author = header.querySelector(".header__author");
  const idara = header.querySelector(".header__idara");
  const pupil = header.querySelector(".header__pupil");

  if (userType == "admin" && idara) {
    idara.style.display = "flex";
    name.style.display = "none";
    author.style.display = "none";

    headerRight.style.transform = "translateY(-5px)";
    headerRight.style.gap = "30px";
  }

  if (userType == "parent" && author) {
    const baqchaName = header.querySelector(".header__name");
    const name = author.querySelector(".header__author-name");
    const role = author.querySelector(".header__author-role");
    const avatar = author.querySelector(".header__author-avatar img");

    name.innerHTML = "Хисматуллина Алия <br/> Илдар кызы";
    role.innerHTML = "Әни";
    avatar.src = "/assets/img/ata-ana.jpg";

    baqchaName.style.display = "none";
    pupil.style.display = "flex";

    headerRight.style.transform = "translateY(-5px)";
    headerRight.style.gap = "30px";
  }

  menuItems.forEach((item, index) => {
    if (userType == "admin") {
      if (index == menuItems.length - 1) {
        let a = item.querySelector("a");
        a.href = "/stats/general";
      } else {
        item.style.display = "none";
      }
    }

    if (userType == "parent") {
      if (index != menuItems.length - 2) {
        item.style.display = "none";
      }
    }

    const a = item.querySelector("a");
    const linkUrl = new URL(a.href, window.location.origin);

    let isActive = false;
    if (linkUrl.pathname === "/" && window.location.pathname === "/") {
      isActive = true;
    } else if (
      linkUrl.pathname == "/exercises" &&
      window.location.pathname.startsWith("/exercises")
    ) {
      isActive = true;
    } else if (
      linkUrl.pathname == "/achievements" &&
      window.location.pathname.startsWith("/achievements")
    ) {
      isActive = true;
    } else if (
      linkUrl.pathname.includes("/stats") &&
      window.location.pathname.startsWith("/stats")
    ) {
      isActive = true;
    } else {
      isActive = false;
    }

    isActive && item.classList.add("active");
  });
}

const profile = document.querySelector(".intro__profile");
if (profile) {
  const name = profile.querySelector(".intro__profile-top .text-h2");
  const desc = profile.querySelector(".intro__profile-top .text-h3");
  const avatar = profile.querySelector(".intro__profile-top img");
  const ratingItems = profile.querySelectorAll(
    ".intro__profile-rating .flex-row"
  );

  if (userType == "parent") {
    name.innerHTML = "Хисматуллин Илнур <br/> Айдар улы";
    desc.innerHTML =
      "Саба 6нчы «Балачак» балалар бакчасы, <br/> Урта төркем укучысы, 5 яшь";
    // name.style.display = "none";
    // desc.style.display = "none";
    avatar.src = "/assets/img/little-boy.jpg";
    avatar.style.objectPosition = "center 45%";

    ratingItems[0].style.display = "flex";
    ratingItems[1].style.display = "flex";
    ratingItems[2].style.display = "none";
    ratingItems[3].style.display = "none";
  } else {
    ratingItems[0].style.display = "none";
    ratingItems[1].style.display = "none";
    ratingItems[2].style.display = "flex";
    ratingItems[3].style.display = "flex";
  }
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
    { id: 0, name: "Туган җирем", result: 3 },
    {
      id: 1,
      name: "Казан-Башкалам ",
      result: 1,
    },
    {
      id: 2,
      name: "Татарстанның символикасы ",
      result: 2,
    },
    {
      id: 3,
      name: "Метро станцияләре ",
      result: 1,
    },
    {
      id: 4,
      name: "Югары һәм түбән",
      result: 2,
    },
    {
      id: 5,
      name: "Өстәмә рәт",
      result: 1,
    },
    {
      id: 6,
      name: "Югалтулар",
      result: 4,
    },
    {
      id: 7,
      name: "Каты һәм йомшак",
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
      labels: exerciseData.map((item) => item.name),
      datasets: [
        {
          label: "Exercises",
          data: exerciseData.map((item) => item.result),
          backgroundColor: colorArray,
          hoverOffset: 4,
        },
      ],
    },
    options: {
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
      labels: exerciseData.map((item) => item.name),
      datasets: [
        {
          label: "Exercises",
          data: exerciseData.map((item) => item.result),
          backgroundColor: ["rgb(255, 214, 214)", "rgb(252, 138, 138)"],
          hoverOffset: 4,
        },
      ],
    },
    options: {
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
      labels: exerciseData.map((item) => item.name),
      datasets: [
        {
          label: "Exercises",
          data: exerciseData.map((item) => item.result),
          backgroundColor: ["rgb(226, 224, 250)", "rgb(121, 112, 222)"],
          hoverOffset: 4,
        },
      ],
    },
    options: {
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
        "КОРСАБАШ «КОЯШКАЙ» БАЛАЛАР БАКЧАСЫ",
        "ИСКЕ МИЧӘН «ТАН» БАЛАЛАР БАКЧАСЫ",
        "ТИМЕРШИК «КОЯШКАЙ» БАЛАЛАР БАКЧАСЫ",
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
        "КОРСАБАШ «КОЯШКАЙ» БАЛАЛАР БАКЧАСЫ",
        "ИСКЕ МИЧӘН «ТАН» БАЛАЛАР БАКЧАСЫ",
        "ТИМЕРШИК «КОЯШКАЙ» БАЛАЛАР БАКЧАСЫ",
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

  new Chart(chartCategories4, config);
}

const rangeFilters = document.querySelector(".range__filters");
if (rangeFilters) {
  const items = rangeFilters.querySelectorAll(".range__filters-item");

  items.forEach((item, index, arr) => {
    item.addEventListener("click", () => {
      arr.forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
    });
  });
}

// modal
const modal = {
  el: document.querySelector(".modal"),
  blocks: document.querySelectorAll(".modal__content"),
  open: function (name, animation = true) {
    const target = this.el.querySelector(`[data-root=${name}]`);

    this.el.classList.add("active");
    this.el.style.display = "flex";
    target.style.display = "flex";

    if (animation) {
      setTimeout(() => {
        target.style.opacity = 1;
        target.style.transform = "scale(1)";
      }, 50);
    } else {
      target.style.opacity = 1;
      target.style.transform = "scale(1)";
    }
  },
  close: function (name, parent = true) {
    if (!name) {
      this.blocks.forEach((block) => {
        block.style.opacity = 0;
        block.style.transform = "scale(0.85)";

        setTimeout(() => {
          block.style.display = "none";
        }, 350);
      });
    } else {
      const target = this.el.querySelector(`[data-root=${name}]`);
      target.style.opacity = 0;
      target.style.transform = "scale(0.85)";

      if (!parent) {
        target.style.display = "none";
      } else {
        setTimeout(() => {
          target.style.display = "none";
        }, 350);
      }
    }

    if (parent) {
      setTimeout(() => {
        this.el.classList.remove("active");
        this.el.style.display = "none";
      }, 350);
    }
  },
};

const modalTriggers = document.querySelectorAll("[data-modal]");
modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const name = trigger.dataset.modal;
    if (name !== "close") {
      modal.open(name);
    } else {
      modal.close(null, true);
    }
  });
});
