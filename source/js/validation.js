import {
    capitalizeChar
} from './util/common';

import {
    RegExpValid
} from './util/const';

// Show input error message
const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className ='form-group mb-4 error';
    const small = formControl.querySelector('small');
    small.innerText = message;
};

// Show success outline
const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-group mb-4 success';
};

// Check phone && email with regExp
export const checkValidWithRegExp = (input) => {
    let flag = false;
    const inputName = input.id;
    const inputValue = input.value.trim();

    switch (true) {
        case (inputValue === ''):
            showError(input, `* ${capitalizeChar(input.id)} is required`);
            break;
        case (!RegExpValid[inputName.toUpperCase()].test(inputValue)):
            showError(input, `* ${capitalizeChar(input.id)} is not valid`);
            break;
        default:
            showSuccess(input);
            flag = true;
    }
    return flag;
};

export const checkLength = (input, min, max) => {
    let flag = false;
    switch (true) {
        case (input.value.trim() === ''):
            showError(input, `* ${capitalizeChar(input.id)} is required`);
            break;
        case (input.value.length < min):
            showError(input, `* ${capitalizeChar(input.id)} must be at least ${min} characters`);
            break;
        case (input.value.length > max):
            showError(input, `* ${capitalizeChar(input.id)} must be less than ${max} characters`);
            break;
        default:
            showSuccess(input);
            flag = true;
    }

    return flag;
};