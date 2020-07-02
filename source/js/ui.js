export class UI {
    constructor() {
        this.cardsList = document.querySelector('.cards-flow');
        this.imageElement = document.querySelector('.card-img-top');
        this.titleElement = document.querySelector('.card-title');
        this.availabilityStatusElement = document.querySelector('.card-order-mark');
        this.modelElement = document.querySelector('.card-text');
        this.priceElement = document.querySelector('.card-price');
    }

    showCards(cards) {
        let output = ``;
        cards.forEach((card) => {
            output += `
            <div class="card d-flex mb-5 position-relative">
            ${card.isNew ? `<span class="card-new-mark" aria-label="New item"></span>` : ``}
              <img class="card-img-top d-block" src="img/product-${card.id}.jpg" alt="${card.brand} bicycle, blue color">
             <div class="card-body d-flex flex-column justify-content-between mx-auto pt-3">
                  <div class="pb-0">
                    <h5 class="card-title text-success mb-0">${card.brand}</h5>
             <span class="card-order-mark d-block mb-2">${card.isInStock ? `In Stock` : `Special Order`}</span>
              <p class="card-text mb-1">${card.model}</p>
             </div>
              <div class="mt-auto">
                 <p class="card-text card-price">$ ${card.price}</p>
                       <button type="button" class="btn btn-primary bg-success w-100">Request</button>
                    </div>
                </div>
             </div>`;
        });

        this.cardsList.innerHTML = output;
    }
    
}
export const ui = new UI();