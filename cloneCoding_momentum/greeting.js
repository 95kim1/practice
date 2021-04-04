const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LOCAL_STORAGE = "currentUser",
    SHOWING_ON = "showing";

function saveName(text) {
    localStorage.setItem(USER_LOCAL_STORAGE, text);
}

function handleSubmit(event) {
    event.preventDefault(); //default : 전송 (somewhere)
    const currentValue = input.value;
    paintGreeting(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit", handleSubmit);
}

//<h4 .js-greeting> show, fill
function paintGreeting(text) {
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    saveName(text);
    greeting.innerText = `Hello ${text}!`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LOCAL_STORAGE);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();