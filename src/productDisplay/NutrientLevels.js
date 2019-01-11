import React from 'react';

import ProductDataFilter from './ProductDataFilter';

const NutrientLevels = (product) => (
  <section className="productDisplay__section">
    <h3 className="productDisplay__sectionTitle">Nutrient Levels</h3>
    {product.product.nutrientLevels().map((x, i) => <div key={i}><div>{x.title}</div><div>{x.value}</div></div>)}
  </section>
);

export default NutrientLevels;
