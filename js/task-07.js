// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// ============================== Solution ==============================

const refs = {
  fontSizeControl: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

const onChangeFontSize = (event) =>
  (refs.text.style.fontSize = `${event.currentTarget.value}px`);

refs.fontSizeControl.addEventListener("input", onChangeFontSize);
