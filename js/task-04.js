// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

// ============================== Solution ==============================

const refs = {
  increment: document.querySelector("[data-action='increment']"),
  decrement: document.querySelector("[data-action='decrement']"),
  value: document.querySelector("#value"),
};

let counterValue = 0;

function onIncrement(event) {
  counterValue += 1;
  return (refs.value.textContent = counterValue);
}

function onDecrement(event) {
  counterValue -= 1;
  return (refs.value.textContent = counterValue);
}

refs.increment.addEventListener("click", onIncrement);
refs.decrement.addEventListener("click", onDecrement);
