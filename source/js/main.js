import {
    getCurrentYear
} from './util/current-year';
import {
    http
} from './server/http';
import {
    render
} from './render';
// Get posts on Dom load

const loadProducts = () => {
    http.get('http://localhost:3000/products')
        .then(data => console.log(data))
        .catch(err => console.error(err));
};


// document.addEventListener('DOMContentLoaded', loadProducts);

getCurrentYear();