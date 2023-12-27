//! ------------- START GLOBAL DATA -------------------

let navBar = document.querySelector(".list-menu");
let toggleMenu = document.getElementById("toggleMenu");
//! ------------- END GLOBAL DATA -------------------

//! ------------- Start Events -------------------

toggleMenu.addEventListener("click", function () {
  navBar.classList.toggle("active");
});

window.onscroll = () => {
  navBar.classList.remove("active");
};

//! ------------- End Events -------------------
