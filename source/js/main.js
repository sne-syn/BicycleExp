import {
    getCurrentYear
} from "./util/current-year";
import {
    http
} from "./server/http";
import {
    render
} from "./render";

// Get posts on Dom load
const getProducts = () => {
    http.get('http://localhost:3000/products')
        .then(data => render(data))
        .catch(err => console.log(err));
};

document.addEventListener('DOMContentLoaded', getProducts);

getCurrentYear();

