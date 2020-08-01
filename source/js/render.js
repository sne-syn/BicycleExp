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

const filterByAvailability = (checkedArr, item) => {
  // console.log(checkedArr);
  // console.log(item.isInStock);
  // evt забирать как массив из handler;
  // если [] или [выбраны оба варианта] = показывай все
  // если [in-stock] = показывай только isInStock = true
  // если [special-order] = показывай только isInStock = false
  if (!item.isInStock || checkedArr.length === 0 || checkedArr.length === 2) {
    return true;
  } else if (checkedArr[0] === 'in-stock' && item.isInStock === true) {
    return true;
  } else if (checkedArr[0] === 'special-order' && item.isInStock === false) {
    return true;
  }
};

const filterByCategories = (item) => {
  if (item.category === 'mountain') {
    return true;
  }
  // console.log(item)
  // for (let i = 0; i < checkedArr.length; i++) {
  //     if (item.category !== checkedArr[i]) {
  //         return false;
  //     }
  //     return item.category === checkedArr[i];
  // }
  // evt забирать как массив из handler;
  // если [] или [выбраны все варианта] = показывай все
  // если [1 || 2 || 3] = показывай все, что подходит
};

const filterByBrand = (checkedArr, arrForCheck) => {
  // evt забирать как массив из handler;
  // если [] или [выбраны все варианта] = показывай все
  // если [1 || 2 || 3] = показывай все, что подходит
};

const filterChangeHandle = (evt) => {
  const newValue = evt.target.value;
  const clickedFilter = evt.target.name;

  if (clickedFilter === 'availability') {
    filterStateMap.availability.push(newValue);
  } else if (clickedFilter === 'categories') {
    filterStateMap.categories.push(newValue);
  } else if (clickedFilter === 'brand') {
    filterStateMap.brands.push(newValue);
  }

  // console.log(filterStateMap.brands);
  // console.log(filterStateMap.availability);
  // console.log(filterStateMap.categories);

  // let availabilityArr = products.filter((item) => {
  //     if (!item.isInStock || filterStateMap.availability.length === 0 || filterStateMap.availability.length === 2) {
  //         return true;
  //     } else if (filterStateMap.availability[0] === 'in-stock' && item.isInStock === true) {
  //         return true;
  //     } else if (filterStateMap.availability[0] === 'special-order' && item.isInStock === false) {
  //         return true;
  //     }
  // });

  // let newArr = products.filter((item) => {
  //   for (let i = 0; i < filterStateMap.categories.length; i++) {
  //     if (item.category === filterStateMap.categories[i]) {
  //       return true;
  //     }
  //   }
  // });

  // if (filterStateMap.brands.length > 0) {
  //   let filtered = newArr.filter((item) => {

  //     for (let i = 0; i < filterStateMap.brands.length; i++) {
  //       if (item.brand === filterStateMap.brands[i]) {
  //         return true;
  //       }
  //     }
  //   });
  // }

  // console.log(newArr);
  // //  filter products by 'availability' => 'categories' => 'brands';
};

filter.addEventListener('change', function (evt) {
  filterChangeHandle(evt);
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