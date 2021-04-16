const moreBtn = document.querySelector(".infoAndUpNext .metadata .titleAndButton .moreBtn");
const title = document.querySelector(".infoAndUpNext .metadata .title");

function init() {
  moreBtn.addEventListener("click", () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
  });
}

init();