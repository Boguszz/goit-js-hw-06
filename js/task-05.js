// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

// ============================== Solution ==============================

const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

const onChangeName = (event) =>
  (refs.nameOutput.textContent = event.currentTarget.value);

refs.nameInput.addEventListener("input", onChangeName);
