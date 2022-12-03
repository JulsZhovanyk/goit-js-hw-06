const categories = document.querySelector("#categories");
const elements = categories.querySelectorAll(".item");
console.log("Number of categories:", elements.length);

elements.forEach((element) => {
  const namesEl = element.querySelector("h2");
  console.log("Category:", namesEl.textContent);
  const itemsEl = element.querySelectorAll("li");
  console.log("Elements:", itemsEl.length);
});
