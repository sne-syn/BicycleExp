import {
    capitalizeChar
} from './util/common';

import {
    RegExpForValidation
} from './util/const';

// Show input error message
const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.innerText = message;
};

// Show success outline
const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.classList.add('success');
};

// Check phone && email with regExp
export const checkValidWithRegExp = (input) => {
    const inputName = input.id.toUpperCase();
    if (RegExpForValidation[inputName].test(input.value.trim())) {
        showSuccess(input);
    } else if (input.value.trim() === '') {
        showError(input, `* ${capitalizeChar(input.id)} is required`);
    } else {
        showError(input, `* ${capitalizeChar(input.id)} is not valid`);
    }
};

export const checkLength = (input, min, max) => {
    if (input.value.length < min) {
        showError(input, `${capitalizeChar(input.id)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${capitalizeChar(input.id)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
};

// Check required inputs
export const checkInputRequired = (inputs) => {
    inputs.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, `* ${capitalizeChar(input.id)} is required`);
        } else {
            showSuccess(input);
        }
    });
};