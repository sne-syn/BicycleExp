import {
    formatPrice
} from './util/common';
import {
    http
} from "./server/http";
import {
    checkValidWithRegExp,
    checkLength
} from './validation';

const NameLength = {
    MIN: 3,
    MAX: 15
};
const cardTemplate = document.querySelector('#template-card');

const sendRequestForm = () => {
    const form = document.querySelector('#shop-request');
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const phone = form.querySelector('#phone');
    const inputsForCheck = [name, email, phone];

    const data = {
        name: name.value,
        emai: email.value,
        phone: phone.value,
        serial: form.querySelector('#serial').placeholder,
        date: new Date()
    };

    if (checkValidWithRegExp(email) && checkValidWithRegExp(phone) && checkLength(name, NameLength.MIN, NameLength.MAX)) {
        http.post('http://localhost:3000/requests', data)
            .then(data => {
                console.log('it works');
            })
            .catch(err => console.log(err));
        $('#modalCenter').modal('hide');
        inputsForCheck.forEach((input) => input.value = '');
        form.querySelectorAll('.form-group').forEach((control) => {
            control.className = 'form-group mb-4';
        });
    } else {
        checkValidWithRegExp(email);
        checkValidWithRegExp(phone);
        checkLength(name, NameLength.MIN, NameLength.MAX);
    }
};

const cardBtnClickHandler = (card) => {
    $('#modalCenter').modal('show');
    document.querySelector('#serial').placeholder = card.serial;

    document.querySelector('.btn-request').addEventListener('click', (evt) => {
        evt.preventDefault();
        sendRequestForm();
    });
};

export const removeCards = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        card.remove();
    });
};

export const renderCard = function (card) {
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