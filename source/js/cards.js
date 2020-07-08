import {
    formatPrice
} from './util/common';
import {
    http
} from './server/http';
import {
    checkValidWithRegExp,
    checkLength
} from './validation';

const NameLength = {
    MIN: 3,
    MAX: 15
};
const cardTemplate = document.querySelector('#template-card');

const sendRequestForm = (form, name, email, phone) => {
    const data = {
        name: name.value,
        emai: email.value,
        phone: phone.value,
        serial: form.querySelector('#serial').placeholder,
        date: new Date()
    };

    if (checkValidWithRegExp(email) && checkValidWithRegExp(phone) && checkLength(name, NameLength.MIN, NameLength.MAX)) {
        // Send request
        http.post('http://localhost:3000/requests', data)
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err));
        $('#modalCenter').modal('hide');
    } else {
        // Show error messages
        checkValidWithRegExp(email);
        checkValidWithRegExp(phone);
        checkLength(name, NameLength.MIN, NameLength.MAX);
    }
};

const cardBtnClickHandler = (card) => {
    // List inputs
    const form = document.querySelector('#shop-request');
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const phone = form.querySelector('#phone');
    const requiredFields = [name, email, phone];

    // open require form
    $('#modalCenter').modal('show');

    // Clear fields
    requiredFields.forEach((input) => input.value = '');
    form.querySelectorAll('.form-group').forEach((control) => {
        control.className = 'form-group mb-4';
    });

    // Fill form with serial number
    document.querySelector('#serial').placeholder = card.serial;

    // Catch button event
    document.querySelector('.btn-request').addEventListener('click', (evt) => {
        evt.preventDefault();
        sendRequestForm(form, name, email, phone);
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
        newMark.setAttribute('aria-label', 'New item');
    }

    element.querySelector('.card-img-top').src = `img/product-${card.image}.jpg`;
    element.querySelector('.card-title').textContent = `${card.brand}`;
    availability.textContent = card.isInStock ? `In Stock` : `Special Order`;
    element.querySelector('.card-text').textContent = `${card.model}`;
    element.querySelector('.card-price').textContent = `$ ${formatPrice(card.price)}`;

    element.querySelector('.btn').addEventListener('click', () => {
        cardBtnClickHandler(card);
    });

    return element;
};