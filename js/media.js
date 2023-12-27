//! ------------- START GLOBAL DATA -------------------
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let playIcon = document.getElementById("playIcon");
let navBar = document.querySelector(".list-menu");
let toggleMenu = document.getElementById("toggleMenu");
//! ------------- END GLOBAL DATA -------------------

//! ------------- Start Functions -------------------

function playPause() {
  if (playIcon.classList.contains("fa-pause")) {
    song.pause();
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
  } else {
    song.play();
    playIcon.classList.add("fa-pause");
    playIcon.classList.remove("fa-play");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

//! ------------- End Functions -------------------

//! ------------- Start Events -------------------
song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

playIcon.addEventListener("click", function () {
  playPause();
});

progress.addEventListener("change", () => {
  song.play();
  song.currentTime = progress.value;
  playIcon.classList.add("fa-pause");
  playIcon.classList.remove("fa-play");
});

document.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "Enter":
      playPause();
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
