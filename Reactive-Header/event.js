const header_menu = document.querySelector(".header_menu"),
  header_icons = document.querySelector(".header_icons"),
  header_toggleButton = document.querySelector(".header_toggleButton");



function init() {
  header_toggleButton.addEventListener("click", (event)=>{
    header_menu.classList.toggle('active');
    header_icons.classList.toggle('active');
  });
}

init();