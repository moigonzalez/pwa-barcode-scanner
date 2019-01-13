import React from 'react';

const DietaryData = (product) => (
  <div className="productDisplay__section">
    <h3 className="productDisplay__sectionTitle">Special Diets</h3>
    {product.product.isVegetarian() ? <div className="productDisplay__diets--item">🌱 Vegetarian Friendly</div> : ''}
    {product.product.containsGluten() ? <div className="productDisplay__diets--item">🌾 Has Gluten</div> : ''}
    {product.product.containsLactose() ? <div className="productDisplay__diets--item">🐄 Has Lactose</div> : ''}
    {product.product.containsPalmOil() ? <div className="productDisplay__diets--item">⚠️ Has Palm Oil</div> : ''}
  </div>
);

export default DietaryData;
