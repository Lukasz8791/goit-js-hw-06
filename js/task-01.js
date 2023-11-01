const categoriesList = document.querySelector("#categories");
const categoryLiItems = categoriesList.querySelectorAll("li.item");
const categoryNumber = categoryLiItems.length;
console.log(`Number of categories: ${categoryNumber}`);

categoryLiItems.forEach((categoryItem) => {
  const categoryTitle = categoryItem.querySelector("h2").textContent;
  const categorySubTittle = categoryItem.querySelectorAll("ul li").length;
  console.log(`Category: ${categoryTitle}, Elements: ${categorySubTittle}`);
});
