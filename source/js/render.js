import { removeCards } from './card';

const COUNT_CARD_ON_PAGE = 9;
const cardsList = document.querySelector('.cards-flow');
const cardTemplate = document.querySelector('#shop-card');

const renderCard = function (card) {
    const cardElement = cardTemplate.content.cloneNode(true);
    const element = cardElement.querySelector(`.card`);
    element.querySelector('.card-img-top').src = `img/product-${card.id}.jpg`;

    element.querySelector('.btn').addEventListener(`click`, function () {
        console.log('click on element');
    });

    return element;
};

export const render = function (data) {
    removeCards();
    for (var i = 0; i < COUNT_CARD_ON_PAGE; i++) {
        cardsList.appendChild(renderCard(data[i]));
    }
};
