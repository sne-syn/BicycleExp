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

// let products;

// fetch('http://localhost:3000/products').then(function(response) {
//     if(response.ok) {
//       response.json().then(function(json) {
//         products = json;
//         render();
//       });
//     } else {
//       console.log('Network request for products.json failed with response ' + response.status + ': ' + response.statusText);
//     }
//   });
// const loadProducts = () => {
//     http.get('http://localhost:3000/products')
//         .then(data => console.log(data))
//         .catch(err => console.error(err));
// };

getCurrentYear();