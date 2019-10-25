import React from 'react';

import ADDITIVES_DATA from "./additives.json";

const Additives = (product) => {
  const setAdditives = () => {
    if (localStorage.getItem("ADDITIVES") === null) {
      localStorage.setItem("ADDITIVES", JSON.stringify(ADDITIVES_DATA));
    }
    return JSON.parse(localStorage.getItem("ADDITIVES"));
  };

  const additives = setAdditives();

  const normalize = (x) => {
    return x.toUpperCase().substring(0, 4);
  }

  const getAdditive = (x) => additives[x] ? additives[x] : null;

  const getAdditiveData = (x) => {
    if (x === null) {
      return null;
    }
    return (
      <>
        <div>
          Name: {x.name}
        </div>
        <div>
          Risk: {x.risk}
        </div>
        <div>
          Function: {x.function}
        </div>
      </>
    )
  }

  const displayAdditives = () => {
      if (product.product.additives() === undefined) {
        return <div>Unknown <span role="img" aria-label="question mark">❓</span></div>
      }
      if (product.product.additives().length === 0) {
        return <div>None</div>
      }
      return product.product.additives().map((x) =>
        <div key={x} className="productDisplay__additive">
          <div><b>{x}</b></div>
          <div>{getAdditiveData(getAdditive(normalize(x)))}</div>
        </div>
    );
  }

  return (<section className="productDisplay__section">
    <h3 className="productDisplay__sectionTitle">Additives</h3>
    {displayAdditives()}
  </section>);
};

export default Additives;
