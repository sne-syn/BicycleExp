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
  availability: [],
  categories: [],
  brands: []
};

// const filterByAvailability = (checkedArr, item) => {
//   // console.log(checkedArr);
//   // console.log(item.isInStock);
//   // evt забирать как массив из handler;
//   // если [] или [выбраны оба варианта] = показывай все
//   // если [in-stock] = показывай только isInStock = true
//   // если [special-order] = показывай только isInStock = false
//   if (!item.isInStock || checkedArr.length === 0 || checkedArr.length === 2) {
//     return true;
//   } else if (checkedArr[0] === 'in-stock' && item.isInStock === true) {
//     return true;
//   } else if (checkedArr[0] === 'special-order' && item.isInStock === false) {
//     return true;
//   }
// };

const filterByCategories = (item, checkedArr) => {
  // if (item.category === 'mountain') {
  //   return true;
  // }
  // console.log(item)
  for (let i = 0; i < checkedArr.length; i++) {
    if (item.category == checkedArr[i]) {
      return true;
    }
  }
  // evt забирать как массив из handler;
  // если [] или [выбраны все варианта] = показывай все
  // если [1 || 2 || 3] = показывай все, что подходит
};

const filterByBrand = (checkedArr, arrForCheck) => {
  // evt забирать как массив из handler;
  // если [] или [выбраны все варианта] = показывай все
  // если [1 || 2 || 3] = показывай все, что подходит
};

const filterCards = (item) => {
  let count = 0;
  if (filterStateMap.categories.includes(item.category) || filterStateMap.categories.length === 0) {
    count++;
  }
  if (filterStateMap.brands.includes(item.brand.toLowerCase().replace(/ /g, '-')) || filterStateMap.brands.length === 0) {
    count++;
  }
  return count === 2;
};

const filterChangeHandler = (evt) => {

  const newValue = evt.target.value;
  const clickedFilter = evt.target.name;

  if (clickedFilter === 'availability') {
    filterStateMap.availability.push(newValue);
  } else if (clickedFilter === 'categories') {
    filterStateMap.categories.push(newValue);
  } else if (clickedFilter === 'brand') {
    filterStateMap.brands.push(newValue);
  }

  // console.log(filterStateMap.availability);

  let newArr = products.filter(filterCards);
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