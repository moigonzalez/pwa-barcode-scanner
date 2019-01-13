import React from 'react';

const NutrientLevels = (product) => (
  <section className="productDisplay__section">
    <h3 className="productDisplay__sectionTitle">Nutrient Levels</h3>
    {product.product.nutrientLevels() !== undefined ?
      product.product.nutrientLevels().map((x, i) =>
      <div className="productDisplay__list--item" key={i}>
        <span className="productDisplay__list--label">{x.title}</span>
        <span className={`productDisplay__list--value ${x.value}`}>{x.value}</span>
      </div>)
      :
      <div className="produtList__unkown">Unkown ❓</div>
    }
  </section>
);

export default NutrientLevels;
