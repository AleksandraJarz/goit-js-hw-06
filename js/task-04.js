const decBtn = document.querySelector(`button[data-action="decrement"]`);
const incBtn = document.querySelector(`button[data-action="increment"]`);
let counterValue = 0;
const counterSpan = document.querySelector("#value");

const decrement = () => {
  counterValue--;
  value.textContent = counterValue;
};

const increment = () => {
  counterValue++;
  value.textContent = counterValue;
};

decBtn.addEventListener("click", decrement);
incBtn.addEventListener("click", increment);
