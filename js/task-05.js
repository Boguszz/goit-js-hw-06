// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

// ============================== Solution - 1 ==============================

// const refs = {
//   nameInput: document.querySelector("#name-input"),
//   nameOutput: document.querySelector("#name-output"),
// };

// const onChangeName = (event) =>
//   (refs.nameOutput.textContent = event.currentTarget.value);

// refs.nameInput.addEventListener("input", onChangeName);

// ============================== Solution - 2 ==============================

const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

refs.nameInput.addEventListener("input", onChangeName);

function onChangeName(event) {
  return refs.nameInput.value === ""
    ? (refs.nameOutput.textContent = "Anonymous")
    : (refs.nameOutput.textContent = event.currentTarget.value);
}
