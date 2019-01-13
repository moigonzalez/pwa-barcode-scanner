import React from 'react';

const Additives = (product) => (
  <section className="productDisplay__section">
    <h3 className="productDisplay__sectionTitle">Additives</h3>
    {product.product.additives().map((x, i, arr) =>
      <span key={i} className="productDisplay__additive">
        {x}
        {i+1 === arr.length ?
          ''
          :
          ','
        }
      </span>
    )}
  </section>
);

export default Additives;
