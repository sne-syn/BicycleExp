import {
    removeCards
} from './card';

import {
    formatPrice
} from './util/common';

const COUNT_CARD_ON_PAGE = 9;
const cardsList = document.querySelector('.cards-flow');
const cardTemplate = document.querySelector('#shop-card');

const renderCard = function (card) {
    const cardElement = cardTemplate.content.cloneNode(true);
    const element = cardElement.querySelector(`.card`);
    const newMark = element.querySelector('#card-mark');
    const availability = element.querySelector('.card-order-mark');

    if (card.isNew) {
        newMark.classList.add('card-new-mark');
        newMark.setAttribute("aria-label", "New item");
    }
    element.querySelector('.card-img-top').src = `img/product-${card.id}.jpg`;
    element.querySelector('.card-title').textContent = `${card.brand}`;
    availability.textContent = card.isInStock ? `In Stock` : `Special Order`;
    element.querySelector('.card-text').textContent = `${card.model}`;
    element.querySelector('.card-price').textContent = `$ ${formatPrice(card.price)}`;
    element.querySelector('.btn').addEventListener(`click`, function () {
        console.log('click-plick');
    });

    return element;
};

export const render = (data) => {
    removeCards();
    for (var i = 0; i < COUNT_CARD_ON_PAGE; i++) {
        cardsList.appendChild(renderCard(data[i]));
    }
};