import {
  removeCards,
  renderCard
} from './cards';
import {
  pagination,
  pageButtons
} from './pagination';
import {
  data
} from './data-mock';

const filter = document.querySelector('.filter');
let products = data;

const filterStateMap = {
  availability: new Set(),
  categories: new Set(),
  brands: new Set()
};

const filterByAvailability = (item) => {
  if (filterStateMap.availability.size === 0 || filterStateMap.availability.size === 2) {
    return true;
  } else if (filterStateMap.availability.has('in-stock') && item.isInStock === true) {
    return true;
  } else if (filterStateMap.availability.has('special-order') && item.isInStock === false) {
    return true;
  }
};

const filterByCategories = (item) => {
  if (filterStateMap.categories.size === 0 || filterStateMap.categories.has(item.category)) {
    return true;
  }
};

const filterByBrand = (item) => {
  if (filterStateMap.brands.size === 0 || filterStateMap.brands.has(item.brand.toLowerCase().replace(/ /g, '-'))) {
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

const filterChangeHandler = (evt) => {
  let newArr = [];
  const newValue = evt.target.value;
  const clickedFilter = evt.target.name;
  console.log(clickedFilter);

  if (clickedFilter === 'availability') {
    if (!filterStateMap.availability.has(newValue)) {
      filterStateMap.availability.add(newValue);
    } else {
      filterStateMap.availability.delete(newValue);
    }
  } else if (clickedFilter === 'categories') {
    if (!filterStateMap.categories.has(newValue)) {
      filterStateMap.categories.add(newValue);
    } else {
      filterStateMap.categories.delete(newValue);
    }
  } else if (clickedFilter === 'brand') {
    if (!filterStateMap.brands.has(newValue)) {
      filterStateMap.brands.add(newValue);
    } else {
      filterStateMap.brands.delete(newValue);
    }
  }

  //console.log(filterStateMap.availability);

  newArr = products.filter(filterCards);
  console.log(newArr);

  // //  filter products by 'availability' => 'categories' => 'brands';
};

filter.addEventListener('change', function (evt) {
  filterChangeHandler(evt);
});

// fetch('http://localhost:3000/products').then(function (response) {
//     if (response.ok) {
//         response.json().then(function (json) {
//             products = json;
//             render();
//         });
//     } else {
//         console.log('Network request for products.json failed with response ' + response.status + ': ' + response.statusText);
//     }
// });

const cardsList = document.querySelector('.cards-flow');
let state = {
  'page': 1,
  'cards': 9,
  'window': 5,
};

export const render = () => {
  const querySet = products;
  removeCards();
  const data = pagination(state, querySet);
  const productsList = data.querySet;
  const countCardsOnPage = productsList.length > state.cards ? state.cards : productsList.length;
  for (let i = 0; i < countCardsOnPage; i++) {
    cardsList.appendChild(renderCard(productsList[i]));
  }
  pageButtons(data.pages, state);

  const paginationTarget = document.querySelector(`.page-link[value="${state.page}"]`);
  paginationTarget.parentNode.classList.add('active');
};

render();