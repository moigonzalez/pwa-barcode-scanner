import React from 'react';
import AddProductInfo from '../addProductInfo';

import styles from './productNotFound.css';

const ProductNotFound = () => (
  <div className="productNotFound__container">
    <h2 className="productDisplay__title not-found">Product not found 😢</h2>
    <AddProductInfo />
  </div>
);

export default ProductNotFound;
