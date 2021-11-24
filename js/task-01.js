// Напиши скрипт который:
// 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// 2. Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента (тега <h2>)
// и количество элементов в категории (всех вложенных в него <li>).

// В результате, в консоли будут выведены такие сообщения.
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// ============================== Solution - 1 ==============================

// const categoriesRef = document.querySelectorAll(".item");
// const allCategoryTitlesRef = document.querySelectorAll("h2");
// const animalsRef = categoriesRef[0].querySelectorAll("li");
// const productsRef = categoriesRef[1].querySelectorAll("li");
// const technologiesRef = categoriesRef[2].querySelectorAll("li");

// console.log(`Number of categories: ${categoriesRef.length}`); // Number of categories: 3
// console.log("");
// console.log(`Category: ${allCategoryTitlesRef[0].textContent}`); // Category: Animals
// console.log(`Elements: ${animalsRef.length}`); // Elements: 4
// console.log("");
// console.log(`Category: ${allCategoryTitlesRef[1].textContent}`); // Category: Products
// console.log(`Elements: ${productsRef.length}`); // Elements: 3
// console.log("");
// console.log(`Category: ${allCategoryTitlesRef[2].textContent}`); // Category: Technologies
// console.log(`Elements: ${technologiesRef.length}`); // Elements: 5

// ============================== Solution - 2 ==============================

const allCategoriesRefs = document.querySelectorAll(".item");

console.log(`Number of categories: ${allCategoriesRefs.length}`);
allCategoriesRefs.forEach((item) => {
  const sublist = item.querySelectorAll("ul li");
  const title = item.querySelector("h2");
  console.log("");
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${sublist.length}`);
});
