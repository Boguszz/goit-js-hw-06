// Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

// ============================== Solution ==============================

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const layoutGeneratorForIngredientsList = (ingredient) => {
  const ingredientsRef = document.querySelector("#ingredients");

  const itemRef = document.createElement("li");
  itemRef.classList.add("item");
  itemRef.textContent = ingredient;

  ingredientsRef.append(itemRef);
  return ingredientsRef;
};

const createMarkupOnPage = ingredients.map((ingredient) =>
  layoutGeneratorForIngredientsList(ingredient)
);
