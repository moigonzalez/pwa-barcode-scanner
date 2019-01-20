class HistoryHandler {

  static addProduct(code, productData) {
    if (this.getProduct(code) !== null) {
      return;
    }

    localStorage.setItem(code, JSON.stringify(productData));
    this.updateProducts(code);
  }

  static updateProducts(productToAdd) {
    if (this.getProducts() === null) {
      localStorage.setItem('products', productToAdd);
      return;
    }
    if (this.getProducts().includes(productToAdd)) {
      return;
    }

    localStorage.setItem('products', this.getProducts().split(',').concat(`${productToAdd}`).join());
  }

  static getProduct(id) {
    return localStorage.getItem(id);
  }

  static getProducts() {
    return localStorage.getItem('products');
  }
}

export default HistoryHandler;
