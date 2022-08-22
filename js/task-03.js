const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const firstListEl = document.querySelector(".gallery");
console.log(firstListEl);
// Стили для Ul
firstListEl.style.display = "flex";
firstListEl.style.gap = "20px";

// Добавление силектоар li and img
images.forEach((el) => {
  firstListEl.insertAdjacentHTML(
    "beforeend",
    `<li><img src='${el.url}' alt='${el.alt}' /></li>`
  );
});

// Добавление сласса для тсилизации для img
const imgEl = document.querySelectorAll("img");

imgEl.forEach((el) => {
  el.classList.add("img-style");
});

// Добаление стилей для img
const imgClassEl = document.querySelectorAll(".img-style");
console.log(imgClassEl);

imgClassEl.forEach((el) => {
  el.style.width = "200px";
});
