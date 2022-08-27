const firstItemEl = document.querySelectorAll("#categories .item");

console.log("Number of categories:", firstItemEl.length);

firstItemEl.forEach((el, i, array) => {
  console.log("Category:", el.firstElementChild.innerHTML);

  const secondaryListEL = el.lastElementChild.children.length;
  console.log("Elements:", secondaryListEL);
});
