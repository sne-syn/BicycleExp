// Format price in '0.000.00'
export const formatPrice = (num) => {
    const p = num.toFixed(2).split(".");
    return p[0].split("").reverse().reduce( (acc, num, i) => {
      return num == "-" ? acc : num + (i && !(i % 3) ? "." : "") + acc;
    }, "") + "." + p[1];
  };

  // Check email is valid
export const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const capitalizeChar = (str) => {
  if (typeof str !== `string`) {
    return ``;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};