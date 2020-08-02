import {
  render, products
} from './render';

export const filter = document.querySelector('.filter');

const filterSetMap = {
  availability: new Set(),
  category: new Set(),
  brand: new Set()
};

const filterTypeMap = {
  availability: 'availability',
  category: 'category',
  brand: 'brand'
};

const filterByAvailability = (item) => {
  if (filterSetMap.availability.size === 0 || filterSetMap.availability.size === 2) {
    return true;
  } else if (filterSetMap.availability.has('in-stock') && item.isInStock === true) {
    return true;
  } else if (filterSetMap.availability.has('special-order') && item.isInStock === false) {
    return true;
  }
};

const filterByCategories = (item) => {
  if (filterSetMap.category.size === 0 || filterSetMap.category.has(item.category)) {
    return true;
  }
};

const filterByBrand = (item) => {
  if (filterSetMap.brand.size === 0 || filterSetMap.brand.has(item.brand.toLowerCase().replace(/ /g, '-'))) {
    return true;
  }
};

const filterCards = (item) => {
  let count = 0;
  if (filterByAvailability(item)) {
    count++;
  }
  if (filterByCategories(item)) {
    count++;
  }
  if (filterByBrand(item)) {
    count++;
  }
  return count === 3;
};

export const filterChangeHandler = (evt) => {
  const newValue = evt.target.value;
  const clickedFilter = evt.target.name;

  if (clickedFilter === filterTypeMap[clickedFilter]) {
    if (!filterSetMap[filterTypeMap[clickedFilter]].has(newValue)) {
      filterSetMap[filterTypeMap[clickedFilter]].add(newValue);
    } else {
      filterSetMap[filterTypeMap[clickedFilter]].delete(newValue);
    }
  }

  const newArr = products.filter(filterCards);
  console.log(newArr);
  render(newArr);
};

