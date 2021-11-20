// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// ============================== Solution ==============================

const inputRef = document.querySelector("#validation-input");

function onCheckNumbersOfInput(event) {
  if (inputRef.value.length !== Number(inputRef.dataset.length)) {
    inputRef.classList.add("invalid");
  } else {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  }
}

inputRef.addEventListener("blur", onCheckNumbersOfInput);
