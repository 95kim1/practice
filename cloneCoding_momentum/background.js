const back = document.querySelector(".back");

const IMG_NUMBER = 5;

function getRandomNum() {//1~5
    return Math.floor(Math.random()*IMG_NUMBER)+1;
}

let opacity;
function fadeFunc() {
    if (opacity<0.85) {
        opacity += .085;
        setTimeout(function(){fadeFunc()}, 100);
    }
    back.style.opacity = opacity;
}

function paintImage() {
    let imgNum = getRandomNum();
    if (back.style.backgroundImage==="") {
        back.style.backgroundImage = `url(\"backgroundImages/${imgNum}.jpg\")`;
        return;
    }
    const curImgNum = back.style.backgroundImage.split("/")[1][0];
    if (imgNum===curImgNum)
        imgNum = (imgNum)%IMG_NUMBER + 1;
    back.style.backgroundImage = `url(\"backgroundImages/${imgNum}.jpg\")`;
    opacity = 0.34;
    fadeFunc();
}

function init() {
    paintImage();
    setInterval(paintImage, 15000);
}

init();