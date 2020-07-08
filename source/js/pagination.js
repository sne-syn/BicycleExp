import {
    removeCards
} from './cards';
import {
    render
} from './render';

export const InsertPosition = {
    AFTERBEGIN: `afterbegin`,
    BEFOREEND: `beforeend`
};

export const pagination = (state) => {
    const {
        querySet,
        page,
        cards
    } = state;

    const trimStart = (page - 1) * cards;
    const trimEnd = trimStart + cards;

    let trimmedData = querySet.slice(trimStart, trimEnd);
    const pages = Math.round(querySet.length / cards);
    return {
        'querySet': trimmedData,
        'pages': pages
    };
};

export const pageButtons = (pages, state) => {
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = ``;

    let maxLeft = (state.page - Math.floor(state.window / 2));
    let maxRight = (state.page + Math.floor(state.window / 2));

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

    if (state.page !== 1 && state.page > Math.ceil(state.window / 2)) {
        paginationContainer.insertAdjacentHTML(InsertPosition.AFTERBEGIN, `<li class="page-item mr-1"><button class="page-link" value=${1}> &#171;</button></li>`);
    }

    if (state.page != pages && state.page < (pages - Math.floor(state.window / 2))) {
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