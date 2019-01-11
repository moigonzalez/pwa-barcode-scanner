class ProductDataFilter {
  constructor(data) {
    this.d = data;
  }

  isVegetarian() {
    return this.d.categories_tags
      .filter(x => x === 'en:plant-based-foods-and-beverages' || x === 'en:plant-based-foods')
      .length > 0;
  }

  containsGluten() {
    return this.d.allergens_tags
      .filter(x => x === 'en:gluten')
      .length > 0;
  }

  containsLactose() {
    return this.d.allergens_tags
      .filter(x => x === 'en:milk')
      .length > 0;
  }
}

export default ProductDataFilter;
