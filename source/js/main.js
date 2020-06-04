const PRODUCTS_ON_PAGE = 6;

const createMainContainerTemplate = () => {
    return `<section class="custom-container filter-block">
        <div class="row position-relative">
        </div>
    </section>`;
};

const createSiteSortTemplate = () => {
    return `<div class="sort col mb-3 mb-md-0">
    <label for="sort">Sort By:</label>
    <select class="sort-by" id="sort">
        <option value="bestsellers" selected>Bestsellers</option>
        <option value="low-high">Price Low-High</option>
        <option value="high-low">Price High-Low</option>
        <option value="new">New</option>
    </select>
    </div>`;
};

const createSiteFilterTemplate = () => {
    return `<section class="d-flex flex-column flex-wrap col-md-3 col-xl-2">
    <div class="filter order-5">
        <h2 class="pb-3">Filter By</h2>
        <div class="checkbox position-relative">
            <div class="checkbox-container">
                <fieldset class="m-0 p-0 border-0">
                    <label class="checkbox-field d-flex flex-column position-relative" for="stock">
                        <input class="sr-only" id="stock" name="availability" type="checkbox">
                        <span class="checkbox-indication"></span>In Stock
                    </label>
                    <label class="checkbox-field d-flex flex-column position-relative" for="order">
                        <input class="sr-only" id="order" name="availability" type="checkbox">
                        <span class="checkbox-indication"></span>Special Order
                    </label>
                </fieldset>
                <fieldset class="m-0 p-0 border-0">
                    <div class="panel-group" id="accordion">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title py-2">
                                    <a class="d-block position-relative text-dark" data-toggle="collapse" data-parent="#accordion"
                                        href="#collapse2">Categories</a>
                                </h4>
                            </div>
                            <div id="collapse2" class="panel-collapse collapse">
                                <div class="panel-body">
                                    <label class="checkbox-field d-flex flex-column position-relative" for="sport">
                                        <input class="sr-only" id="sport" name="categories"
                                            type="checkbox">
                                        <span class="checkbox-indication"></span> Sport
                                    </label>
                                    <label class="checkbox-field d-flex flex-column position-relative" for="touring">
                                        <input class="sr-only" id="touring" name="categories"
                                            type="checkbox">
                                        <span class="checkbox-indication"></span>Touring
                                    </label>
                                    <label class="checkbox-field d-flex flex-column position-relative" for="cyclocross">
                                        <input class="sr-only" id="cyclocross" name="categories"
                                            type="checkbox">
                                        <span class="checkbox-indication"></span>Cyclocross
                                    </label>
                                    <label class="checkbox-field d-flex flex-column position-relative" for="mountain">
                                        <input checked disabled class="sr-only" id="mountain"
                                            name="categories" type="checkbox">
                                        <span class="checkbox-indication"></span>Mountain
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset class="m-0 p-0 border-0">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title py-2">
                                <a class="d-block position-relative text-dark" data-toggle="collapse" data-parent="#accordion"
                                    href="#collapse3">Brands</a>
                            </h4>
                        </div>
                        <div id="collapse3" class="panel-collapse collapse">
                            <div class="panel-body">
                                <label class="checkbox-field d-flex flex-column position-relative"
                                    for="dahon">
                                    <input class="sr-only" id="dahon" name="brand" type="checkbox">
                                    <span class="checkbox-indication"></span>DAHON
                                </label>
                                <label class="checkbox-field d-flex flex-column position-relative"
                                    for="hold-fast">
                                    <input class="sr-only" id="hold-fast" name="brand" type="checkbox">
                                    <span class="checkbox-indication"></span>Hold Fast
                                </label>
                                <label class="checkbox-field d-flex flex-column position-relative"
                                    for="felt">
                                    <input disabled class="sr-only" id="felt" name="brand"
                                        type="checkbox">
                                    <span class="checkbox-indication"></span>Felt
                                </label>
                                <label class="checkbox-field d-flex flex-column position-relative"
                                    for="pure-fix">
                                    <input class="sr-only" id="pure-fix" name="brand" type="checkbox">
                                    <span class="checkbox-indication"></span>Pure Fix
                                </label>
                                <label class="checkbox-field d-flex flex-column position-relative"
                                    for="raleigh">
                                    <input class="sr-only" id="raleigh" name="brand" type="checkbox">
                                    <span class="checkbox-indication"></span>Raleigh
                                </label>
                                <label class="checkbox-field d-flex flex-column position-relative"
                                    for="santa-cruz">
                                    <input class="sr-only" id="santa-cruz" name="brand" type="checkbox">
                                    <span class="checkbox-indication"></span>Santa Cruz
                                </label>
                                <label class="checkbox-field d-flex flex-column position-relative"
                                    for="surly">
                                    <input class="sr-only" id="surly" name="brand" type="checkbox">
                                    <span class="checkbox-indication"></span>Surly
                                </label>
                                <label class="checkbox-field d-flex flex-column position-relative"
                                    for="unknown">
                                    <input class="sr-only" id="unknown" name="brand" type="checkbox">
                                    <span class="checkbox-indication"></span>Unknown
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
</section>`;
};

const createCardListTemplate = () => {
    return `<section class="col-md-9 col-xl-10 shop">
<div class="cards-flow d-flex flex-row flex-wrap justify-content-between">

</div>
</section>`;
};

const createCardTemplate = () => {
    return `
        <div class="card d-flex mb-5 position-relative">
            <img class="card-img-top d-block" src="img/product-demo-1.png"
                alt="Raleight bicycle, blue color">
            <div class="card-body d-flex flex-column justify-content-between mx-auto pt-3">
                <div class="pb-0">
                    <h5 class="card-title text-success mb-0">Raleight</h5>
                    <span class="card-order-mark d-block mb-2">In Stock</span>
                    <p class="card-text mb-1">Decree FRD</p>

                </div>
                <div class="mt-auto">
                    <p class="card-text">$ 1.549.99</p>
                    <button type="button" class="btn btn-primary bg-success w-100" data-toggle="modal"
                        data-target="#modalCenter">Request</button>
                </div>
            </div>`;
};

const createPaginationTemplate = () => {
    return `<nav class="d-flex flex-row justify-content-end" aria-label="pagination">
    <ul class="pagination pagination-sm">
        <li class="page-item active disabled mr-1">
            <a class="page-link" href="#" tabindex="-1">1</a>
        </li>
        <li class="page-item mr-1"><a class="page-link" href="#">2</a></li>
        <li class="page-item mr-1"><a class="page-link" href="#">3</a></li>
    </ul>
</nav>`;
};

const createModalTemplate = () => {
    return `<div class="modal request-modal fade bd-example-modal-sm bd-example-modal-lg" id="modalCenter" tabindex="-1"
    role="dialog" aria-labelledby="modalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-sm modal-dialog-centered text-success" role="document">
        <div class="modal-content">
            <div class="modal-header pb-0">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" class="text-success">&times;</span>
                </button>
            </div>
            <div class="modal-body pb-5 pt-0 px-md-5">
                <h5 class="modal-title text-center font-weight-bold mb-2 mb-lg-3" id="modalCenterTitle">Request Form
                </h5>
                <form id="shop-request">
                    <div class="mb-4">
                        <div class="form-group">
                            <label class="mb-0" for="name">Name</label>
                            <input class="form-control p-sm-3" type="text" id="name">
                        </div>
                        <div class="form-group">
                            <label class="mb-0" for="email">Email</label>
                            <input class="form-control p-sm-3" type="email" id="email">
                        </div>
                        <div class="form-group">
                            <label class="mb-0" for="phone">Phone Number</label>
                            <input class="form-control p-sm-3" type="phone" id="phone" aria-label="phone">
                        </div>
                        <div class="form-group">
                            <label class="mb-0" for="serial">Serial Number</label>
                            <input type="text" class="form-control p-sm-3 bg-white" id="serial"
                                aria-label="serial-number" placeholder="WTUI23AB4567C" disabled>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-success d-block ml-auto">Request</button>
                </form>
            </div>
        </div>
    </div>
</div>`;
};


const render = (container, template, place) => {
    container.insertAdjacentHTML(place, template);
};

const mainElement = document.querySelector(`.main`);
const productContainer = document.querySelector(`.filter-content`);
render(productContainer, createSiteSortTemplate(), `beforeend`);
render(productContainer, createSiteFilterTemplate(), `beforeend`);

render(productContainer, createCardListTemplate(), `beforeend`);
const cardsListContainer = document.querySelector(`.cards-flow `);

for (let i = 0; i < PRODUCTS_ON_PAGE; i++) {
render(cardsListContainer, createCardTemplate(), `beforeend`);
}

const siteShopContainerElement = document.querySelector(`.shop`);
render(siteShopContainerElement, createPaginationTemplate(), `beforeend`);
render(mainElement, createModalTemplate(), `beforeend`);