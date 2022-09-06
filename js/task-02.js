const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientContainerEl = document.querySelector('#ingredients');

const makeIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = `${ingredient}`;

    return itemEl;
  });
};

const elements = makeIngredients(ingredients);
ingredientContainerEl.append(...elements);
