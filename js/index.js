//! ------------- START GLOBAL DATA -------------------
let imgs = Array.from(
  document.querySelectorAll(".gallery .gallery-row .card .item img")
);
let lightBox = document.getElementById("lightBox");
let closeIcon = document.getElementById("closeIcon");
let boxContent = document.getElementById("boxContent");
let currentIndex = 0;
let nextSlide = document.getElementById("nextSlide");
let prevSlide = document.getElementById("prevSlide");
let navBar = document.querySelector(".list-menu");
let toggleMenu = document.getElementById("toggleMenu");
//! ------------- END GLOBAL DATA -------------------

//! ------------- Start Functions -------------------
function close() {
  lightBox.classList.add("dNone");
}

function next() {
  currentIndex++;

  if (currentIndex == imgs.length) {
    currentIndex = 0;
  }

  let currentElementSrc = imgs[currentIndex].getAttribute("src");
  boxContent.style.backgroundImage = `url(${currentElementSrc})`;
}

function prev() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = imgs.length - 1;
  }

  let currentElementSrc = imgs[currentIndex].getAttribute("src");
  boxContent.style.backgroundImage = `url(${currentElementSrc})`;
}
//! ------------- End Functions -------------------

//! ------------- Start Events -------------------
for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (e) {
    let currentTraget = e.target;
    currentIndex = imgs.indexOf(currentTraget);
    lightBox.classList.remove("dNone");
    //select element
    let currentSrc = e.target.getAttribute("src"); // src img which i click on it
    boxContent.style.backgroundImage = `url(${currentSrc})`;
  });
}

closeIcon.addEventListener("click", () => close());

nextSlide.addEventListener("click", () => next());

prevSlide.addEventListener("click", () => prev());

document.addEventListener("click", function (e) {
  if (e.target == lightBox) {
    close();
  }
});

document.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "ArrowRight":
      next();
      break;
    case "ArrowLeft":
      prev();
      break;
    case "Escape":
      close();
      break;
  }
});

toggleMenu.addEventListener("click", function () {
  navBar.classList.toggle("active");
});

window.onscroll = () => {
  navBar.classList.remove("active");
};

//! ------------- End Events -------------------
