const FORM = document.createElement('form');
const WORD = document.createElement('div');
const INPUT_WIN = document.createElement('input');
const BUTTON = document.createElement('button');
const RESULT_WIN = document.createElement('div');

function eventFunctionForInput(event) {
  // if (event instanceof KeyboardEvent && event.key !== "Enter")
  //   return;
  event.preventDefault();

  if (WORD.textContent === "") {
    WORD.textContent = INPUT_WIN.value;
  }
  else if (WORD.textContent[WORD.textContent.length-1] === INPUT_WIN.value[0]) {
    RESULT_WIN.textContent = '딩동댕';
    WORD.textContent = INPUT_WIN.value;
  } else {
    RESULT_WIN.textContent = '땡';
  }

  INPUT_WIN.value = "";
  INPUT_WIN.focus();
}

function init() {
  document.body.append(WORD);
  document.body.append(FORM);
  FORM.append(INPUT_WIN);
  FORM.append(BUTTON);
  document.body.append(RESULT_WIN);
  BUTTON.textContent = '입력';
  INPUT_WIN.placeholder = '첫 제시어를 입력해주세요';

  WORD.textContent = "";
  
  FORM.addEventListener('submit', eventFunctionForInput);
  // BUTTON.addEventListener('click', eventFunctionForInput);
  // INPUT_WIN.onkeypress = eventFunctionForInput;
}

init();