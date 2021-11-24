// Напиши скрипт, который изменяет цвета фона элемента <body>
// через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

// ============================== Solution - 1 ==============================

// const refs = {
//   chengeColor: document.querySelector(".change-color"),
//   selectedColor: document.querySelector(".color"),
// };

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// console.log(getRandomHexColor());

// function onColorChange(event) {
//   document.body.style.backgroundColor = getRandomHexColor();
//   refs.selectedColor.textContent = getRandomHexColor();
// }

// refs.chengeColor.addEventListener("click", onColorChange);

// ============================== Solution - 2 ==============================

const refs = {
  chengeColor: document.querySelector(".change-color"),
  selectedColor: document.querySelector(".color"),
};

refs.chengeColor.addEventListener("click", onColorChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onColorChange(event) {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  refs.selectedColor.textContent = color;
}
