import {
    removeCards,
    renderCard
} from './cards';
import {
    pagination,
    pageButtons
} from './pagination';
// import {
//     data
// } from './data-mock';


const COUNT_CARD_ON_PAGE = 9;
const cardsList = document.querySelector('.cards-flow');

let state = {
    //'querySet': data,
    'page': 1,
    'cards': 9,
    'window': 5,
};

export const render = (products) => {

    let state = {
        'querySet': products,
        'page': 1,
        'cards': 9,
        'window': 5,
    };

    const data = pagination(Object.assign({}, state));
    const productsList = data.querySet;
    const countCardsOnPage = productsList.length > COUNT_CARD_ON_PAGE ? COUNT_CARD_ON_PAGE : productsList.length;
    for (let i = 0; i < countCardsOnPage; i++) {
        cardsList.appendChild(renderCard(productsList[i]));
    }
    pageButtons(data.pages, state);
};

//render();