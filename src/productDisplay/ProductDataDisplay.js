import React from 'react';
import ProductDataFilter from './ProductDataFilter';
import ProductDisplayTitle from './ProductDisplayTitle';
import NutrientLevels from './NutrientLevels';

const ProductDataDisplay = (data) => {
  const { code, status, product } = data.data;
  let p;

  if (status !== 1) {
    return (<h2 className="productDisplay__title not-found">Product not found 😢</h2>);
  }

  p = new ProductDataFilter(product);

  return (
    <div className="productDisplay__container">
      <ProductDisplayTitle code={code} productName={product.product_name} thumb={product.image_thumb_url}/>
      <NutrientLevels />
      <div className="productDisplay__foodType">
        <h3 className="productDisplay__diets">Special Diets</h3>
        {p.isVegetarian() ? <div className="productDisplay__diets--item">🌱 Vegetarian Friendly</div> : ''}
        {p.containsGluten() ? <div className="productDisplay__diets--item">🌾 Has Gluten</div> : ''}
        {p.containsLactose() ? <div className="productDisplay__diets--item">🐄 Has Lactose</div> : ''}
      </div>
    </div>
    );
};

export default ProductDataDisplay;
