const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const firstListEl = document.querySelector("#ingredients");

const generateLi = [];
ingredients.forEach((element) => {
  const createLiEl = document.createElement("li");

  createLiEl.textContent = element;
  createLiEl.classList.add("item");

  generateLi.push(createLiEl.outerHTML);
});

firstListEl.innerHTML = generateLi.join("");
