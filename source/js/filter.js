// var stateMap = {
//   'sort': DEFAULT_VALUE,
//   'filter': []
// };

// const findMatchCards = function (arrFilter, arrOffer) {
//   var answers = [];
//   arrFilter.forEach(function (feature) {
//     answers.push(arrOffer.includes(feature));
//   });
//   return answers.indexOf(false) === -1;
// };

// var isFeaturesOk = function (item) {
//   if (findMatchFeatures(stateMap.features, item.offer.features)) {
//     return true;
//   }
//   return false;
// };

// var filterPins = function (item) {
//   if (isTypeOk(item) && isPriceOk(item) && isRoomsOk(item) && isGuestsOk(item) && isFeaturesOk(item)) {
//     return true;
//   }
//   return false;
// };

// var filterChangeHandler = window.debounce(function (evt) {
//   window.card.remove();
//   var newValue = evt.target.value;
//   var clickedFilter = evt.target.name;
//   if (clickedFilter === 'features') {
//     var featureValue = stateMap[clickedFilter].indexOf(newValue);
//     if (featureValue === -1) {
//       stateMap[clickedFilter].push(newValue);
//     } else {
//       stateMap[clickedFilter].splice(featureValue, 1);
//     }
//   } else {
//     stateMap[clickedFilter] = newValue;
//   }

//   var filteredPins = window.pin.offers.filter(filterPins);
//   window.render(filteredPins);
// });
const array = [];
export const filter = document.querySelector('.filter');

filter.addEventListener('change', function (evt) {
  array.push(evt.target.value);
  console.log(array);
});