import {getCurrentYear} from "./util/current-year";
import {http} from "./server/http";

// Get posts on Dom load
const getProducts = () => {
    http.get('http://localhost:3000/products')
    .then(data => console.log(data))
    .catch(err => console.log(err));
};

document.addEventListener('DOMContentLoaded', getProducts);

class UI {
    constructor() {
        
    }
}

// const renderCards = (cards) => {
// console.log(cards)
// }

// renderCards()

 getCurrentYear();