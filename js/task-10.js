const buttonCreateEl = document.querySelector("[data-create]");
const buttonDestroyEl = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");

// Стили для родительского контейнера
boxesEl.style.display = "flex";
boxesEl.style.gap = "10px";
boxesEl.style.flexWrap = "wrap";

const masBox = [];

buttonCreateEl.addEventListener("click", () => {
  console.log(masBox);

  deleteBox();
  createBoxes(masBox.length);

  // masBox.splice(0, masBox.length);
});

// считывание значения INPUT
inputEl.addEventListener("blur", inputValue);

function inputValue() {
  const j = inputEl.value;
  for (let i = 0; i < j; i += 1) {
    masBox.push(1);
  }
}

// Удаление созданных елементов по кнопке
buttonDestroyEl.addEventListener("click", deleteBox);

function deleteBox() {
  while (boxesEl.firstChild) {
    boxesEl.removeChild(boxesEl.firstChild);
  }
}

// функция создания дочерних коробок со стилями
function createBoxes(amount) {
  const newEl = [];
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    size += 10;

    const createEl = document.createElement("div");

    // boxesEl.append(createEl);

    createEl.style.width = `${size}px`;
    createEl.style.height = `${size}px`;

    createEl.style.backgroundColor = `${getRandomHexColor()}`;
    newEl.push(createEl.outerHTML);
  }
  boxesEl.innerHTML = newEl.join("");
}

// функция рандома цветов фона
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
