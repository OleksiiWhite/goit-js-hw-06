const categoriesOfItem = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesOfItem.children.length}`);

const itemsOfCategories = document.querySelectorAll('.item');

itemsOfCategories.forEach(item => {
  const titleOfCategory = item.querySelector('h2');
  console.log(`Category: ${titleOfCategory.textContent}`);

  const numberOfItems = item.querySelectorAll('li');
  console.log(`Elements: ${numberOfItems.length}`);
});
