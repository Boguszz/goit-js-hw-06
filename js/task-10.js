// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.
// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

// ============================== Solution - 1 ==============================

// const refs = {
//   create: document.querySelector("[data-create]"),
//   destroy: document.querySelector("[data-destroy]"),
//   boxes: document.querySelector("#boxes"),
// };

// refs.create.addEventListener("click", onGetAmount);
// refs.destroy.addEventListener("click", onDestroyBoxes);

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function onGetAmount() {
//   const amount = document.querySelector("#controls input").value;
//   onCreateBoxes(amount);
// }

// function onCreateBoxes(amount) {
//   for (let i = 0; i < amount; i += 1) {
//     let size = 30 + i * 10;
//     const markup = `<div class="square" style="background-color:${getRandomHexColor()}; width:${size}px; height:${size}px;"></div>`;
//     refs.boxes.insertAdjacentHTML("beforeend", markup);
//   }
// }

// function onDestroyBoxes() {
//   return (refs.boxes.innerHTML = "");
// }

// ============================== Solution - 2 ==============================

const refs = {
  create: document.querySelector("[data-create]"),
  destroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.create.addEventListener("click", onGetAmount);
refs.destroy.addEventListener("click", onDestroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onGetAmount() {
  const amount = document.querySelector("#controls input").value;
  onCreateBoxes(amount);
}

function onCreateBoxes(amount) {
  if (refs.boxes.querySelector(".square")) {
    onDestroyBoxes();
    for (let i = 0; i < amount; i += 1) {
      let size = 30 + i * 10;
      const markup = `<div class="square" style="background-color:${getRandomHexColor()}; width:${size}px; height:${size}px;"></div>`;
      refs.boxes.insertAdjacentHTML("beforeend", markup);
      document.querySelector("#controls input").value = 0;
    }
  } else {
    for (let i = 0; i < amount; i += 1) {
      let size = 30 + i * 10;
      const markup = `<div class="square" style="background-color:${getRandomHexColor()}; width:${size}px; height:${size}px;"></div>`;
      refs.boxes.insertAdjacentHTML("beforeend", markup);
      document.querySelector("#controls input").value = 0;
    }
  }
}

function onDestroyBoxes() {
  document.querySelector("#controls input").value = 0;
  return (refs.boxes.innerHTML = "");
}
