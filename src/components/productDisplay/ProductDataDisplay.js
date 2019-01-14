import React from 'react';
import ProductDataFilter from './ProductDataFilter';
import ProductDisplayTitle from './ProductDisplayTitle';
import NutrientLevels from './NutrientLevels';
import DietaryData from './DietaryData';
import Additives from './Additives';
import AddProductInfo from '../addProductInfo';
import ProductNotFound from '../productNotFound';

const ProductDataDisplay = (data) => {
  const { code, status, product } = data.data;
  let p;

  if (status !== 1) {
    return <ProductNotFound />;
  }

  p = new ProductDataFilter(product);

  return (
    <div className="productDisplay__container">
      <ProductDisplayTitle code={code} productName={product.product_name} thumb={product.image_thumb_url}/>
      <Additives product={p} />
      <NutrientLevels product={p}/>
      <DietaryData product={p} />
      <AddProductInfo status={status} barcode={code} />
    </div>
    );
};

export default ProductDataDisplay;
