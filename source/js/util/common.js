// Format price in '0.000.00'
export const formatPrice = (num) => {
  const p = num.toFixed(2).split(".");
  return p[0].split("").reverse().reduce((acc, num, i) => {
    return num == "-" ? acc : num + (i && !(i % 3) ? "." : "") + acc;
  }, "") + "." + p[1];
};

export const capitalizeChar = (str) => {
  if (typeof str !== `string`) {
    return ``;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Check required inputs
// export const checkInputRequired = (inputs) => {
//     inputs.forEach((input) => {
//         if (input.value.trim() === '') {
//             showError(input, `* ${capitalizeChar(input.id)} is required`);
//         } else {
//             showSuccess(input);
//         }
//     });
// };