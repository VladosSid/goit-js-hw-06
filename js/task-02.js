const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const firstListEl = document.querySelector("#ingredients");
console.log(firstListEl);

ingredients.forEach((element) => {
  const createLiEl = document.createElement("li");
  console.log(element);

  firstListEl.append(createLiEl);

  createLiEl.textContent = element;

  createLiEl.classList.add("item");
});

// !!! Не совсем понял как выполнить 4й пункт:
// "После чего вставит все <li> за одну операцию в список ul#ingredients."
//  - мой вариант верный???
