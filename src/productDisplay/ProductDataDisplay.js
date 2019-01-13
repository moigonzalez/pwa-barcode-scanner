import React from 'react';
import ProductDataFilter from './ProductDataFilter';
import ProductDisplayTitle from './ProductDisplayTitle';
import NutrientLevels from './NutrientLevels';
import DietaryData from './DietaryData';

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
      <NutrientLevels product={p}/>
      <DietaryData product={p} />
    </div>
    );
};

export default ProductDataDisplay;
