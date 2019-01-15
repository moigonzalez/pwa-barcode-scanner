class ProductDataFilter {
  constructor(data) {
    this.d = data;
  }

  isUndefined(value) {
    return this.d[value] === undefined;
  }

  isEmpty() {
    return Object.keys(this.d[value]).length === 0;
  }

  isPlantBased() {
    if (this.isUndefined('categories_tags')) {
      return undefined;
    }
    return this.d.categories_tags
      .filter(x => x === 'en:plant-based-foods-and-beverages' || x === 'en:plant-based-foods')
      .length > 0;
  }

  containsGluten() {
    if (this.isUndefined('allergens_tags')) {
      return false;
    }
    return this.d.allergens_tags
      .filter(x => x === 'en:gluten')
      .length > 0;
  }

  containsLactose() {
    if (this.isUndefined('allergens_tags')) {
      return false;
    }
    return this.d.allergens_tags
      .filter(x => x === 'en:milk')
      .length > 0;
  }

  nutrientLevels() {
    const res = [];

    if (this.isUndefined('nutrient_levels')) {
      return undefined;
    }

    for (const key in this.d.nutrient_levels) {
      res.push({
        title: key.replace('-', ' '),
        value:this.d.nutrient_levels[key]
      });
    }
    return res;
  }

  containsPalmOil() {
    if (!this.d.ingredients_from_palm_oil_n) {
      return false;
    }
    return this.d.ingredients_from_palm_oil_n === 1;
  }

  additives() {
    if (this.isUndefined('additives_tags')) {
      return undefined;
    }
    return this.d.additives_tags.map(x => x.split(':')[1]);
  }
}

export default ProductDataFilter;
