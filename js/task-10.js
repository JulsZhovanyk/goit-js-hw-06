function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxesRef = document.querySelector("#boxes");

function createBoxes(amount) {
  const array = [];

  for (let i = 0; i < amount; i += 1) {
    const element = `<div style="width: ${30 + i * 10}px; height: ${
      30 + i * 10
    }px ; background-color: ${getRandomHexColor()}"></div>`;
    array.push(element);
  }

  const stringArray = array.join("");
  return boxesRef.insertAdjacentHTML("afterbegin", stringArray);
}

buttonCreate.addEventListener("click", () => {
  const inputEl = document.querySelector("#controls input");
  console.dir(inputEl);
  createBoxes(inputEl.valueAsNumber);
});

buttonDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxesRef.innerHTML = "";
}
