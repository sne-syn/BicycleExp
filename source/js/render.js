import {
    formatPrice
} from './util/common';

import {
    http
} from "./server/http";

const COUNT_CARD_ON_PAGE = 9;
const cardsList = document.querySelector('.cards-flow');
const cardTemplate = document.querySelector('#template-card');
const paginationButtons = document.querySelectorAll('.page-item');

const sendRequestForm = () => {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const serialNumber = document.querySelector('#serial').placeholder;

    const data = {
        name,
        email,
        phone,
        serialNumber
    };

    http.post('http://localhost:3000/requests', data)
        .then(data => {
            console.log(data + ' мы здесь');
        })
        .catch(err => console.log(err));
};

const cardBtnClickHandler = (card) => {
    $('#modalCenter').modal('show');
    document.querySelector('#serial').placeholder = card.serial;

    document.querySelector('.btn-request').addEventListener('click', sendRequestForm);

};

const removeCards = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        card.remove();
    });
};

const renderCard = function (card) {
    const cardElement = cardTemplate.content.cloneNode(true);
    const element = cardElement.querySelector('.card');
    const availability = element.querySelector('.card-order-mark');

    const newMark = element.querySelector('#card-mark');
    if (card.isNew) {
        newMark.classList.add('card-new-mark');
        newMark.setAttribute("aria-label", "New item");
    }

    element.querySelector('.card-img-top').src = `img/product-${card.id}.jpg`;
    element.querySelector('.card-title').textContent = `${card.brand}`;
    availability.textContent = card.isInStock ? `In Stock` : `Special Order`;
    element.querySelector('.card-text').textContent = `${card.model}`;
    element.querySelector('.card-price').textContent = `$ ${formatPrice(card.price)}`;

    element.querySelector('.btn').addEventListener('click', function () {
        cardBtnClickHandler(card);
    });

    return element;
};

const onPaginationChange = () => {
    for (let i = 0; i < paginationButtons.length; i++) {
        console.log(paginationButtons);
    }
};

export const render = (data) => {
    removeCards();
    const countCardsOnPage = data.length > COUNT_CARD_ON_PAGE ? COUNT_CARD_ON_PAGE : data.length;
    for (let i = 0; i < data.length; i++) {
        cardsList.appendChild(renderCard(data[i]));
    }
};

document.querySelector('.pagination').addEventListener('click', onPaginationChange);