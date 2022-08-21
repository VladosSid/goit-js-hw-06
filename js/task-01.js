const firstItemEl = document.querySelectorAll("#categories .item");

console.log("Number of categories:", firstItemEl.length);

firstItemEl.forEach((el, i, array) => {
  console.log("Category:", el.firstElementChild.innerHTML);

  const secondaryListEL = array[i].querySelectorAll("li");
  console.log("Elements:", secondaryListEL.length);
});
