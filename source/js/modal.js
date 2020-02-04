'use strict';

(function () {
  var popup = document.querySelector('.modal-cs');
  var overlay = document.querySelector('.modal-overlay');
  var openButtons = document.querySelectorAll('.modal-open-btn');
  var closeButton = popup.querySelector('.modal-close');

  var openPopup = function () {
    popup.classList.add("modal--show");
    document.addEventListener('keydown', popupEscHandler);
  };

  var closePopup = function () {
    popup.classList.remove('modal--show');
    document.activeElement.blur();
    document.removeEventListener('keydown', popupEscHandler);
  };

  openButtons.forEach(function (button) {
    button.addEventListener("click", function (evt) {
      evt.preventDefault();
      openPopup();
    });
  });

  openButtons.forEach(function (button) {
    button.addEventListener("keydown", function (evt) {
      window.util.keyaction.addEnterEvent(evt, openPopup());
    });
  });

  closeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal--show");
  });

  var popupEscHandler = function (evt) {
    window.util.keyaction.addEscEvent(evt,
      closePopup);
  };

  var closeButtonClickHandler = function (evt) {
    evt.preventDefault();
    closePopup();
  };

  closeButton.addEventListener('click', closeButtonClickHandler);
  overlay.addEventListener('click', closePopup);

})();