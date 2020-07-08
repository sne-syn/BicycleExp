import DataModel from './data-model';
import {
    getCurrentYear
} from './util/current-year';
import {
    http
} from './server/http';
import {
    render
} from './render';
import API from './api';
import { data } from './data-mock';

// Get posts on Dom load

const api = new API();
const dataModel = new DataModel();

api.getProducts()
    .then((products) => {
        dataModel.setData(products);
        render(products);
    });

    console.log(dataModel.getData());

getCurrentYear();