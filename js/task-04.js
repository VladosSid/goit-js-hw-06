const value = document.querySelector("#value");
const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const decrementValue = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const incrementValue = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

decrementEl.addEventListener("click", decrementValue);
incrementEl.addEventListener("click", incrementValue);
