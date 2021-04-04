const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LOCAL_STORAGE = "toDos";

let toDos = [];

function fillterFn(toDo) {
    return toDo.id === 1
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter((toDo)=>{
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LOCAL_STORAGE, JSON.stringify(toDos));
}

function paintToDo(text) {
    if (text==="" || text===null) return;
    
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delBtn");
    deleteBtn.addEventListener("click", deleteToDo);
    deleteBtn.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    const newId = toDos.length + 1;
    
    li.appendChild(deleteBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
    
    li.id = newId;
    const toDoObj = {
        text: text,
        id: newId,
    }
    toDos.push(toDoObj);
}

function toDoHandleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    toDoInput.value = null;
    paintToDo(currentValue);
    saveToDos();
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LOCAL_STORAGE);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach((todo)=>{
            paintToDo(todo.text);
        });
        saveToDos();
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", toDoHandleSubmit);
}

init();