export const formatPrice = (num) => {
    const p = num.toFixed(2).split(".");
    return p[0].split("").reverse().reduce( (acc, num, i) => {
      return num == "-" ? acc : num + (i && !(i % 3) ? "." : "") + acc;
    }, "") + "." + p[1];
  };