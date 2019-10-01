import React from 'react';

const Additives = (product) => {
  const displayAdditives = () => {
      if (product.product.additives() === undefined) {
        return <div>Unknown <span role="img" aria-label="question mark">❓</span></div>
      }
      if (product.product.additives().length === 0) {
        return <div>None</div>
      }
      return product.product.additives().map((x, i, arr) =>
        <span key={x} className="productDisplay__additive">
          {x}
          {i+1 === arr.length ?
            ''
            :
            ','
          }
        </span>
    );
  }

  return (<section className="productDisplay__section">
    <h3 className="productDisplay__sectionTitle">Additives</h3>
    {displayAdditives()};
  </section>);
};

export default Additives;
