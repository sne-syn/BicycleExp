var removeCas = function () {
    var pins = mapPins.querySelectorAll('.map__pin');
    pins.forEach(function (items) {
      if (items !== mainPin) {
        items.remove();
      }
    });
  };

export const removeCards = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        card.remove();
    });
};