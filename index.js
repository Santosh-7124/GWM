document.getElementById("notify-trigger").onclick = displayNotify;

function displayNotify() {
  var notifyDiv = document.getElementById("notify-div");
  notifyDiv.style.display = "block";
  notifyDiv.classList.remove("hide");
}

document.getElementById("cancel-notify").onclick = disappearNotify;

function disappearNotify() {
  var notifyDiv = document.getElementById("notify-div");
  notifyDiv.classList.add("hide");
  notifyDiv.addEventListener(
    "animationend",
    function () {
      notifyDiv.style.display = "none";
    },
    { once: true }
  );
}

document.addEventListener("DOMContentLoaded", function () {
  var logo = document.querySelector(".logo");
  var banner = document.querySelector(".banner");
  logo.addEventListener("click", function () {
    banner.scrollIntoView({ behavior: "smooth" });
  });
});

const comingSoon1 = document.getElementById("comingSoon1");
const comingSoon2 = document.getElementById("comingSoon2");
function change() {
  setInterval(() => {
    setInterval(() => {
      setInterval(() => {
        comingSoon1.style.display = "block";
        comingSoon2.style.display = "none";
        setInterval(() => {
          change();
        }, 4000);
      }, 2000);
      comingSoon1.style.display = "none";
      comingSoon2.style.display = "block";
    }, 1000);
    comingSoon1.style.display = "none";
    comingSoon2.style.display = "block";
  }, 20);
}
change();

document.addEventListener("DOMContentLoaded", function () {
  const divContainer = document.querySelector(".vehicle-moving-imgs");
  const divs = document.querySelectorAll(".vehicle-moving-imgs .img-card");
  let currentIndex = 0;

  divs.forEach((div, index) => {
    div.addEventListener("click", function () {
      divs.forEach((d, i) => {
        if (i === index) {
          d.classList.add("main-img");
          d.classList.remove("back-img");
        } else {
          d.classList.remove("main-img");
          d.classList.add("back-img");
        }
      });

      currentIndex = index;
    });
  });

  setInterval(() => {
    divs.forEach((div, index) => {
      if (index === currentIndex) {
        div.classList.add("main-img");
        div.classList.remove("back-img");
      } else {
        div.classList.remove("main-img");
        div.classList.add("back-img");
      }
    });

    currentIndex = (currentIndex + 1) % divs.length;
  }, 4500);
});

document.addEventListener("DOMContentLoaded", function () {
  const divContainer = document.querySelector(".three-wheeler-frame");
  const divs = document.querySelectorAll(".three-wheeler-frame .img-card-1");
  let currentIndex = 0;

  divs.forEach((div, index) => {
    div.addEventListener("click", function () {
      divs.forEach((d, i) => {
        if (i === index) {
          d.classList.add("main-img-1");
          d.classList.remove("back-img-1");
        } else {
          d.classList.remove("main-img-1");
          d.classList.add("back-img-1");
        }
      });

      currentIndex = index;
    });
  });

  setInterval(() => {
    divs.forEach((div, index) => {
      if (index === currentIndex) {
        div.classList.add("main-img-1");
        div.classList.remove("back-img-1");
      } else {
        div.classList.remove("main-img-1");
        div.classList.add("back-img-1");
      }
    });

    currentIndex = (currentIndex + 1) % divs.length;
  }, 4500);
});
