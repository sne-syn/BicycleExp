import Product from "./product-model";

const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        throw new Error(`${response.status}: ${response.statusText}`);
    }
};

const API = class {
    constructor() {

    }

    getProducts () {
        return fetch(`http://localhost:3000/products`)
        .then(checkStatus)
        .then((response) => response.json())
        .then(Product.parseProducts);
    }
 };

export default API;