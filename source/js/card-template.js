// const createCardNewMarkTemplate = () => {
//     return `<span class="card-new-mark" aria-label="New item"></span>`;
// };

// export const createCardTemplate = (card) => {
//     const {id, brand, model, price, isInStock, isNew} = card;

//     return `<div class="card d-flex mb-5 position-relative">
//     ${isNew ? createCardNewMarkTemplate() : ``}
//     <img class="card-img-top d-block" src="img/product-demo-${id}.png" alt="${brand} bicycle, blue color">
//     <div class="card-body d-flex flex-column justify-content-between mx-auto pt-3">
//         <div class="pb-0">
//             <h5 class="card-title text-success mb-0">${brand}</h5>
//             <span class="card-order-mark d-block mb-2">${isInStock}</span>
//             <p class="card-text mb-1">${model}</p>
//         </div>
//         <div class="mt-auto">
//             <p class="card-text card-price">$ ${price}</p>
//             <button type="button" class="btn btn-primary bg-success w-100">Request</button>
//         </div>
//     </div>
// </div>`;
// };

// class Card {
//     constructor (cards) {
//         this.cards = cards;
//     }
// }