import {
    removeCards,
    renderCard
} from './cards';
import {
    data
} from './data-mock';

const COUNT_CARD_ON_PAGE = 9;

export const InsertPosition = {
    AFTERBEGIN: `afterbegin`,
    BEFOREEND: `beforeend`
};

const cardsList = document.querySelector('.cards-flow');

let state = {
    'querySet': data,
    'page': 1,
    'cards': 9,
    'window': 5,
};

const pagination = (state) => {
    const {querySet, page, cards} = state;
    let trimStart = (page - 1) * cards;
    let trimEnd = trimStart + cards;

    let trimmedData = querySet.slice(trimStart, trimEnd);

    let pages = Math.round(querySet.length / cards);
    return {
        'querySet': trimmedData,
        'pages': pages
    };
};

const pageButtons = (pages, state) => {
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = ``;

    var maxLeft = (state.page - Math.floor(state.window / 2));
    var maxRight = (state.page + Math.floor(state.window / 2));

    if (maxLeft < 1) {
        maxLeft = 1;
        maxRight = state.window;
    }

    if (maxRight > pages) {
        maxLeft = pages - (state.window - 1);

        if (maxLeft < 1) {
            maxLeft = 1;
        }
        maxRight = pages;
    }
    
    for (let page = maxLeft; page <= maxRight; page++) {
        paginationContainer.insertAdjacentHTML(InsertPosition.BEFOREEND, `<li class="page-item mr-1"><button class="page-link" value="${page}">${page}</button></li>`);
    }

    if (state.page !== 1 && state.page > 3) {
        paginationContainer.insertAdjacentHTML(InsertPosition.AFTERBEGIN, `<li class="page-item mr-1"><button class="page-link" value=${1}> &#171;</button></li>`);
    }
    
    if (state.page != pages && state.page < (pages - 2)) {
        paginationContainer.insertAdjacentHTML(InsertPosition.BEFOREEND, `<li class="page-item mr-1"><button class="page-link" value=${pages}> &#187;</button></li>`);
    }

    const pageButtons = paginationContainer.querySelectorAll('.page-link');
    pageButtons.forEach((btn) => {
        btn.addEventListener('click', (evt) => {
            removeCards();
            state.page = Number(evt.target.value);
            render();
        });
    });
};

export const render = () => {
    const data = pagination(Object.assign({}, state));
    const productsList = data.querySet;
    removeCards();
    const countCardsOnPage = productsList.length > COUNT_CARD_ON_PAGE ? COUNT_CARD_ON_PAGE : productsList.length;
    for (let i = 0; i < countCardsOnPage; i++) {
        cardsList.appendChild(renderCard(productsList[i]));
    }
    pageButtons(data.pages, state);
};

render();