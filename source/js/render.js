import {
    removeCards,
    renderCard
} from './cards';
import {
    data
} from './data-mock';

const COUNT_CARD_ON_PAGE = 9;
const cardsList = document.querySelector('.cards-flow');


let state = {
    'querySet': data,
    'page': 1,
    'cards': 8,
};

const pagination = (querySet, page, cards) => {
    let trimStart = (page - 1) * cards;
    let trimEnd = trimStart + cards;

    let trimedData = querySet.slice(trimStart, trimEnd);

    let pages = Math.ceil(querySet.length / cards);
    return {
        'querySet': trimedData,
        'pages': pages
    };
};

const pageButtons = (pages) => {
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = ``;

    for (let page = 1; page <= pages; page++) {
        paginationContainer.innerHTML += `<li class="page-item mr-1"><button class="page-link" value="${page}">${page}</button></li>`;
    }

    const pageButtons = paginationContainer.querySelectorAll('.page-link');
    pageButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            removeCards();
            state.page = btn.value;
            render();
        });
    });
};

export const render = () => {
    const data = pagination(state.querySet, state.page, state.cards);

    const productsList = data.querySet;
    removeCards();
    const countCardsOnPage = productsList.length > COUNT_CARD_ON_PAGE ? COUNT_CARD_ON_PAGE : productsList.length;
    for (let i = 0; i < countCardsOnPage; i++) {
        cardsList.appendChild(renderCard(productsList[i]));
    }
    pageButtons(data.pages);
};

document.addEventListener('DOMContentLoaded', render);