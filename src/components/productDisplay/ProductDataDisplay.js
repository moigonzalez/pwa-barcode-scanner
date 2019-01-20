import React from 'react';
import { Redirect } from 'react-router-dom';

import ProductDataFilter from './ProductDataFilter';
import ProductDisplayTitle from './ProductDisplayTitle';
import NutrientLevels from './NutrientLevels';
import DietaryData from './DietaryData';
import Additives from './Additives';
import AddProductInfo from '../addProductInfo';
import Nutriscore from './Nutriscore';

const ProductDataDisplay = (data) => {
  const { code, status, product } = data.data;
  let p;

  if (status !== 1) {
    return <Redirect
            to={{
              pathname: '/product/not-found',
              search: `?code=${code}`
            }}
            />;
  }

  p = new ProductDataFilter(product);

  return (
    <div className="productDisplay__container">
      <ProductDisplayTitle code={code} productName={product.product_name} thumb={product.image_thumb_url}/>
      <Nutriscore score={product.nutrition_grades} />
      <NutrientLevels product={p}/>
      <DietaryData product={p} />
      <Additives product={p} />
      <AddProductInfo status={status} barcode={code} />
    </div>
    );
};

export default ProductDataDisplay;
