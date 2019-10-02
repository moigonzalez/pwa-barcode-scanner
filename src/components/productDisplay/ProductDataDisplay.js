import React from 'react';
import { Redirect } from 'react-router-dom';

import { HistoryHandler } from '../history';

import ProductDataFilter from './ProductDataFilter';
import ProductDisplayTitle from './ProductDisplayTitle';
import NutrientLevels from './NutrientLevels';
import DietaryData from './DietaryData';
import Additives from './Additives';
import AddProductInfo from '../addProductInfo';
import NutriScore from '../nutriScore';
import NovaGroup from '../novaGroup';

const ProductDataDisplay = (data) => {
  const { code, status, product } = data.data;

  if (status !== 1) {
    return <Redirect
            to={{
              pathname: '/product/not-found',
              search: `?code=${code}`
            }}
            />;
  }

  const p = new ProductDataFilter(product);

  HistoryHandler.addProduct(code, p.productDataThumbView());

  return (
    <div className="productDisplay__container">
      <ProductDisplayTitle code={code} productName={product.product_name} thumb={product.image_thumb_url}/>
      <div className="productDisplay__scores">
        <NutriScore score={product.nutrition_grades} extraClass="nutriscore__detail" />
        <NovaGroup group={product.nova_group} tag={product.nova_groups_tags} />
      </div>
      <NutrientLevels product={p}/>
      <DietaryData product={p} />
      <Additives product={p} />
      <AddProductInfo status={status} barcode={code} />
    </div>
    );
};

export default ProductDataDisplay;
