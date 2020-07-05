import {
    removeCards,
    renderCard
} from "./cards";

const COUNT_CARD_ON_PAGE = 9;
const cardsList = document.querySelector('.cards-flow');
const paginationButtons = document.querySelectorAll('.page-item');

const onPaginationChange = () => {
    for (let i = 0; i < paginationButtons.length; i++) {
        console.log(paginationButtons);
    }
};

document.querySelector('.pagination').addEventListener('click', onPaginationChange);


export const render = (data) => {
    removeCards();
    const countCardsOnPage = data.length > COUNT_CARD_ON_PAGE ? COUNT_CARD_ON_PAGE : data.length;
    for (let i = 0; i < data.length; i++) {
        cardsList.appendChild(renderCard(data[i]));
    }
};