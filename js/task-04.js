let counterValue = 0;

const decBtnEl = document.querySelector('button[data-action="decrement"]');
const incBtnEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

const onDecBtnClick = decBtnEl.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

const onIncBtnClick = incBtnEl.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
