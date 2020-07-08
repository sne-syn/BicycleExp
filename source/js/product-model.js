export default class Product {
  constructor(data) {
    this.id = data[`id`];
    this.serial = data[`serial`];
    this.brand = data[`brand`];
    this.model = data[`model`];
    this.price = data[`price`];
    this.category = data[`category`];
    this.isInStock = data[`isInStock`];
    this.isNew = data[`isNew`];
    this.isBestseller = data[`isBestseller`];
  }

  static parseProduct(data) {
    return new Product(data);
  }

  static parseProducts(data) {
    return data.map(Product.parseProduct);
  }
}