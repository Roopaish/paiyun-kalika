const header = document.querySelector(".header");
document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 150) {
    header.style.backgroundColor = "white";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

const toggler = document.querySelector("#toggle-navbar");

toggler.addEventListener("change", () => {
  if (toggler.checked) {
    header.style.backgroundColor = "white";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
