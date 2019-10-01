import React from 'react';

const DietaryData = (product) => {
  const displayDietaryDataItem = (condition) => {
    let content;

    if (condition === undefined) {
      content = 'Unknown ❓';
    } else {
      content = condition ? 'Yes' : 'No';
    }

    return (<span className="productDisplay__list--value">
      {content}
    </span>)
  }

  return (<div className="productDisplay__section">
    <h3 className="productDisplay__sectionTitle">Special Diets</h3>
    <div className="productDisplay__list--item">
      <span><span role="img" aria-label="plant">🌱</span> Plant Based:</span>
      {displayDietaryDataItem(product.product.isPlantBased())}
    </div>
    <div className="productDisplay__list--item">
      <span><span role="img" aria-label="wheat">🌾</span> Gluten:</span>
      {displayDietaryDataItem(product.product.containsGluten())}
    </div>
    <div className="productDisplay__list--item">
      <span><span role="img" aria-label="cow">🐄</span> Lactose:</span>
      {displayDietaryDataItem(product.product.containsLactose())}
    </div>
    <div className="productDisplay__list--item">
      <span><span role="img" aria-label="warning">⚠️</span> Palm Oil:</span>
      {displayDietaryDataItem(product.product.containsPalmOil())}
    </div>
  </div>);
};

export default DietaryData;
