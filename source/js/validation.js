import {
    isValidEmail, capitalizeChar
} from './util/common';

// Show input error message
const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-group error';
    const small = formControl.querySelector('small');
    small.innerText = message;
};

// Show success outline
const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-group success';
};

export const validateForm = ([...inputs]) => {
    inputs.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, `* ${capitalizeChar(input.id)} is required`);
        } else {
            showSuccess(input);
        }
    });
};