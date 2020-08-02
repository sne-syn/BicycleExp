import {
  removeCards,
  renderCard
} from './cards';
import {
  pagination,
  pageButtons
} from './pagination';
import {
  filter, filterChangeHandler
} from './filter';
import {
  data
} from './data-mock';

export const products = data;
filter.addEventListener('change', function (evt) {
  filterChangeHandler(evt);
});


// fetch('http://localhost:3000/products').then(function (response) {
//     if (response.ok) {
//         response.json().then(function (json) {
//             products = json;
//             render(products);
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

export const render = (querySet) => {
  // const querySet = products;
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

render(products);