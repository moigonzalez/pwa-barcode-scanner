import React from 'react';

const DietaryData = (product) => (
  <div className="productDisplay__section">
    <h3 className="productDisplay__sectionTitle">Special Diets</h3>
    <div className="productDisplay__list--item">
      <span>🌱 Vegetarian Friendly:</span>
      <span className="productDisplay__list--value">
        {product.product.isVegetarian() === undefined ?
        'Unknown ❓'
        :
        product.product.isVegetarian() ? 'Yes' : 'No'}
      </span>
    </div>
    <div className="productDisplay__list--item">
      <span>🌾 Gluten Free:</span>
      <span className="productDisplay__list--value">
        {product.product.containsGluten() === undefined ?
        'Unknown ❓'
        :
        product.product.containsGluten() ? 'Yes' : 'No'}
      </span>
    </div>
    <div className="productDisplay__list--item">
      <span>🐄 Lactose:</span>
      <span className="productDisplay__list--value">
        {product.product.containsLactose() === undefined ?
        'Unknown ❓'
        :
        product.product.containsLactose() ? 'Yes' : 'No'}
      </span>
    </div>
    <div className="productDisplay__list--item">
      <span>⚠️ Palm Oil:</span>
      <span className="productDisplay__list--value">
        {product.product.containsPalmOil() === undefined ?
        'Unknown ❓'
        :
        product.product.containsPalmOil() ? 'Yes' : 'No'}
      </span>
    </div>
  </div>
);

export default DietaryData;
