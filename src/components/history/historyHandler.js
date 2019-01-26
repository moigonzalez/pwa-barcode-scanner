class HistoryHandler {

  static addProduct(code, productData) {
    if (this.getProduct(code) !== null) {
      return;
    }

    localStorage.setItem(code, JSON.stringify(productData));
    this.updateProducts(code);
  }

  static updateProducts(productToAdd) {
    if (this.getProductsId() === null) {
      localStorage.setItem('products', productToAdd);
      return;
    }
    if (this.getProductsId().includes(productToAdd)) {
      return;
    }

    localStorage.setItem('products', this.getProductsId().split(',').concat(`${productToAdd}`).join());
  }

  static getProduct(id) {
    return localStorage.getItem(id);
  }

  static getProductsId() {
    return localStorage.getItem('products');
  }

  static getProducts() {
    if (this.getProductsId() === null) {
      return null;
    }
    return this.getProductsId()
        .split(',')
        .map(x => ({code: x, data: this.getProduct(x)}));
  }

  static deleteProduct(id) {
    localStorage.setItem('products',
      this.getProductsId()
        .split(',')
        .filter(x => x !== id)
    );

    if (this.getProductsId() === '') {
      localStorage.removeItem('products');
    }

    localStorage.removeItem(id);

    return this.getProducts();
  }
}

export default HistoryHandler;
