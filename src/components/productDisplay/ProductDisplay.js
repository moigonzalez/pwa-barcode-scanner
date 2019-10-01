import React, { useState, useEffect } from 'react';
import ProductDataDisplay from './ProductDataDisplay';

import ProductDisplaySkeleton from './productDisplay.skeleton';

import './productDisplay.css';

const ProductDisplay = (props) => {

  const [ isLoading, setIsLoading ] = useState(true);
  const [ productInfo, setProductInfo ] = useState(null);

  const onInfoFetched = (result) => {
    setProductInfo(result);
    setIsLoading(false);
  }

  useEffect(() => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${props.match.params.id}.json`)
      .then(res => res.json())
      .then(res => onInfoFetched(res));
  }, []);

  return (
    <>
    {isLoading ? <ProductDisplaySkeleton /> : ""}
    {productInfo !== null ? <ProductDataDisplay data={productInfo}/> : ""}
    </>
  );
};

export default ProductDisplay;
