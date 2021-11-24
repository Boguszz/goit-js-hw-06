// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// ============================== Solution - 1 ==============================

// const refs = {
//   fontSizeControl: document.querySelector("#font-size-control"),
//   text: document.querySelector("#text"),
// };

// const onChangeFontSize = (event) =>
//   (refs.text.style.fontSize = `${event.currentTarget.value}px`);

// refs.fontSizeControl.addEventListener("input", onChangeFontSize);

// ============================== Solution - 2 ==============================

const refs = {
  fontSizeControl: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.fontSizeControl.addEventListener("input", onChangeFontSize);
refs.text.style.fontSize = `${refs.fontSizeControl.value}px`;

function onChangeFontSize(event) {
  refs.text.style.fontSize = `${event.currentTarget.value}px`;
}
