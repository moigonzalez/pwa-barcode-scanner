import React from 'react';

const NutrientLevels = (product) => (
  <section className="productDisplay__section">
    <h3 className="productDisplay__sectionTitle">Nutrient Levels</h3>
    {product.product.nutrientLevels() !== undefined ?
      product.product.nutrientLevels().map(x =>
      <div className="productDisplay__list--item" key={x.title}>
        <span className="productDisplay__list--label">{x.title}</span>
        <span className={`productDisplay__list--value ${x.value}`}>{x.value}</span>
      </div>)
      :
      <div className="produtList__unknown">Unknown <span role="img" aria-label="question emoji">❓</span></div>
    }
  </section>
);

export default NutrientLevels;
